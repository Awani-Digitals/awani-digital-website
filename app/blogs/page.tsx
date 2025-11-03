"use client";

import { BlogCard } from "@/components/BlogCard";
import React from "react";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { BlogPost } from "@/components/BlogsSection";

const page = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  return (
    <div className="w-full grid place-items-center mt-10 ">
      <div className="w-full h-[400px] our_blog flex flex-col justify-center items-center ">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center ">
          Our Blog
        </h1>
        <p className="text-white text-lg font-medium">
          Stay updated with the latest trends and insights in the industry.
        </p>
      </div>
      <div className="bg-white w-full grid place-items-center py-20 ">
        <div className="max-w-[1200px] w-full flex flex-col gap-10 items-center px-4 ">
          <h1 className="text-4xl w-full font-semibold text-black mb-4 text-left">
            Notes From the Desk, Stories Worth Sharing
          </h1>

          <div className="w-full flex justify-center gap-x-8 gap-y-10 flex-wrap ">
            {blogs.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
