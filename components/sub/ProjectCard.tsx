"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer z-[30] transition-transform duration-300 hover:-translate-y-2 group">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain transition-transform duration-300 group-hover:blur-sm"
      />
      <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
        <Link href="/projects">
          <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
      <div className="relative p-4 transition-transform duration-300 group-hover:blur-xs">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
