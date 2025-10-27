import Image from "next/image";
import React from "react";
import { MoveUpRight } from "lucide-react";

const WorksCard = ({
  image,
  text,
  sections,
  title,
  industry,
  link,
}: {
  image: string;
  text: string;
  sections: string[];
  title: string;
  industry: string;
  link: string;
}) => {
  return (
    <div className=" flex flex-col rounded-lg gap-3 pb-2 bg-secondary ">
      <div className="w-full">
        <Image
          className="aspect-video w-full object-cover rounded-t-lg "
          alt={text}
          src={image}
          width={500}
          height={200}
        />
      </div>
      <div className="w-full py-5 pt-0 px-7">
        <h1 className=" text-lg flex w-full justify-between items-center font-semibold mb-1 ">
          {title}{" "}
          <span className="text-gray-500 text-[10px] ">({industry})</span>
        </h1>
        <p className=" text-justify leading-5.5 w-full text-[15px] ">{text}</p>

        <div className="w-full flex justify-between items-center mt-7 text-xs font-medium text-gray-500 ">
          <div className="w-full flex font-extralight gap-1 ">
            <span>{sections[0]}</span>
            <span>{sections[1]}</span>
          </div>

          <a
            className="flex items-center text-right gap-1 w-[150px] text-primary font-semibold justify-end "
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <MoveUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
