"use client";

// import { SpiralAnimation } from "@/components/ui/spiral-animation";

// import { SpiralAnimation } from "./spiral-animation";
import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Linkedin, Instagram, MoveRight } from "lucide-react";
// import { FaXTwitter } from "react-icons/fa6";
import { easeOut, motion, easeIn, easeInOut, scale } from "motion/react";

const HeroSection = () => {
  const [startVisible, setStartVisible] = useState(false);

  // Handle navigation to personal site
  // const navigateToPersonalSite = () => {
  //   window.location.href = "https://xubh.top/";
  // };

  // Fade in the start button after animation loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartVisible(true);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  const subTextVariants = {
    initial: {
      opacity: 0,
      scale: 0.6,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        delay: 0.8,
        duration: 0.5,
      },
    },
  };

  const CTAButtonVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        delay: 0.8,
        duration: 0.3,
      },
    },
  };

  return (
    <div className=" w-full h-full overflow-hidden bg-transparent   ">
      {/* Spiral Animation */}
      {/* <div className="absolute bg-transparent inset-0 z-10 ">
        <SpiralAnimation />
      </div> */}

      {/* Simple Elegant Text Button with Pulsing Effect */}
      <div
        className={` grid place-items-center relative w-full h-screen
          z-10 heroBG
          transition-all bg-transparent duration-700 ease-in-out
          ${
            startVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-40"
          }
        `}
      >
        <div
          className="
            text-white text-2xl px-4  flex flex-col items-center
            transition-all duration-700
            
          "
        >
          {/* <div>
            <Image width={700} height={100} src="/AwaniSvg2.svg" alt="Logo" />
          </div> */}
          <h1 className="text-center mt-[-50px] text-5xl lg:text-[65px] max-w-[800px] w-full text-secondary capitalize font-bold tracking-wide lg:leading-20  ">
            It’s Time your <span className="text-primary">Marketing</span> spoke
            with one voice
          </h1>
          <motion.h2
            variants={subTextVariants}
            initial="initial"
            animate="animate"
            className="max-w-[800px] text-lg w-full text-center mt-7 font-medium "
          >
            At Awani Digitals, we craft integrated marketing experiences that
            connect people, build brands, and drive measurable results across
            every touchpoint.
          </motion.h2>
          <motion.button
            variants={subTextVariants}
            initial="initial"
            animate="animate"
          >
            <Link
              href="/send-brief"
              className="bg-primary text-secondary rounded-md mt-10 text-base px-7 py-3 font-medium flex items-center gap-2 hover:scale-105 transition-transform suble_hover "
            >
              Talk To Us <MoveRight size={20} />
            </Link>
          </motion.button>

          {/* <div className="flex gap-7 mt-10 items-center">
            <a
              className="rounded-full w-12 h-12 bg-white text-background  border-2 border-primary grid place-items-center  "
              href="https://www.linkedin.com/company/awani-digitals/"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              className="rounded-full w-12 h-12 bg-white text-background  border-2 border-primary grid place-items-center  "
              href="https://www.instagram.com/awanidigitals?igsh=M2o5NnVhNjRyeTc5"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              className="rounded-full w-12 h-12 bg-white text-background  border-2 border-primary grid place-items-center  "
              href="https://x.com/awanidigitals_?t=gZfHMzWteVBHLcuWQuEEcw&s=09"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
