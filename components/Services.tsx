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

import { cubicBezier, easeInOut, motion } from "motion/react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import ServicesCard from "./ServicesCard";

export const serviceData = [
  {
    title: "Digital Marketing & Campaigns",
    icon: <Presentation />,
    summary:
      "We turn strategy into stories that travel. By blending data, creativity, and precision, we deliver campaigns that connect, convert, and endure. Every click, view, and share is guided by insight and designed for impact. ",
    lists: [
      "Social Media Management",
      "Social Media Campaigns",
      "Email Marketing",
      "Influencer Management",
      "Paid Advertising (PPC)",
      "SEO/SEM",
      "Market Research",
      "Digital Strategy",
    ],
  },
  {
    title: "⁠Content & Brand Development",
    icon: <Blocks />,
    summary:
      "Great brands are built on great stories. We craft the language, visuals, and voice that make yours unforgettable by shaping identities that stand out, inspire trust, and grow stronger with every interaction.",
    lists: [
      "Content Strategy",
      "Brand Strategy",
      "Branding (Visual Identity, Messaging, Collateral)",
      "Storytelling & Copywriting",
      "PR Services",
      "Creative Direction",
    ],
  },
  {
    title: "Experience & Design",
    icon: <Component />,
    summary:
      "Design is how your brand feels in motion. We blend beauty, function, and technology to shape digital products and immersive interfaces that create seamless experiences people remember and return to.",
    lists: [
      "Visual Design, Video Editing & Motion Graphics",
      "Mobile App Design & Development",
      "Website Design & Development",
    ],
  },
  {
    title: "Traditional & Experiential Marketing",
    icon: <Percent />,
    summary:
      "Some stories deserve to be felt, not just seen. We bring brands to life through experiences that touch hearts and drive engagement. From activations and events to the big screens and city lights, we create moments that stay with people long after they happen.",
    lists: [
      "Event Marketing",
      "Experiential Marketing (Brand Activations, Pop-Ups, Product Launches)",
      "TV/Radio Advertising",
      "Billboard Advertising",
      "Outdoor & Print Media",
    ],
  },
];

// VARIANTS
const titleVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: cubicBezier(0, 0, 1, 1),
      duration: 0.5,
    },
  },
};

const cardWrapperVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,

    transition: {
      ease: cubicBezier(0, 0, 1, 1),
      duration: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: easeInOut,
      duration: 0.5,
    },
  },
};

const Services = () => {
  // const router = useRouter();
  return (
    <div className="w-full  our_services grid place-items-center px-4 ">
      <div className="max-w-[1200px] w-full flex flex-col gap-10 items-center py-20">
        <h1 className=" flex gap-2 px-4 mb-4 items-center text-sm font-semibold text-primary uppercase w-full  ">
          {" "}
          <BriefcaseBusiness className="w-4 h-4" /> Our Services
        </h1>

        <motion.div
          variants={titleVariants}
          initial="initial"
          viewport={{ once: true }}
          whileInView="animate"
          className="flex flex-col items-center gap-5"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center ">
            What We Can Do
            <span className="block text-primary text-center ">For You</span>
          </h1>
          <motion.div
            className="w-24 h-1 mt-[-20px] bg-primary mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.3 }}
          />
        </motion.div>

        <motion.div
          variants={cardWrapperVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {serviceData.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              icon={service.icon}
              lists={service.lists}
              summary={service.summary}
            />
          ))}
          <motion.button
            // onClick={() => {
            //   router.push("/services");
            // }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            className="h-full bg-primary   rounded-md"
          >
            <Link
              href="/services"
              className="bg-primary grid place-items-center h-full w-full p-3 rounded-md text-secondary "
            >
              <div className="flex gap-3 items-center hover:scale-105 suble_hover transition-transform">
                <p className=" text-lg md:text-2xl font-semibold">Explore</p>
                <MoveRight className="w-6 h-6 text-white" />
              </div>
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
