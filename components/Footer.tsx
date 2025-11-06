"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  MoveRight,
  BriefcaseBusiness,
  Heart,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Services", href: "/services" },
      { name: "Our Works", href: "/works" },
      { name: "Contact", href: "/contact" },
    ],
    services: [
      { name: "Digital Marketing", href: "/services#digital" },
      { name: "Brand Development", href: "/services#brand" },
      { name: "UI/UX Design", href: "/services#design" },
      { name: "Event Marketing", href: "/services#events" },
    ],
    resources: [
      { name: "Blog", href: "/blogs" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Publish Blog", href: "/admin" },
      { name: "Careers", href: "/careers" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/awani-digitals/",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/awanidigitals?igsh=M2o5NnVhNjRyeTc5",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      href: "https://x.com/awanidigitals_?t=gZfHMzWteVBHLcuWQuEEcw&s=09",
      icon: <FaXTwitter className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="w-full bg-primary border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="mb-6">
              <Image
                width={200}
                height={80}
                src="/AwaniLogo3.jpeg"
                alt="Awani Digitals Logo"
                className="mb-4"
              />
              <p className="text-secondary text-sm leading-relaxed">
                We create compelling marketing solutions that elevate your brand
                and drive meaningful connections with your audience.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-secondary text-sm">
                <Mail className="w-4 h-4 text-secondary" />
                <span>info@awanidigitals.com</span>
              </div>
              <div className="flex items-center gap-3 text-secondary text-sm">
                <Phone className="w-4 h-4 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-secondary text-sm">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>New York, NY</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              {/* <BriefcaseBusiness className="w-5 h-5 text-primary" /> */}
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:underline transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span>{link.name}</span>
                    <MoveRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:underline transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span>{link.name}</span>
                    <MoveRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Social */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-secondary hover:underline transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span>{link.name}</span>
                    <MoveRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-white rounded-full flex items-center justify-center text-secondary hover:text-primary transition-all duration-300 group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div className="group-hover:rotate-12 transition-transform duration-300">
                      {social.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white text-sm flex items-center gap-2">
            © {currentYear} Awani Digitals.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-white hover:underline transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white hover:underline transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
