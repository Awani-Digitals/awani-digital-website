"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  // useScroll,
  // useTransform,
  useInView,
  cubicBezier,
  easeIn,
} from "motion/react";
import {
  Sparkles,
  Heart,
  Star,
  Zap,
  Coffee,
  Music,
  Camera,
  Palette,
  Award,
  Users,
  TrendingUp,
  Target,
} from "lucide-react";
import Image from "next/image";

// interface StatCounterProps {
//   value: number;
//   label: string;
//   suffix: string;
//   delay: number;
// }

// const StatCounter: React.FC<StatCounterProps> = ({
//   value,
//   label,
//   suffix,
//   delay,
// }) => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(countRef, { once: false, amount: 0.5 });

//   useEffect(() => {
//     if (isInView) {
//       let start = 0;
//       const duration = 2000;
//       const increment = value / (duration / 16);

//       const timer = setInterval(() => {
//         start += increment;
//         if (start >= value) {
//           setCount(value);
//           clearInterval(timer);
//         } else {
//           setCount(Math.floor(start));
//         }
//       }, 16);

//       return () => clearInterval(timer);
//     } else {
//       setCount(0);
//     }
//   }, [isInView, value]);

//   return (
//     <motion.div
//       ref={countRef}
//       className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.6, delay }}
//     >
//       <div className="text-4xl font-bold text-primary mb-2">
//         {count}
//         {suffix}
//       </div>
//       <div className="text-gray-600 text-sm">{label}</div>
//     </motion.div>
//   );
// };

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

const AboutPage: React.FC = () => {
  // const sectionRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: sectionRef,
  //   offset: ["start end", "end start"],
  // });

  // const y1 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  // const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const stickers = [
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
      position: { top: "10%", left: "5%" },
      rotation: -15,
      delay: 0.2,
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      position: { top: "15%", right: "8%" },
      rotation: 20,
      delay: 0.4,
    },
    {
      icon: <Star className="w-6 h-6 text-blue-500" />,
      position: { top: "40%", left: "3%" },
      rotation: -25,
      delay: 0.6,
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      position: { top: "60%", right: "5%" },
      rotation: 15,
      delay: 0.8,
    },
    {
      icon: <Coffee className="w-6 h-6 text-amber-600" />,
      position: { bottom: "20%", left: "8%" },
      rotation: -20,
      delay: 1.0,
    },
    {
      icon: <Music className="w-6 h-6 text-indigo-500" />,
      position: { bottom: "15%", right: "10%" },
      rotation: 25,
      delay: 1.2,
    },
    {
      icon: <Camera className="w-6 h-6 text-teal-500" />,
      position: { top: "25%", left: "15%" },
      rotation: -10,
      delay: 0.5,
    },
    {
      icon: <Palette className="w-6 h-6 text-rose-500" />,
      position: { top: "50%", right: "12%" },
      rotation: 18,
      delay: 0.7,
    },
  ];

  const stats = [
    { value: 500, label: "Happy Customers", suffix: "+" },
    { value: 1200, label: "Projects Completed", suffix: "+" },
    { value: 98, label: "Satisfaction Rate", suffix: "%" },
    { value: 15, label: "Years Experience", suffix: "" },
  ];

  return (
    <section
      // ref={sectionRef}
      className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:px-4 overflow-hidden relative"
    >
      <div className="container mx-auto max-w-[1200px] w-full px-4 lg:px-0 relative z-20">
        {/* Header */}
        <motion.div className="text-center w-full mb-16 flex flex-col ">
          {/* <motion.div
            className="inline-flex items-center gap-2  text-primary px-4 w-fit py-2 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">ABOUT US</span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            We Produce Amazing
            <span className="block text-primary ">Results</span>
          </motion.h1>

          <motion.div
            className="w-24 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-2 mt-[100px] gap-12 mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
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
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
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
            animate="animate"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Digital Excellence Since 2009
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
        </motion.div>

        {/* Our Team */}
      </div>

      <div className="w-full flex flex-col items-center bg-background px-4 py-[80px] rounded-[25px] ">
        <div className="w-full max-w-[1200px]  ">
          <motion.div className="text-center w-full mb-16 flex flex-col ">
            {/* <motion.div
            className="inline-flex items-center gap-2  text-primary px-4 w-fit py-2 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">ABOUT US</span>
          </motion.div> */}

            <motion.h1
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              className="text-5xl md:text-6xl font-bold text-white mb-4"
            >
              The Mind
              <span className="block text-primary ">Behind the Movement</span>
            </motion.h1>

            <motion.div
              className="w-24 h-1 bg-primary mx-auto"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="grid md:grid-cols-2 mt-[100px] gap-12 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Left Column - Image */}

            <motion.div
              className="flex flex-col justify-center"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                From One Idea to a Brand You Trust
              </h2>

              <p className="text-gray-200 mb-6 leading-relaxed">
                Omolola Dada is a passionate and results-driven marketing expert
                with a proven record of helping brands grow through creativity,
                clarity, and measurable impact. With a decade of hands-on
                experience and partnerships across more than 50 global brands,
                she continues to redefine how businesses connect with audiences
                in today’s fast-changing digital world.
              </p>

              <p className="text-gray-200 mb-6 leading-relaxed">
                {" "}
                As the founder of Awani Digitals, Omolola leads with purpose and
                innovation, guiding brands toward visibility, resonance, and
                sustainable growth. Under her leadership, the agency has become
                known for building campaigns that tell powerful stories and
                deliver tangible business results.
              </p>

              <p className="text-gray-200 mb-6 leading-relaxed">
                Her work goes beyond client projects. She has trained almost two
                hundred aspiring marketers to begin successful careers, spoken
                at several events and institutions, and created resources that
                make marketing more accessible to business owners. In 2025,
                Omolola was recognized by Alt Marketing School in London as one
                of the Top 100 Marketing Professionals, honoring her dedication
                and influence in the industry.
              </p>

              <p className="text-gray-200 mb-6 leading-relaxed">
                {" "}
                Omolola is also a proud member of the National Institute of
                Marketing of Nigeria and has received multiple recognitions from
                respected brands and organizations for excellence and thought
                leadership in marketing.
              </p>

              <p className="text-gray-200 mb-8 leading-relaxed">
                Her vision is simple. She believes every brand deserves to be
                seen, understood, and remembered, and her mission is to help
                them achieve that through strategy, creativity, and
                authenticity.
              </p>

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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <span className="text-gray-200">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/Omolola.jpg"
                  alt="Team collaboration"
                  className="w-full h-[600px] object-top object-cover"
                  width={800}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />

                {/* Floating badge */}
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute top-[550px] -left-4 w-24 h-24 bg-primary/70 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
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
          </motion.div>
        </div>

        {/* Stats Section */}
        {/* <motion.div
          className="grid grid-cols-2 w-full max-w-[1200px] md:grid-cols-4 gap-6"
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
        </motion.div> */}

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 w-full max-w-[1200px] rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's work together to create something extraordinary. Get in touch
            with us today!
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.35 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
