import AboutPage from "@/components/About";
import { HeroSection } from "@/components/HeroSection";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutPage />
      <Services />
    </div>
  );
}
