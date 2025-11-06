// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { supabase } from "@/app/lib/supabase";
// import { uploadImageToCloudinary } from "@/app/lib/cloudinary";
// import { useAuth } from "@/contexts/AuthContext";
// import { Upload, Loader2 } from "lucide-react";

// const CATEGORIES = [
//   "Technology",
//   "Development",
//   "Design",
//   "Business",
//   "Tutorial",
//   "News",
// ];

// export default function page() {
//   const [title, setTitle] = useState("");
//   const [excerpt, setExcerpt] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("Technology");
//   const [readTime, setReadTime] = useState("5");
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string>("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState(false);
//   const router = useRouter();
//   const { user } = useAuth();

//   function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (!file.type.startsWith("image/")) {
//       setError("Please select an image file");
//       return;
//     }

//     if (file.size > 5 * 1024 * 1024) {
//       setError("Image must be less than 5MB");
//       return;
//     }

//     setImageFile(file);
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setImagePreview(e.target?.result as string);
//     };
//     reader.readAsDataURL(file);
//     setError(null);
//   }

//   async function handlePublish() {
//     setError(null);

//     if (!title.trim()) {
//       setError("Title is required");
//       return;
//     }

//     if (!excerpt.trim()) {
//       setError("Excerpt is required");
//       return;
//     }

//     if (!content.trim()) {
//       setError("Content is required");
//       return;
//     }

//     if (!imageFile) {
//       setError("Featured image is required");
//       return;
//     }

//     setLoading(true);

//     try {
//       let imageUrl = "";

//       imageUrl = await uploadImageToCloudinary(imageFile);

//       const slug = title
//         .toLowerCase()
//         .replace(/[^\w\s-]/g, "")
//         .replace(/\s+/g, "-")
//         .replace(/-+/g, "-");

//       const { error: insertError } = await supabase.from("blog_posts").insert([
//         {
//           title,
//           slug,
//           excerpt,
//           content,
//           category,
//           image_url: imageUrl,
//           read_time: `${readTime} min read`,
//           author: user?.email || "Anonymous",
//           published_at: new Date().toISOString(),
//         },
//       ]);

//       if (insertError) throw insertError;

//       setSuccess(true);
//       setTimeout(() => {
//         router.push("/blogs");
//       }, 2000);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Failed to publish blog");
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#20201e] py-12 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-[#faf5ff] text-4xl font-bold mb-8">
//           Create New Blog Post
//         </h1>

//         {error && (
//           <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-6 py-4 rounded-lg mb-8">
//             {error}
//           </div>
//         )}

//         {success && (
//           <div className="bg-green-500/20 border border-green-500/50 text-green-300 px-6 py-4 rounded-lg mb-8">
//             Blog published successfully! Redirecting...
//           </div>
//         )}

//         <div className="space-y-6">
//           <div>
//             <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
//               Title
//             </label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-4 py-3 bg-gray-800 text-[#faf5ff] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors"
//               placeholder="Enter blog title..."
//             />
//           </div>

//           <div>
//             <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
//               Excerpt
//             </label>
//             <textarea
//               value={excerpt}
//               onChange={(e) => setExcerpt(e.target.value)}
//               rows={3}
//               className="w-full px-4 py-3 bg-gray-800 text-[#faf5ff] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors resize-none"
//               placeholder="Enter a brief summary of your blog post..."
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
//                 Category
//               </label>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-800 text-[#faf5ff] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors"
//               >
//                 {CATEGORIES.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
//                 Read Time (minutes)
//               </label>
//               <input
//                 type="number"
//                 value={readTime}
//                 onChange={(e) => setReadTime(e.target.value)}
//                 min="1"
//                 max="60"
//                 className="w-full px-4 py-3 bg-gray-800 text-[#faf5ff] border border-gray-700 rounded-lg focus:outline-none focus:border-[#f73444] transition-colors"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
//               Featured Image
//             </label>
//             <div className="border-2 border-dashed border-gray-700 rounded-lg p-8">
//               {imagePreview ? (
//                 <div className="relative">
//                   <img
//                     src={imagePreview}
//                     alt="Preview"
//                     className="w-full h-64 object-cover rounded-lg"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setImageFile(null);
//                       setImagePreview("");
//                     }}
//                     className="mt-3 px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
//                   >
//                     Remove image
//                   </button>
//                 </div>
//               ) : (
//                 <label className="cursor-pointer">
//                   <div className="flex flex-col items-center justify-center">
//                     <Upload size={32} className="text-gray-500 mb-3" />
//                     <p className="text-[#faf5ff] text-center mb-1">
//                       Click to upload or drag and drop
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                       PNG, JPG, GIF up to 5MB
//                     </p>
//                   </div>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageChange}
//                     className="hidden"
//                   />
//                 </label>
//               )}
//             </div>
//           </div>

//           <div>
//             <label className="block text-[#faf5ff] text-sm font-semibold mb-2">
//               Content
//             </label>
//             <div className="bg-gray-800 rounded-lg overflow-hidden">
//               <ReactQuill
//                 theme="snow"
//                 value={content}
//                 onChange={setContent}
//                 modules={{
//                   toolbar: [
//                     [{ header: [1, 2, 3, false] }],
//                     ["bold", "italic", "underline", "strike"],
//                     [{ list: "ordered" }, { list: "bullet" }],
//                     ["blockquote", "code-block"],
//                     ["link"],
//                     ["clean"],
//                   ],
//                 }}
//                 className="text-[#faf5ff]"
//                 style={{ height: "400px" }}
//               />
//             </div>
//           </div>

//           <div className="flex gap-4 pt-6">
//             <button
//               onClick={() => router.push("/blogs")}
//               className="px-6 py-3 bg-gray-700 text-[#faf5ff] rounded-lg hover:bg-gray-600 transition-colors font-medium"
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handlePublish}
//               disabled={loading}
//               className="flex-1 px-6 py-3 bg-[#f73444] text-[#faf5ff] rounded-lg hover:bg-[#d41234] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//             >
//               {loading && <Loader2 size={20} className="animate-spin" />}
//               {loading ? "Publishing..." : "Publish Blog"}
//             </button>
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .ql-container, .ql-editor {
//           background-color: #2a2a28;
//           color: #faf5ff;
//           border: none;
//         }
//         .ql-toolbar {
//           background-color: #1a1a18;
//           border: 1px solid #404038;
//         }
//         .ql-stroke {
//           stroke: #faf5ff;
//         }
//         .ql-fill, .ql-stroke.ql-fill {
//           fill: #faf5ff;
//         }
//         .ql-picker-label {
//           color: #faf5ff;
//         }
//         .ql-snow a {
//           color: #f73444;
//         }
//       `}</style>
//     </div>
//   );
// }
