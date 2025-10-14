"use client";
import React from "react";
import {
  BriefcaseBusiness,
  Presentation,
  Blocks,
  Component,
  Percent,
  MoveRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ServicesCard from "./ServicesCard";

const serviceData = [
  {
    title: "Digital Marketing & Campaigns",
    icon: <Presentation />,
    lists: [
      "Social Media Management",
      "Social Media Campaigns",
      "Email Marketing",
      "Influencer Marketing",
    ],
  },
  {
    title: "⁠Content & Brand Development",
    icon: <Blocks />,
    lists: [
      "Content Strategy",
      "Brand Strategy",
      "Branding (Visual Identity, Messaging, Collateral)",
      "Storytelling & Copywriting",
    ],
  },
  {
    title: "Experience & Design",
    icon: <Component />,
    lists: [
      "UI/UX Design",
      "Website Design & Development",
      "Mobile App Development",
      "Visual Design & Motion Graphics",
    ],
  },
  {
    title: "Traditional & Experiential Marketing",
    icon: <Percent />,
    lists: [
      "Event Marketing",
      "Experiential Marketing (Brand Activations, Pop-Ups, Product Launches)",
      "TV/Radio Advertising",
      "Billboard Advertising",
    ],
  },
];

const Services = () => {
  return (
    <div className="w-full  our_services grid place-items-center ">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 items-center py-20">
        <h1 className=" flex gap-2 px-4 mb-4 items-center text-sm font-semibold text-primary uppercase w-full  ">
          {" "}
          <BriefcaseBusiness className="w-4 h-4" /> Our Services
        </h1>

        <div className="flex flex-col items-center gap-5">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center ">
            What We Can Do
            <span className="block text-primary text-center ">For You</span>
          </h1>
          <motion.div
            className="w-24 h-1 mt-[-20px] bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {serviceData.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              icon={service.icon}
              lists={service.lists}
            />
          ))}
          <button className="bg-primary rounded-md grid place-items-center p-3 text-secondary ">
            <div className="flex gap-3 items-center hover:scale-105 transition-transform">
              <p className="text-2xl font-semibold">Explore</p>
              <MoveRight className="w-6 h-6 text-white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
