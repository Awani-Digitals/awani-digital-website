import React from "react";
import { MoveRight } from "lucide-react";

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
    <div className="bg-secondary rounded-md flex flex-col items-center gap-6 px-10 py-10 text-black justify-between shadow-lg shadow-primary/30 hover:scale-105 transition-transform duration-300">
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
      <button className="rounded-full p-3 shadow-lg hover:rotate-[-30deg]">
        {" "}
        <MoveRight className="w-6 h-6 text-primary " />{" "}
      </button>
    </div>
  );
};

export default ServicesCard;
