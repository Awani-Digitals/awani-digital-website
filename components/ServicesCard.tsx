import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { cubicBezier, easeInOut, motion } from "motion/react";

// VARIANTS
const cardVariants = {
  initial: {
    opacity: 0,
    scale: 0.3,
  },

  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: easeInOut,
      duration: 0.4,
    },
  },
};
const ServicesCard = ({
  title,
  icon,
  lists,
  summary,
}: {
  title: string;
  icon: React.ReactNode;
  lists: string[];
  summary: string;
}) => {
  return (
    <motion.div
      variants={cardVariants}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeInOut" },
      }}
      className="bg-secondary rounded-md flex flex-col items-center gap-6 px-10 py-10 text-black justify-between shadow-lg shadow-primary/30 "
    >
      <span className="rounded-full p-3 bg-primary grid place-items-center text-white ">
        {icon}
      </span>

      <h2 className="text-2xl font-semibold text-center ">{title}</h2>
      <p className="text-sm">{summary}</p>
      {/* <ul className="list-disc marker:text-primary marker:text-lg flex flex-col gap-2 text-left max-w-[300px] w-full">
        {lists.map((item, index) => (
          <li key={index} className="text-sm">
            {item}
          </li>
        ))}
      </ul> */}
      <Link
        href="/services"
        className="rounded-full p-3 shadow-lg suble_hover  hover:rotate-[-30deg] transition-all "
      >
        {" "}
        <MoveRight className="w-6 h-6 text-primary " />{" "}
      </Link>
    </motion.div>
  );
};

export default ServicesCard;
