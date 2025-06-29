import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { House } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[150] px-[15px]">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <span className="font-bold ml-[10px] hidden md:block text-gray-300">
          <Link href="/">Vladyslav Vovk</Link>
        </span>
        <div className="w-[350px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full border border-[#7042f861] bg-[#0300145e] my-[10px] px-[50px] py-3 rounded-full text-gray-200">
            <Link href="/about">About me</Link>
            <Link href="/">
              <House className="sm:block md:hidden size-5" />
            </Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
