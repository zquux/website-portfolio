import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-[15px]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/av.webp"
            alt="logo"
            width={30}
            height={30}
            className="cursor-pointer hover:animate-slowspin invert"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Vladyslav Vovk
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] my-[10px] px-[50px] py-3 rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
