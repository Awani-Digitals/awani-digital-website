"use client";

import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { motion } from "framer-motion";
import WorksCard from "./WorksCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { worksData } from "@/app/Workdata/Works";

const Works = () => {
  return (
    <div className="w-full bg-background grid place-items-center  ">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 items-center py-20">
        <h1 className=" flex gap-2 px-4 mb-4 items-center text-sm font-semibold text-primary uppercase w-full  ">
          {" "}
          <MdOutlineWorkspacePremium className="w-4 h-4" /> Our Works
        </h1>

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

        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {worksData.slice(0, 3).map((work, index) => (
            <WorksCard key={index} {...work} />
          ))}
        </div>

        <div className="w-full grid place-items-center ">
          <Link
            className="bg-white text-primary rounded-md px-7 py-2.5 text-lg font-medium flex justify-center items-center gap-2 hover:bg-primary hover:text-white "
            href={"/"}
          >
            See All <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Works;
