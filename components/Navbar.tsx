"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MoveRight, Menu, X } from "lucide-react";
import { easeOut, motion, easeIn, easeInOut } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Our Work", path: "/works" },
  { name: "Our Blog", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Check if current route is home
  const isHome = pathname === "/";
  // const isWorks = pathname === "/works";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close on route change (path change) and on escape
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // VARIANTS
  const logoVariants = {
    initial: {
      opacity: 0,
      scale: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        ease: easeIn,
        delay: -0.2,
        duration: 0.2,
      },
    },
  };

  const navbarItemVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,

      transition: {
        ease: easeIn,

        duration: -0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const navbarLinksVariants = {
    initial: {
      opacity: 0,
      y: -200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: easeInOut,
        duration: 0.4,
      },
    },
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 grid place-items-center px-5 font-sans transition-colors duration-300 z-40 ${
        !scrolled && isHome ? "bg-transparent" : "bg-background shadow-md"
      }`}
    >
      <div className="text-white max-w-[1200px] w-full py-3 flex items-center justify-between gap-4 md:py-4">
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          initial="initial"
          animate="animate"
          className="flex items-center gap-3"
        >
          <Link href="/" className="inline-flex items-center">
            <Image
              width={140}
              height={48}
              src="/AwaniLogo1.png"
              alt="Logo"
              className="object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          <motion.ul
            className="flex gap-8 items-center"
            variants={navbarItemVariants}
            initial="initial"
            animate="animate"
          >
            {navLinks.map((link) => (
              <motion.li
                className={`text-secondary relative py-1 ${
                  pathname === link.path ? "text-primary" : ""
                }`}
                variants={navbarLinksVariants}
                key={link.name}
              >
                <Link
                  href={link.path}
                  className="px-1 suble_hover hover:text-primary "
                >
                  {link.name}
                </Link>
                {pathname === link.path && (
                  <span className="absolute left-0 -bottom-0.5 w-full h-[1px] bg-primary rounded" />
                )}
              </motion.li>
            ))}

            <motion.button variants={navbarLinksVariants} className="ml-2">
              <Link
                href="/send-brief"
                className="bg-primary text-secondary rounded-md px-4 py-2 font-medium flex items-center gap-2 hover:scale-105 transition-transform suble_hover "
              >
                Send A Brief <MoveRight size={18} />
              </Link>
            </motion.button>
          </motion.ul>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center lg:hidden gap-3">
          {/* <button
            aria-label="Send brief"
            className="hidden lg:inline-flex bg-primary text-secondary rounded-md px-3 py-2 text-sm font-medium hover:scale-105 transition-transform"
          >
            Brief
          </button> */}

          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md bg-black/20 text-white hover:bg-black/30 transition"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu (slide-in full height panel) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden pointer-events-none transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          } z-40`}
        />

        {/* panel */}
        <nav
          className={`absolute right-0 top-0 h-full w-full sm:w-[80%] bg-background/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          } z-50 pointer-events-auto`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/6">
            <Link href="/" className="inline-flex items-center">
              <Image
                width={120}
                height={40}
                src="/AwaniLogo1.png"
                alt="Logo"
                className="object-contain"
              />
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md bg-black/10"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`block text-lg font-medium py-2 ${
                    pathname === link.path
                      ? "text-primary"
                      : "text-secondary/90"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-6 mt-auto pb-8">
            <Link
              href="/send-brief"
              className="w-full bg-primary text-secondary rounded-md px-4 py-3 font-medium flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Send A Brief <MoveRight size={18} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
