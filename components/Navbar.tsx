"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MoveRight } from "lucide-react";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Works",
    path: "/works",
  },

  {
    name: "Blogs",
    path: "/blogs",
  },

  //   {
  //     name: "Events",
  //     path: "#events",
  //   },
  {
    name: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Check if current route is home
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // Change 80 to your desired scroll height
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-full fixed top-0 left-0 grid place-items-center  px-5 font-sans transition-colors duration-300 z-30 ${
        !scrolled && isHome ? "bg-transparent" : " bg-background shadow-md "
      }`}
    >
      <div className="text-white max-w-[1200px] w-full py-4 flex justify-between items-center gap-5">
        <div className="">
          <Image width={180} height={100} src="/AwaniLogo1.png" alt="Logo" />
        </div>

        <div className="flex gap-14 items-center">
          <ul className={`flex gap-8 items-center  `}>
            {navLinks.map((link) => (
              <li
                className={`${scrolled ? "text-secondary" : "text-secondary"} ${
                  pathname === link.path
                    ? "border-b-1 border-primary "
                    : "border-0"
                } hover:text-primary `}
                key={link.name}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <button className="bg-primary text-secondary rounded-md  px-4 py-2 font-medium flex items-center gap-2 hover:scale-105 transition-transform">
            Send A Brief <MoveRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
