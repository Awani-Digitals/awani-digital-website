"use client";
import AboutUs from "@/components/About";
import { HeroSection } from "@/components/HeroSection";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutUs />
      <Services />
      <Works />
    </div>
  );
}
