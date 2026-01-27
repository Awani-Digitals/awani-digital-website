"use client";
import { supabase } from "../app/lib/supabase";
import { useEffect, useState } from "react";

import React from "react";
import { LibraryBig, ArrowRight } from "lucide-react";
import { easeInOut, motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import Link from "next/link";
// import { init } from "next/dist/compiled/webpack/webpack";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  published_at: string;
  category: string;
  image_url: string;
  read_time: string;
  slug: string;
}

const blogCardsWrapperVariant = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,

    transition: {
      ease: easeInOut,
      duration: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const BlogsSection = () => {
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
            },
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
    <div className=" grid our_blog place-items-center w-full px-4 ">
      <div className="max-w-[1200px] w-full flex flex-col gap-6 items-center py-20">
        <h1 className=" flex gap-2 px-4 mb-4 items-center text-sm font-semibold text-primary uppercase w-full  ">
          {" "}
          <LibraryBig className="w-4 h-4" /> Our Blog
        </h1>

        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center ">
            Notes From
            <span className="block text-primary text-center ">The Desk</span>
          </h1>
          <motion.div
            className="w-24 h-1 mt-[-20px] bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <motion.div
          variants={blogCardsWrapperVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full mt-10 flex justify-center gap-x-8 gap-y-10 flex-wrap "
        >
          {blogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </motion.div>

        <div className="w-full grid place-items-center my-6 ">
          <Link
            className="bg-white text-primary rounded-md px-7 py-2.5 text-lg font-medium flex justify-center items-center gap-2 hover:bg-primary hover:text-white suble_hover "
            href={"blogs"}
          >
            See All <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
