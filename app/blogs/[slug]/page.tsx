"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// import { useParams } from "react-router-dom";
import { supabase } from "@/app/lib/supabase";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  published_at: string;
  category: string;
  image_url: string;
  read_time: string;
}

type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function page({ params }: BlogDetailPageProps) {
  const { slug } = params;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  async function fetchBlog() {
    if (!slug) return;

    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setError("Blog post not found");
        return;
      }

      setBlog(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load blog");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#20201e] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f73444]"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#20201e] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 mb-6">{error || "Blog post not found"}</p>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 bg-[#f73444] text-[#faf5ff] px-6 py-2 rounded-lg hover:bg-[#d41234] transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const publishedDate = new Date(blog.published_at).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="min-h-screen pt-20 bg-[#20201e]">
      <div className="max-w-[1200px] w-full mx-auto px-6 py-12">
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-[#f73444] hover:text-[#faf5ff] transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          Back to blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-[#f73444] text-[#faf5ff] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                {blog.category}
              </span>
            </div>

            <h1 className="text-[#faf5ff] text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>

            <div className="flex flex-wrap gap-6 pb-8 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#f73444] flex items-center justify-center text-[#faf5ff] font-semibold text-lg">
                  {blog.author.charAt(0)}
                </div>
                <div>
                  <p className="text-[#faf5ff] font-medium flex items-center gap-2">
                    <User size={16} className="text-[#f73444]" />
                    {blog.author}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Calendar size={14} className="text-[#f73444]" />
                    {publishedDate}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div>
                  <p className="text-[#faf5ff] font-medium flex items-center gap-2">
                    <Clock size={16} className="text-[#f73444]" />
                    {blog.read_time}
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <Tag size={14} className="text-[#f73444]" />
                    Article
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12 rounded-lg overflow-hidden shadow-2xl">
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-full h-auto object-contain object-center max-h-[80vh]"
            />
          </div>

          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: blog.content
                .replace(
                  /<h2>/g,
                  '<h2 class="text-3xl font-bold !text-[#faf5ff] mt-8 mb-4">',
                )
                .replace(
                  /<p>/g,
                  '<p class="!text-gray-300 text-base leading-relaxed mb-4">',
                )
                .replace(
                  /<span[^>]*style="[^"]*"[^>]*>/g,
                  '<span class="!text-gray-300">',
                ),
            }}
          />

          <div className="mt-16 pt-8 border-t border-gray-700">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-[#f73444] text-[#faf5ff] px-6 py-3 rounded-lg hover:bg-[#d41234] transition-colors duration-300 font-medium"
            >
              <ArrowLeft size={20} />
              Back to all articles
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
