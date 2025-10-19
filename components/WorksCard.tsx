import Image from "next/image";
import React from "react";
import { MoveUpRight } from "lucide-react";

const WorksCard = ({
  image,
  text,
  sections,
  link,
}: {
  image: string;
  text: string;
  sections: string[];
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
      <div className="w-full py-5 pt-3 px-7">
        <p className=" font-medium w-full ">{text}</p>

        <div className="w-full flex justify-between items-center mt-4 text-sm font-medium text-gray-500 ">
          <div className="w-full flex font-extralight  gap-2 ">
            {sections.map((S, index) => (
              <span key={index}>{S}</span>
            ))}
          </div>

          <a
            className="flex items-center text-right gap-1 w-[200px] text-primary font-semibold justify-end "
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
