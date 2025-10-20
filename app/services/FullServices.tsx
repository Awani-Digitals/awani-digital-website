"use client";

import React from "react";
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

const serviceData = [
  {
    title: "Digital Marketing & Campaigns",
    text: "Strategic paid campaigns across search, social, and display networks to drive qualified traffic and conversions.",
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
    text: "Strategic paid campaigns across search, social, and display networks to drive qualified traffic and conversions.",
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
    text: "Strategic paid campaigns across search, social, and display networks to drive qualified traffic and conversions.",
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
    text: "Strategic paid campaigns across search, social, and display networks to drive qualified traffic and conversions.",
    icon: <Percent />,
    lists: [
      "Event Marketing",
      "Experiential Marketing (Brand Activations, Pop-Ups, Product Launches)",
      "TV/Radio Advertising",
      "Billboard Advertising",
    ],
  },
];

const approach = [
  {
    title: "Discovery",
    text: " Comprehensive market research and business analysis to identify opportunities.",
    icon: <Telescope size={40} />,
  },
  {
    title: "Strategy",
    text: "Development of a customized marketing plan aligned with your business objectives.",
    icon: <PiStrategyFill size={40} />,
  },
  {
    title: "Execution",
    text: "Tactical implementation across channels with continuous optimization.",
    icon: <Rocket size={40} />,
  },
];

export const FullServices = () => {
  return (
    <div className="w-full">
      <div className="bg-[#20201e] our_services pt-20 text-[#faf5ff] min-h-screen w-full font-sans">
        {/* Header */}

        {/* Hero Section */}
        <section className="max-w-[1200px] w-full mx-auto min-h-[80vh] grid place-items-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Strategic{" "}
              <span className="text-[#f73444]">Marketing Services</span> for
              Growth-Driven Brands
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-10 leading-relaxed">
              Transform your market presence with our data-driven marketing
              strategies designed to accelerate growth and maximize ROI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#f73444] text-[#faf5ff] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
                Explore Services
              </button>
              <button className="border border-[#faf5ff] text-[#faf5ff] px-8 py-3 rounded-full font-medium hover:bg-[#faf5ff] hover:text-[#20201e] transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}

        <section className=" w-full flex flex-col items-center justify-center bg-background py-20 px-4">
          <div className="text-center max-w-[1200px] w-full mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Marketing</span> Services
            </h2>
            <p className="max-w-2xl mx-auto text-lg opacity-80">
              Comprehensive marketing solutions tailored to your business needs
              and growth objectives.
            </p>
          </div>

          <div className=" max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {/* Service Card 1 */}
            {serviceData.map((s, index) => (
              <div className="bg-[#2a2a28] rounded-xl p-8 hover:transform hover:scale-105 transition-all flex flex-col justify-between  duration-300 border-t-2 border-[#f73444]">
                <div className="w-12 h-12 bg-[#f73444] rounded-full flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="opacity-75 mb-4">
                  Strategic paid campaigns across search, social, and display
                  networks to drive qualified traffic and conversions.
                </p>

                <ul className="list-disc marker:text-primary marker:text-lg list-inside flex flex-col gap-2 text-left  w-full">
                  {s.lists.map((item, index) => (
                    <li key={index} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex mt-6 items-center text-[#f73444] font-medium text-sm hover:underline"
                >
                  Send A Brief
                  <span className="material-symbols-outlined text-sm ml-1">
                    <MoveRight />
                  </span>
                </a>
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
              A systematic methodology that delivers results through strategic
              planning and execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {approach.map((a, index) => (
              <div className="text-center">
                <div className="w-20 h-20 bg-[#f73444] rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all">
                  {a.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {index + 1}. {a.title}
                </h3>
                <p className="opacity-75">{a.text}</p>
              </div>
            ))}
            {/* <div className="text-center">
              <div className="w-20 h-20 bg-[#f73444] rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all">
                <Telescope size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Discovery</h3>
              <p className="opacity-75">
                Comprehensive market research and business analysis to identify
                opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f73444] rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all">
                <span className="material-symbols-outlined text-[#faf5ff] text-3xl">
                  landscape
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">2. Strategy</h3>
              <p className="opacity-75">
                Development of a customized marketing plan aligned with your
                business objectives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#f73444] rounded-full flex items-center justify-center mb-6 mx-auto transform hover:scale-110 transition-all">
                <span className="material-symbols-outlined text-[#faf5ff] text-3xl">
                  rocket_launch
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">3. Execution</h3>
              <p className="opacity-75">
                Tactical implementation across channels with continuous
                optimization.
              </p>
            </div> */}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#2a2a28]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Clients Say
              </h2>
              <p className="max-w-2xl mx-auto text-lg opacity-80">
                Don't just take our word for it — hear from the brands we've
                helped grow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#20201e] p-8 rounded-xl">
                <div className="flex items-center gap-1 text-[#f73444] mb-4">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p className="italic mb-6 opacity-90">
                  "PulseMarketing transformed our digital presence. Their
                  strategic approach helped us increase our conversion rate by
                  45% in just three months."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm opacity-75">CMO, TechFusion Inc.</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#20201e] p-8 rounded-xl">
                <div className="flex items-center gap-1 text-[#f73444] mb-4">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p className="italic mb-6 opacity-90">
                  "The team's data-driven approach to our social media strategy
                  completely revitalized our brand. We've seen a 78% increase in
                  engagement and a substantial boost in sales."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Michael Torres</h4>
                    <p className="text-sm opacity-75">Founder, Urban Threads</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#20201e] p-8 rounded-xl">
                <div className="flex items-center gap-1 text-[#f73444] mb-4">
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                  <span className="material-symbols-outlined">star</span>
                </div>
                <p className="italic mb-6 opacity-90">
                  "Working with PulseMarketing has been a game-changer. Their
                  SEO and content strategy increased our organic traffic by 156%
                  year-over-year, significantly reducing our cost per
                  acquisition."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-bold">Jennifer Chen</h4>
                    <p className="text-sm opacity-75">
                      Marketing Director, Bloom Wellness
                    </p>
                  </div>
                </div>
              </div>
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
                Schedule a free strategy session with our marketing experts and
                discover how we can help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-[#faf5ff] text-[#20201e] px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105">
                  Book a Strategy Call
                </button>
                <button className="border border-[#faf5ff] text-[#faf5ff] px-8 py-3 rounded-full font-medium hover:bg-[#faf5ff] hover:text-[#f73444] transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
