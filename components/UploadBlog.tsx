"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import ReactQuill from "react-quill";
import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";
import "react-quill-new/dist/quill.snow.css";
import { supabase } from "@/app/lib/supabase";
import { uploadImageToCloudinary } from "@/app/lib/cloudinary";
import { useAuth } from "@/contexts/AuthContext";
import { Upload, Loader2 } from "lucide-react";
import Link from "next/link";

const ReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

const CATEGORIES = [
  "Social Media",
  "Content",
  "Branding & Design",
  "Traditional",
  "Experiential",
  "Career",
  "Digital Marketing",
  "News",
];

export default function UploadBlog({
  id,
  slug,
}: {
  id?: string;
  slug?: string;
}) {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Technology");
  const [readTime, setReadTime] = useState("5");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { user, signOut } = useAuth();

  async function fetchBlog() {
    console.log("fetching blog for id:", id);
    if (!id) return;

    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setError("Blog post not found");
        return;
      }

      console.log("data", data);

      setTitle(data.title);
      setExcerpt(data.excerpt);
      setContent(data.content);
      setCategory(data.category);
      setReadTime(data.read_time.replace(" min read", ""));
      setImagePreview(data.image_url);

      // setBlog(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load blog");
    } finally {
      setLoading(false);
    }
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be less than 5MB");
      return;
    }

    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
    setError(null);
  }

  async function handlePublish() {
    setError(null);

    if (!user) {
      router.push("/admin");
    }

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!excerpt.trim()) {
      setError("Excerpt is required");
      return;
    }

    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    if (!imageFile) {
      setError("Featured image is required");
      return;
    }

    setLoading(true);

    try {
      let imageUrl = "";

      imageUrl = await uploadImageToCloudinary(imageFile);

      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      const { error: insertError } = await supabase.from("blog_posts").insert([
        {
          title,
          slug,
          excerpt,
          content,
          category,
          image_url: imageUrl,
          read_time: `${readTime} min read`,
          author: user?.email || "Anonymous",
          published_at: new Date().toISOString(),
        },
      ]);

      if (insertError) throw insertError;

      setSuccess(true);
      setTimeout(() => {
        router.push("/blogs");
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to publish blog");
      setLoading(false);
    }
  }

  async function handleUpdate() {
    setError(null);

    if (!user) {
      router.push("/admin");
      return;
    }

    if (!id) {
      setError("Missing blog id for update.");
      return;
    }

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!excerpt.trim()) {
      setError("Excerpt is required");
      return;
    }

    if (!content.trim()) {
      setError("Content is required");
      return;
    }

    setLoading(true);

    try {
      // determine image URL: upload if a new file was selected, otherwise keep existing preview/url
      let imageUrl = imagePreview || "";

      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile);
      }

      const newSlug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

      const { error: updateError } = await supabase
        .from("blog_posts")
        .update({
          title,
          slug: newSlug,
          excerpt,
          content,
          category,
          image_url: imageUrl,
          read_time: `${readTime} min read`,
          author: user?.email || "Anonymous",
          updated_at: new Date().toISOString(),
        })
        .eq("id", id);

      if (updateError) throw updateError;

      setSuccess(true);
      // navigate back to blog detail or list after a short delay
      setTimeout(() => {
        router.push(`/blogs/${newSlug}`);
      }, 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update blog");
      setLoading(false);
    }
  }

  console.log("auth", user);

  async function handleLogout() {
    await signOut();
    router.push("/blogs");
  }

  //   useEffect(() => {
  //     if (!user) {
  //       router.push("/admin");
  //     }
  //   });

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return (
    <div className="min-h-screen w-full mt-15 bg-[#20201e] py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#faf5ff] text-4xl font-bold mb-8 w-full flex justify-between items-center ">
          Create New Blog Post
          <Link
            className=" bg-primary text-white rounded-md px-3 py-2 text-base font-medium "
            href="manage-blogs"
          >
            Manage Blogs
          </Link>
        </h1>

        {error && (
          <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-6 py-4 rounded-lg mb-8">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-4 rounded-lg mb-8">
            Blog published successfully! Redirecting...
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-800 text-[#faf5ff] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors"
              placeholder="Enter blog title..."
            />
          </div>

          <div>
            <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
              Excerpt
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 bg-gray-800 text-[#faf5ff] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors resize-none"
              placeholder="Enter a brief summary of your blog post..."
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 text-[#faf5ff] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
                Read Time (minutes)
              </label>
              <input
                type="number"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                min="1"
                max="60"
                className="w-full px-4 py-3 bg-gray-800 text-[#faf5ff] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
              Featured Image
            </label>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview("");
                    }}
                    className="mt-3 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    Remove image
                  </button>
                </div>
              ) : (
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center">
                    <Upload size={32} className="text-gray-500 mb-3" />
                    <p className="text-[#faf5ff] text-center mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-gray-500 text-sm">
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          <div>
            <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
              Content
            </label>
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquote", "code-block"],
                    ["link"],
                    ["clean"],
                  ],
                }}
                className="text-[#faf5ff]"
                style={{ height: "400px" }}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-gray-700 text-[#faf5ff] rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={id ? handleUpdate : handlePublish}
              disabled={loading}
              className="flex-1 px-6 py-3 bg-[#f73444] text-[#faf5ff] rounded-lg hover:bg-[#d41234] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading && <Loader2 size={20} className="animate-spin" />}
              {loading ? "Publishing..." : "Publish Blog"}
            </button>

            <button
              onClick={handleLogout}
              className="px-6 py-3 bg-gray-700 text-[#faf5ff] rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              LogOut
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .ql-container, .ql-editor {
          background-color: #2a2a28;
          color: #faf5ff;
          border: none;
        }
        .ql-toolbar {
          background-color: #1a1a18;
          border: 1px solid #404038;
        }
        .ql-stroke {
          stroke: #faf5ff;
        }
        .ql-fill, .ql-stroke.ql-fill {
          fill: #faf5ff;
        }
        .ql-picker-label {
          color: #faf5ff;
        }
        .ql-snow a {
          color: #f73444;
        }
      `}</style>
    </div>
  );
}
