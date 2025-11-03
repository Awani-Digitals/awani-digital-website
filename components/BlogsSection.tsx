import React from "react";
import { LibraryBig, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";
import Link from "next/link";

const sampleBlogs = [
  {
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the emerging technologies and methodologies that are reshaping how we build for the web. From AI integration to new frameworks, discover what's next.",
    author: "Sarah Chen",
    date: "Nov 1, 2025",
    category: "Technology",
    imageUrl:
      "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "5 min read",
  },
  {
    title: "Building Scalable Applications: Best Practices for Modern Teams",
    excerpt:
      "Learn the essential patterns and practices that help engineering teams build applications that can grow with your business needs.",
    author: "Michael Torres",
    date: "Oct 28, 2025",
    category: "Development",
    imageUrl:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "8 min read",
  },
  {
    title: "Design Systems: Creating Consistency at Scale",
    excerpt:
      "Discover how design systems can transform your product development process and create a unified user experience across all touchpoints.",
    author: "Emily Rodriguez",
    date: "Oct 25, 2025",
    category: "Design",
    imageUrl:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "6 min read",
  },
];

const BlogsSection = () => {
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

        <div className="w-full mt-10 flex justify-center gap-x-8 gap-y-10 flex-wrap ">
          {sampleBlogs.slice(0, 3).map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        <div className="w-full grid place-items-center my-6 ">
          <Link
            className="bg-white text-primary rounded-md px-7 py-2.5 text-lg font-medium flex justify-center items-center gap-2 hover:bg-primary hover:text-white "
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
