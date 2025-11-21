"use client";

import { BlogCard } from "@/components/BlogCard";
import React from "react";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { BlogPost } from "@/components/BlogsSection";
import { ChevronDown } from "lucide-react";

const CATEGORIES = [
  "All",
  "Social Media",
  "Content",
  "Branding & Design",
  "Traditional",
  "Experiential",
  "Career",
  "Digital Marketing",
  "News",
];
const page = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [blogCategory, setBlogCategory] = useState("All");
  const [openBlogCategory, setOpenBlogCategory] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [blogs, blogCategory]);

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

  const filterBlogs = () => {
    if (blogCategory === "All") {
      setFilteredBlogs(blogs);
      return;
    }
    const filtered = blogs.filter((b) => b.category === blogCategory);
    setFilteredBlogs(filtered);
  };

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
            <div className="w-full flex flex-col gap-10 justify-center items-center ">
              <div className="w-full">
                <p className="mb-1 font-medium">Filter by Categories:</p>

                <div
                  onClick={() => setOpenBlogCategory((prev) => !prev)}
                  className=" max-w-[200px] border border-primary rounded-xl flex justify-between items-center gap-1 w-full px-4 py-1.5 pl-7 bg-[#f7344411] relative  "
                >
                  {blogCategory} <ChevronDown />
                  {openBlogCategory && (
                    <ul className="flex w-full left-0 rounded-lg bg-red-50 flex-col absolute top-9 pb-3 z-30 ">
                      {CATEGORIES.map((c, index) => (
                        <li
                          onClick={() => setBlogCategory(c)}
                          className="text-black w-full pl-6 px-3 py-2 border-b border-primary "
                        >
                          {c}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-center gap-x-8 gap-y-10 flex-wrap ">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, index) => (
                    <BlogCard key={index} {...blog} />
                  ))
                ) : (
                  <p>No Blog Post to display for this category...</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
