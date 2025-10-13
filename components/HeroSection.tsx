"use client";

// import { SpiralAnimation } from "@/components/ui/spiral-animation";

import { SpiralAnimation } from "./spiral-animation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const HeroSection = () => {
  const [startVisible, setStartVisible] = useState(false);

  // Handle navigation to personal site
  const navigateToPersonalSite = () => {
    window.location.href = "https://xubh.top/";
  };

  // Fade in the start button after animation loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" w-full h-full overflow-hidden bg-background">
      {/* Spiral Animation */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Simple Elegant Text Button with Pulsing Effect */}
      <div
        className={` grid place-items-center relative w-full h-screen
          z-10
          transition-all duration-1500 ease-out
          ${
            startVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }
        `}
      >
        <span className="absolute right-[250px] cursor-pointer hover:scale-120 rotate-180 top-[200px] hover:animate-spin ">
          <Image width={70} height={100} src="/AwaniSticker1.png" alt="Logo" />
        </span>
        <div
          className="
            text-white text-2xl tracking-[0.2em] uppercase flex flex-col items-center font-extralight
            transition-all duration-700
            hover:tracking-[0.1em]
          "
        >
          <div>
            <Image width={500} height={100} src="/AwaniSvg2.svg" alt="Logo" />
          </div>
          <h1 className="text-center mt-[-20px] text-2xl max-w-[500px] w-full text-secondary">
            Social Media Solutions For Your Brand
          </h1>
          <div className="flex gap-7 mt-10 items-center">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroSection };
