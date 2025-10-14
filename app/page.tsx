"use client";
import AboutPage from "@/components/About";
import { HeroSection } from "@/components/HeroSection";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutPage />
      <Services />
      <Works />
    </div>
  );
}
