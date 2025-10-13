"use client";
import AboutPage from "@/components/About";
import { HeroSection } from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutPage />
      <Services />
    </div>
  );
}
