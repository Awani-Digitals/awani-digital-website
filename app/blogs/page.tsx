import { BlogCard } from "@/components/BlogCard";
import React from "react";
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
const page = () => {
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
            {sampleBlogs.slice(0, 3).map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
