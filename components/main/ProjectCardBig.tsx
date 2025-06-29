"use client";

import React from "react";
import PhotoSlider from "../sub/PhotoSlider";
import Image from "next/image";
import Link from "next/link";

interface Props {
  heading: string;
  images: string[];
  description: string;
  tech: string[];
  repo?: string;
}

const ProjectCardBig: React.FC<Props> = ({
  heading,
  images,
  description,
  tech,
  repo,
}) => {
  return (
    <div className="relative flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden mt-10 md:mt-20 border border-[#7042f88b] z-[120] w-full max-w-6xl mx-auto">
      <div className="w-full h-[250px] sm:h-[300px] md:h-auto">
        <PhotoSlider images={images} />
      </div>

      <div className="w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center bg-[#7042f88b]/30">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-white text-center md:text-left">
          {heading}
        </h2>

        <p className="text-white text-sm sm:text-base whitespace-pre-line">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-4">
          {tech.map((pic, index) => (
            <Image
              key={index}
              src={pic}
              alt="tech"
              height={30}
              width={30}
              className="object-contain"
            />
          ))}
        </div>

        {repo ? (
          <>
            <Link
              href={repo || ""}
              className="mt-4 inline-block text-white text-center p-2 bg-[#7042f861] w-full sm:w-[180px] rounded-lg hover:bg-purple-900 transition-all duration-300"
            >
              GitHub Repo
            </Link>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProjectCardBig;
