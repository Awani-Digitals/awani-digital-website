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

  // if (loading) {
  //   return (
  //     <div className="min-h-screen bg-[#20201e] flex items-center justify-center">
  //       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f73444]"></div>
  //     </div>
  //   );
  // }
  return (
    <div className="w-full grid place-items-center mt-10 ">
      <div className="w-full h-[400px] our_blog flex flex-col justify-center items-center ">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 text-center ">
          Our Blog
        </h1>
        <p className="text-white max-w-[800px] text-center text-lg font-medium">
          We share marketing perspectives, success stories, and actionable ideas
          that help brands grow, adapt, and stay ahead in a fast-changing world.
          Every article is written to inspire better thinking and smarter
          execution across digital, brand, and experience.
        </p>
      </div>
      <div className="bg-white w-full grid place-items-center py-20 ">
        <div className="max-w-[1200px] w-full flex flex-col gap-10 items-center px-4 ">
          {/* <h1 className="text-4xl w-full font-semibold text-black mb-4 text-left">
            Notes From the Desk, Stories Worth Sharing
          </h1> */}
          {loading ? (
            <div className="w-full py-20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f73444]"></div>
            </div>
          ) : (
            <div className="w-full flex justify-center gap-x-8 gap-y-10 flex-wrap ">
              {blogs.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
