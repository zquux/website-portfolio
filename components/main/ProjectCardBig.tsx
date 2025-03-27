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
  repo: string;
}

const ProjectCardBig: React.FC<Props> = ({
  heading,
  images,
  description,
  tech,
  repo,
}) => {
  return (
    <div className="relative flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden mt-20 h-[400px] border border-[#7042f88b] z-[120]">
      <div className="md:w-1/2 h-64 md:h-auto">
        <PhotoSlider images={images} />
      </div>

      <div className="relative md:w-1/2 p-6 flex flex-col justify-center bg-[#7042f88b]/30">
        <h2 className="text-2xl font-bold mb-4 text-white">{heading}</h2>
        <p style={{ whiteSpace: "pre-line" }} className="text-white">
          {description}
        </p>
        <div className="flex space-x-2 mt-4 gap-2">
          {tech.map((pic, index) => (
            <Image
              key={index}
              src={pic}
              alt={"tech image"}
              height={30}
              width={30}
              className="object-contain"
            />
          ))}
          <Link
            href={repo}
            className=" cursor-pointer text-white text-center p-2 bg-[#7042f861] w-[150px] rounded-lg hover:bg-purple-900 transition-all duration-300"
          >
            GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardBig;
