"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  cubicBezier,
} from "motion/react";
import { Sparkles, Users, TrendingUp, Target } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface StatCounterProps {
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  suffix,
  delay,
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={countRef}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </motion.div>
  );
};

const AboutUs: React.FC = () => {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  // const stickers = [
  //   {
  //     icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
  //     position: { top: "10%", left: "5%" },
  //     rotation: -15,
  //     delay: 0.2,
  //   },
  //   {
  //     icon: <Heart className="w-6 h-6 text-pink-500" />,
  //     position: { top: "15%", right: "8%" },
  //     rotation: 20,
  //     delay: 0.4,
  //   },
  //   {
  //     icon: <Star className="w-6 h-6 text-blue-500" />,
  //     position: { top: "40%", left: "3%" },
  //     rotation: -25,
  //     delay: 0.6,
  //   },
  //   {
  //     icon: <Zap className="w-6 h-6 text-purple-500" />,
  //     position: { top: "60%", right: "5%" },
  //     rotation: 15,
  //     delay: 0.8,
  //   },
  //   {
  //     icon: <Coffee className="w-6 h-6 text-amber-600" />,
  //     position: { bottom: "20%", left: "8%" },
  //     rotation: -20,
  //     delay: 1.0,
  //   },
  //   {
  //     icon: <Music className="w-6 h-6 text-indigo-500" />,
  //     position: { bottom: "15%", right: "10%" },
  //     rotation: 25,
  //     delay: 1.2,
  //   },
  //   {
  //     icon: <Camera className="w-6 h-6 text-teal-500" />,
  //     position: { top: "25%", left: "15%" },
  //     rotation: -10,
  //     delay: 0.5,
  //   },
  //   {
  //     icon: <Palette className="w-6 h-6 text-rose-500" />,
  //     position: { top: "50%", right: "12%" },
  //     rotation: 18,
  //     delay: 0.7,
  //   },
  // ];

  const stats = [
    { value: 20, label: "Clients Served", suffix: "+" },
    { value: 20, label: "Impressions Driven", suffix: "M+" },
    { value: 50, label: "Organic Community Built", suffix: "K+" },
    { value: 2, label: "Leads Generated", suffix: "K+" },
  ];

  // VARIANTs
  const leftTextVariants = {
    initial: {
      x: "-70%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: cubicBezier(0, 0, 1, 1),
      },
    },
  };

  const rightTextWrapperVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,

      transition: {
        ease: easeIn,

        duration: -0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const rightTextVariants = {
    initial: {
      x: "70%",
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,

        ease: cubicBezier(0, 0, 1, 1),
      },
    },
  };
  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 overflow-hidden relative"
    >
      <div className="container mx-auto max-w-[1200px] w-full relative z-20">
        {/* Header */}
        <div className="text-center w-full mb-16 flex flex-col ">
          <div className="inline-flex items-center gap-2  text-primary px-4 w-fit py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">ABOUT US</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeIn }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            We Produce Amazing
            <span className="block text-primary ">Results</span>
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-primary mx-auto"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4, ease: easeIn }}
          />
        </div>

        {/* Main Content */}
        <div
          className="grid md:grid-cols-2 mt-[100px] gap-12 mb-20"
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            variants={leftTextVariants}
            viewport={{ once: true }}
            initial="initial"
            whileInView="animate"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/AwaniAbout.jpg"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
                width={800}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />

              {/* Floating badge */}
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-50"
              whileInView={{
                scale: [1, 1.2, 1.3, 1.2, 1],
                // rotate: [0, 180, 360],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* <span className="absolute -left-[30px] opacity-70 -top-[140px] ">
              <Image
                width={100}
                height={100}
                src="/AwaniStickerW.png"
                alt="badge"
              />
            </span> */}
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            className="flex flex-col justify-center"
            variants={rightTextWrapperVariants}
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Marketing Excellence
            </h2>

            <motion.p
              variants={rightTextVariants}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              Awani Digitals is a leading integrated marketing communications
              agency in Nigeria, helping brands grow through strategy,
              creativity, and innovation.
            </motion.p>

            <motion.p
              variants={rightTextVariants}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              {" "}
              We specialize in digital marketing, brand strategy, social media
              management, advertising, and experiential marketing that deliver
              measurable business results. From concept to execution, we create
              campaigns that connect brands with people, spark conversations,
              and drive conversion across multiple platforms.
            </motion.p>

            <motion.p
              variants={rightTextVariants}
              className="text-gray-600 mb-8 leading-relaxed"
            >
              Our team of creatives and strategists helps brands stand out,
              engage audiences, and achieve measurable growth in today’s
              fast-changing market. We believe every brand has a story worth
              telling, and our mission is to help you tell yours with clarity,
              consistency, and impact across every touchpoint.
            </motion.p>

            {/* <p className="text-gray-600 mb-8 leading-relaxed">
              With over a decade of experience, we've helped hundreds of brands
              establish their digital presence and connect with their audiences
              in meaningful ways.
            </p> */}

            {/* Feature list */}
            <div className="space-y-4">
              {[
                {
                  icon: <Target className="w-5 h-5" />,
                  text: "Customer-focused approach",
                },
                {
                  icon: <Users className="w-5 h-5" />,
                  text: "Expert team of professionals",
                },
                {
                  icon: <TrendingUp className="w-5 h-5" />,
                  text: "Proven track record of success",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    {item.icon}
                  </div>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create something extraordinary. Get in touch
            with us today!
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-shadow duration-300 suble_hover "
            onClick={() => {
              router.push("/send-brief");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
