"use client";

import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { motion } from "framer-motion";
import WorksCard from "@/components/WorksCard";
// import WorksCard from "./WorksCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { worksData } from "../Workdata/Works";

// const worksData = [
//   {
//     title: "Sagad Farms",
//     industry: "Agriculture / FMCG",
//     image: "/sagad1.jpg",
//     text: "We developed a holistic social media marketing strategy built around storytelling, authenticity, and consistency.",
//     sections: [
//       "Social Media Management",
//       "Social Media Campaigns",
//       "Paid Advertising (PPC)",
//       "Content Strategy",
//     ],
//     link: "/",
//   },
//   {
//     title: "Sagad Farms",
//     industry: "Agriculture / FMCG",
//     image: "/sagad1.jpg",
//     text: "We developed a holistic social media marketing strategy built around storytelling, authenticity, and consistency.",
//     sections: [
//       "Social Media Management",
//       "Social Media Campaigns",
//       "Paid Advertising (PPC)",
//       "Content Strategy",
//     ],
//     link: "/",
//   },
//   {
//     title: "Sagad Farms",
//     industry: "Agriculture / FMCG",
//     image: "/sagad1.jpg",
//     text: "We developed a holistic social media marketing strategy built around storytelling, authenticity, and consistency.",
//     sections: [
//       "Social Media Management",
//       "Social Media Campaigns",
//       "Paid Advertising (PPC)",
//       "Content Strategy",
//     ],
//     link: "/",
//   },
//   {
//     title: "Sagad Farms",
//     industry: "Agriculture / FMCG",
//     image: "/sagad1.jpg",
//     text: "We developed a holistic social media marketing strategy built around storytelling, authenticity, and consistency.",
//     sections: [
//       "Social Media Management",
//       "Social Media Campaigns",
//       "Paid Advertising (PPC)",
//       "Content Strategy",
//     ],
//     link: "/",
//   },
// ];

const WorksCards = () => {
  return (
    <div className="w-full bg-background px-4 grid place-items-center  ">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 items-center pt-[110px] py-20">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center ">
            Results We Have
            <span className="block text-primary text-center ">Delivered</span>
          </h1>

          <motion.div
            className="w-24 h-1 mt-[-20px] bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="w-full text-gray-100 text-lg flex justify-center items-center   mt-4 -mb-7 ">
          <p className="text-center max-w-[1000px] w-full ">
            Every brand we work with has a story, a challenge, and a dream. Our
            role is to bring them together through strategy and creativity that
            make people care and take action.
          </p>
        </div>
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {worksData.map((work, index) => (
            <WorksCard key={index} {...work} />
          ))}
        </div>

        {/* <div className="w-full grid place-items-center ">
          <Link
            className="bg-white text-primary rounded-md px-7 py-2.5 text-lg font-medium flex justify-center items-center gap-2 hover:bg-primary hover:text-white "
            href={"/"}
          >
            See All <ArrowRight />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default WorksCards;
