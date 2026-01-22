import React from "react";
import { worksData } from "@/app/Workdata/Works";
import { notFound } from "next/navigation";
import WorkGallery from "./Gallery";

type JobPageProps = {
  params: {
    brand: string;
  };
};

const page = ({ params }: JobPageProps) => {
  const { brand } = params;
  const work = worksData.find(
    (work) =>
      work.title.toLowerCase().replace(/\s+/g, "-") === brand.toLowerCase(),
  );

  if (!work) {
    notFound();
  }

  const bgUrl = work.images[0] ? `url(${work.images[0]})` : "none";

  return (
    <div className=" w-full grid place-items-center text-secondary ">
      <div
        className="w-full h-[470px] rounded-lg bg-cover bg-center bg-no-repeat relative overflow-hidden shadow-lg px-8  flex justify-center animate-fadeIn"
        style={{ backgroundImage: bgUrl }}
      >
        {/* subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-500" />
        <div className="relative max-w-[1200px] w-full z-10 py-8 flex flex-col h-full justify-end text-white">
          <h1 className="text-4xl md:text-5xl font-bold">{work.title}</h1>
          <p className="mt-1 max-w-3xl opacity-90">{work.industry}</p>
        </div>
      </div>
      <div className="my-20  bg-background rounded-lg px-20 py-10">
        <div className="  max-w-[1200px] w-full flex flex-col gap-10 ">
          <div className="flex flex-col gap-2  ">
            <h3 className="text-2xl text-primary font-medium">
              About {work.title}
            </h3>

            <p className="">{work.about}</p>
          </div>

          <div className="flex flex-col gap-2  ">
            <h3 className="text-2xl text-primary font-medium">Challenge</h3>

            <p>{work.challenge}</p>
          </div>
          <div className="flex flex-col gap-2  ">
            <h3 className="text-2xl text-primary font-medium">Solution</h3>

            <p>{work.solution}</p>
            <div className="ml-4">
              {/* <h4 className="text-lg my-3 text-primary font-medium">
                Our Approach;
              </h4> */}
              <ul className="custom-list space-y-2  ">
                {work.approach.map((item, index) => (
                  <li className="mb-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-2  ">
            <h3 className="text-2xl text-primary font-medium">Results</h3>

            <p className="">{work.resultHeading}</p>

            <div className="ml-4">
              {/* <h4 className="text-lg my-3 text-primary font-medium">
                Metrics;
              </h4> */}
              <ul className="custom-list space-y-2  ">
                {work.results.map((item, index) => (
                  <li className="mb-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p>{work.conclusion}</p>
          </div>

          <div className="w-full">
            <WorkGallery images={work.images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
