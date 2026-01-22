import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MoveUpRight } from "lucide-react";

const WorksCard = ({
  images,
  solution,
  sections,
  title,
  industry,
  blob,
}: {
  images: string[];
  solution: string;
  sections: string[];
  title: string;
  industry: string;
  blob: string;
}) => {
  // Truncate text to first 17 words
  const truncateWords = (text: string, wordLimit: number = 17): string => {
    const words = text.split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className=" flex max-w-[350px] w-full flex-col rounded-lg gap-3 pb-2 bg-secondary ">
      {/* image with dark overlay and centered text */}
      <div className="w-full relative rounded-t-lg overflow-hidden">
        <div className="relative w-full aspect-video">
          <Image
            src={images[0]}
            alt={solution}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
          <div>
            <h3 className="text-white text-2xl font-bold">{title}</h3>
            <p className="text-sm text-white/90 mt-1">{industry}</p>
          </div>
        </div>
      </div>

      <div className="w-full py-5 pt-0 px-4">
        {/* <h1 className=" text-lg flex w-full justify-between items-center font-semibold mb-1 ">
          {title}{" "}
          <span className="text-gray-500 text-[10px] ">({industry})</span>
        </h1> */}
        <p className=" w-full text-sm ">{truncateWords(solution)}</p>

        <div className="w-full flex justify-between items-center mt-4 text-xs font-medium text-gray-500 ">
          <div className="w-full flex font-extralight gap-1 ">
            <span>{sections[0]}</span>
            <span>{sections[1]}</span>
          </div>

          <Link
            className="flex items-center text-right gap-1 w-[150px] text-primary font-semibold justify-end "
            href={`/works/${blob}`}
          >
            View Project <MoveUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
