"use client";

import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { motion, easeIn } from "framer-motion";
import WorksCard from "./WorksCard";
import { TestimonialCard } from "@/app/services/FullServices";
import { testimonials } from "@/app/Workdata/Works";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { worksData } from "@/app/Workdata/Works";

const Works = () => {
  return (
    <div className="w-full bg-background grid place-items-center   ">
      <div className="max-w-[1200px] px-4 w-full flex flex-col gap-10 items-center py-20">
        <h1 className=" flex gap-2 px-4 mb-4 items-center text-sm font-semibold text-primary uppercase w-full  ">
          {" "}
          <MdOutlineWorkspacePremium className="w-4 h-4" /> Our Works
        </h1>

        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center ">
            Results We Have
            <span className="block text-primary text-center ">Delivered</span>
          </h1>
          <motion.div
            className="w-24 h-1 mt-[-20px] bg-primary mx-auto"
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 96 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          />
        </div>

        <div className="w-full mt-10 flex justify-center gap-x-8 gap-y-10 flex-wrap ">
          {worksData.slice(0, 3).map((work, index) => (
            <WorksCard key={index} {...work} />
          ))}
        </div>

        <div className="w-full grid place-items-center ">
          <Link
            className="bg-white text-primary rounded-md px-7 py-2.5 text-lg font-medium flex justify-center items-center gap-2 hover:bg-primary hover:text-white suble_hover "
            href={"/works"}
          >
            See All <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-20 text-[#faf5ff] w-full bg-[#2a2a28]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              What <span className="text-primary "> Our Clients</span> Say
            </h2>
            <motion.div
              className="w-24 h-1 bg-primary mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4, ease: easeIn }}
            />

            <p className="max-w-2xl mx-auto mt-4 text-lg opacity-80">
              Don't just take our word for it, hear from the brands we've helped
              grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <TestimonialCard key={index} {...t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
