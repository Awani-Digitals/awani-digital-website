"use client";
import React, { useState, useEffect } from "react";
import { BlogCard } from "@/components/BlogCard";
import { BlogPost } from "@/components/BlogsSection";
import Link from "next/link";
import { supabase } from "@/app/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

const page = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { user } = useAuth();

  useEffect(() => {
    fetchBlogs();
  }, []);
  async function fetchBlogs() {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("published_at", { ascending: false });

      if (error) throw error;

      const formattedBlogs =
        data?.map((post) => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author,
          published_at: new Date(post.published_at).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
          ),
          category: post.category,
          image_url: post.image_url,
          read_time: post.read_time,
          slug: post.slug,
        })) || [];

      setBlogs(formattedBlogs);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load blogs");
    } finally {
      setLoading(false);
    }
  }

  // --- Delete modal state & handlers ---
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selected, setSelected] = useState<{
    id: number | string;
    title: string;
  } | null>(null);
  const [deleting, setDeleting] = useState(false);

  function openDeleteConfirm(blogId: number | string, blogTitle: string) {
    setSelected({ id: blogId, title: blogTitle });
    setConfirmOpen(true);
  }

  function closeDeleteConfirm() {
    setConfirmOpen(false);
    setSelected(null);
  }

  async function handleDeleteConfirmed() {
    if (!selected) return;
    if (!user) {
      setError("You must be signed in to delete posts.");
      closeDeleteConfirm();
      return;
    }

    setDeleting(true);
    setError(null);

    try {
      const { error: deleteError } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", selected.id);

      if (deleteError) throw deleteError;

      // remove locally without re-fetch to keep UX snappy
      setBlogs((prev) => prev.filter((b) => b.id !== selected.id));
      closeDeleteConfirm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete blog");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="w-full grid place-items-center pt-[130px] pb-[100px] ">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 items-center px-4 ">
        <h1 className="w-full relative text-3xl md:text-5xl font-bold text-white mb-12 text-center  ">
          Manage Blogs
          <span className="absolute w-[100px] h-1.5 rounded-2xl bg-primary left-1/2 translate-x-[-50%] bottom-[-26px]  "></span>
        </h1>
        {/* <h1 className="text-4xl w-full font-semibold text-black mb-4 text-left">
                  Notes From the Desk, Stories Worth Sharing
                </h1> */}
        {loading ? (
          <div className="w-full py-20 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f73444]"></div>
          </div>
        ) : !blogs ? (
          <div className="w-full flex items-center justify-center gap-7">
            {" "}
            <p>No Blog Post to display</p>{" "}
            <Link className="text-primary underline" href="new-blog">
              Create New Blog Post
            </Link>{" "}
          </div>
        ) : (
          <div className="w-full flex justify-center gap-x-8 gap-y-10 flex-wrap ">
            {blogs?.map((blog, index) => (
              <BlogCard
                openDeleteConfirm={openDeleteConfirm}
                key={index}
                {...blog}
              />
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {confirmOpen && selected && (
        <div
          className="fixed inset-0 z-50 grid place-items-center"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/60"
            onClick={closeDeleteConfirm}
            aria-hidden="true"
          />
          <div className="relative z-10 w-full max-w-lg bg-background/95 border border-white/6 rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-white mb-3">
              Delete blog post
            </h3>
            <p className="text-sm text-gray-300 mb-6">
              Are you sure you want to permanently delete{" "}
              <strong className="text-white">{selected.title}</strong>? This
              action cannot be undone.
            </p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={closeDeleteConfirm}
                className="px-4 py-2 rounded-md bg-gray-700 text-[#faf5ff] hover:bg-gray-600 transition"
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirmed}
                className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition disabled:opacity-50"
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
