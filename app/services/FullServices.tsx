"use client";

import React from "react";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Presentation,
  Blocks,
  Component,
  Percent,
  MoveRight,
  Telescope,
  Rocket,
} from "lucide-react";
import { PiStrategyFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiFillBuild } from "react-icons/ai";
import { TbRulerMeasure2 } from "react-icons/tb";
import { serviceData } from "@/components/Services";
import { testimonials } from "../Workdata/Works";
import { motion, cubicBezier } from "motion/react";
import Link from "next/link";

// const serviceData = [
//   {
//     title: "Digital Marketing & Campaigns",
//     icon: <Presentation />,
//     summary:
//       "We turn strategy into stories that travel. By blending data, creativity, and precision, we deliver campaigns that connect, convert, and endure. Every click, view, and share is guided by insight and designed for impact. ",
//     lists: [
//       "Social Media Management",
//       "Social Media Campaigns",
//       "Email Marketing",
//       "Influencer Marketing",
//     ],
//   },
//   {
//     title: "⁠Content & Brand Development",
//     icon: <Blocks />,
//     summary:
//       "Great brands are built on great stories. We craft the language, visuals, and voice that make yours unforgettable by shaping identities that stand out, inspire trust, and grow stronger with every interaction.",
//     lists: [
//       "Content Strategy",
//       "Brand Strategy",
//       "Branding (Visual Identity, Messaging, Collateral)",
//       "Storytelling & Copywriting",
//     ],
//   },
//   {
//     title: "Experience & Design",
//     icon: <Component />,
//     summary:
//       "Design is how your brand feels in motion. We blend beauty, function, and technology to shape digital products and immersive interfaces that create seamless experiences people remember and return to.",
//     lists: [
//       "UI/UX Design",
//       "Website Design & Development",
//       "Mobile App Development",
//       "Visual Design & Motion Graphics",
//     ],
//   },
//   {
//     title: "Traditional & Experiential Marketing",
//     icon: <Percent />,
//     summary:
//       "Some stories deserve to be felt, not just seen. We bring brands to life through experiences that touch hearts and drive engagement. From activations and events to the big screens and city lights, we create moments that stay with people long after they happen.",
//     lists: [
//       "Event Marketing",
//       "Experiential Marketing (Brand Activations, Pop-Ups, Product Launches)",
//       "TV/Radio Advertising",
//       "Billboard Advertising",
//     ],
//   },
// ];

const approach = [
  {
    title: "Discover and Define",
    text: " We begin by learning about your brand, your audience, and your goals. This helps us uncover what truly sets you apart and how to position your brand for meaningful growth.",
    icon: <Telescope size={35} />,
  },
  {
    title: "Strategize and Plan",
    text: "Once we understand the landscape, we design a clear roadmap. Every idea and channel choice is backed by data and insight to ensure your marketing works where it matters most.",
    icon: <PiStrategyFill size={35} />,
  },
  {
    title: "Create and Build",
    text: "Here’s where ideas come alive. Our team blends strategy, storytelling, and design to create campaigns, content, and experiences that feel authentic and connect deeply with people.",
    icon: <AiFillBuild size={35} />,
  },
  {
    title: "Launch and Amplify",
    text: "We execute with focus and precision, ensuring your message reaches the right audience at the right moment. From there, we amplify your visibility to build lasting momentum.",
    icon: <Rocket size={35} />,
  },
  {
    title: "Measure and Evolve",
    text: "We monitor performance and continuously refine based on data and trends, ensuring your brand stays ahead.",
    icon: <TbRulerMeasure2 size={35} />,
  },
];

export const TestimonialCard = ({
  // starNo,
  content,
  name,
  position,
  image,
}: {
  // starNo: number;
  content: string;
  name: string;
  position: string;
  image?: string;
}) => {
  return (
    <div className="bg-[#20201e] flex flex-col justify-between p-8 px-6 rounded-xl">
      {/* <div className="flex items-center gap-1 text-[#f73444] mb-4">
        {Array.from({ length: starNo }, (_, i) => (
          <FaStar />
        ))}
      </div> */}
      <p className="italic mb-6 opacity-90  ">{content}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 grid place-items-center border border-gray-500 rounded-full mr-4 object-center object-cover overflow-hidden ">
          {image ? (
            <Image
              src={`/${image}`}
              alt={name}
              width={40}
              height={40}
              className=" object-center object-cover aspect-square "
            />
          ) : (
            <FaUser size={20} />
          )}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm opacity-75">{position}</p>
        </div>
      </div>
    </div>
  );
};

// const testimonials = [
//   {
//     // starNo: 5,
//     content:
//       '"Awani Digitals transformed our social media presence with a strong mix of creativity and strategy. Their professionalism, clarity, and deep understanding of our brand made the collaboration seamless, and the results truly speak for themselves."',
//     name: "Aisha Suraiya HD",
//     position: "Communications Lead, Sagad Farms",
//     image: "sagad2.png",
//   },
//   {
//     // starNo: 4,
//     content:
//       '"Awani Digitals has been a great addition to our brand. Their hard work, strategic input, and commitment contributed significantly to our growth and overall digital direction. Working with their team has been a valuable experience."',
//     name: "Tola Israel",
//     position: "Founder, Charis Israel Academy",
//     image: "CI1.png",
//   },

//   // {
//   //   starNo: 5,
//   //   content:
//   //     "Awani Digitals transformed our digital presence. Their strategic approach helped us increase our conversion rate by 45% in just three months.",
//   //   name: "Sarah Johnson",
//   //   position: "CMO TechFusion",
//   // },
// ];

const titleVariant = {
  initial: {
    y: 100,
    opacity: 0,
    scale: 0.4,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,

      ease: cubicBezier(0, 0, 1, 1),
    },
  },
};

const subTitleVariant = {
  initial: {
    y: 50,
    opacity: 0,
    scale: 0.4,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      ease: cubicBezier(0, 0, 1, 1),
    },
  },
};

export const FullServices = () => {
  return (
    <div className="w-full">
      <div className="bg-[#20201e] our_services pt-20 text-[#faf5ff] min-h-screen w-full font-sans">
        {/* Header */}

        {/* Hero Section */}
        <section className="max-w-[1200px] w-full mx-auto min-h-[80vh] grid place-items-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              variants={titleVariant}
              initial="initial"
              animate="animate"
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Strategic{" "}
              <span className="text-[#f73444]">Marketing Services</span> for
              Growth-Driven Brands
            </motion.h1>
            <motion.p
              variants={subTitleVariant}
              initial="initial"
              animate="animate"
              className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed"
            >
              Transform your brand’s presence with insight-led strategies built
              to accelerate growth, deepen connection, and deliver measurable
              returns.
            </motion.p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  const el = document.getElementById("services-section");
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                aria-label="Scroll to services"
                className="bg-[#f73444] text-[#faf5ff] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all suble_hover transform hover:scale-105"
              >
                Explore Services
              </button>
              {/* <button className="border border-[#faf5ff] text-[#faf5ff] px-8 py-3 rounded-full font-medium hover:bg-[#faf5ff] suble_hover hover:text-[#20201e] transition-all">
                Schedule a Call
              </button> */}
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section
          id="services-section"
          className=" w-full flex flex-col items-center justify-center bg-background py-20 px-4"
        >
          <div className="text-center max-w-[1200px] w-full mb-16">
            <motion.h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </motion.h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              Comprehensive marketing solutions tailored to your business needs
              and growth objectives.
            </p>
          </div>

          <div className=" max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {/* Service Card 1 */}
            {serviceData.map((s, index) => (
              <div className="bg-[#2a2a28] rounded-xl p-8 hover:transform hover:scale-105 transition-all flex flex-col justify-between  duration-300 border-t-2 border-[#f73444]">
                <div className="w-full flex flex-col">
                  <div className="w-12 h-12 bg-[#f73444] rounded-full flex items-center justify-center mb-6">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                  <p className="opacity-75 text-sm mb-4">{s.summary}</p>

                  <ul className="list-disc marker:text-primary marker:text-lg list-inside flex flex-col gap-2 text-left  w-full">
                    {s.lists.map((item, index) => (
                      <li key={index} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/send-brief"
                  className="inline-flex mt-6 items-center text-[#f73444] font-medium text-sm hover:underline suble_hover "
                >
                  Send A Brief
                  <span className="material-symbols-outlined text-sm ml-1">
                    <MoveRight />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-[1200px] w-full mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Approach
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              We combine data, design, and storytelling to create marketing that
              not only looks good but performs powerfully across every
              touchpoint.
            </p>
          </div>

          <div className=" justify-center items-center flex flex-wrap  gap-8 max-w-6xl gap-y-14 mx-auto">
            {approach.map((a, index) => (
              <div className="text-center max-w-[340px] w-full ">
                <div className="w-17 h-17 bg-[#f73444] rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all">
                  {a.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {index + 1}. {a.title}
                </h3>
                <p className="opacity-75">{a.text}</p>
              </div>
            ))}
          </div>

          {/* <p className="text-center w-full bg-[#2a2a28] px-6 py-8 rounded-lg text-primary mt-14 lg:text-xl text-lg ">
            Schedule a free 30 minutes strategy session with our marketing
            experts and discover how we can help you achieve your business
            goals.
          </p> */}
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#2a2a28]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients Say
              </h2>
              <p className="max-w-2xl mx-auto text-lg opacity-80">
                Don't just take our word for it, hear from the brands we've
                helped grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <TestimonialCard key={index} {...t} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-[#f73444] rounded-2xl p-10 md:p-16 text-center max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#faf5ff]">
                Ready to Accelerate Your Brand Growth?
              </h2>
              <p className="text-lg mb-8 opacity-90 text-[#faf5ff] max-w-2xl mx-auto">
                Schedule a free 30 mins strategy session with our marketing
                experts and discover how we can help you achieve your business
                goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href={"/send-brief"}
                  className="bg-[#faf5ff] text-[#20201e] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Book a Strategy Session
                </Link>
                <Link
                  href={"/works"}
                  className="border border-[#faf5ff] text-[#faf5ff] px-8 py-3 rounded-full font-medium hover:bg-[#faf5ff] hover:text-[#f73444] transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
