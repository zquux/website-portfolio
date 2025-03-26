import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import React from "react";

const Description = () => {
  return (
    <div className="relative w-full min-h-[800px] h-full pb-[1000px]">
      <div className="absolute inset-0 filter blur-xs">
        <video
          src="/universe.webm"
          className="w-full h-full object-cover opacity-[30%]"
          preload="auto"
          playsInline
          loop
          muted
          autoPlay
        ></video>
      </div>
      <div className="flex justify-between items-center">
        <motion.div
          variants={slideInFromLeft(0.8)}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex flex-col items-center justify-center gap-5"
        >
          <div className="border border-[#2A0E61] p-10">
            <div className="bg-black/40 p-4 border border-[#7042f88b] rounded flex items-center">
              <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
              <h2 className="text-white text-lg">About me</h2>
            </div>
            <p className="text-white max-w-[500px]">
              Hi! I'm Vladyslav Vovk, a second-year Software Engineering student
              at Munster Technological University. I love working with code and
              constantly push myself to explore new technologies and improve my
              skills. I take on small freelance projects to get practical
              experience and build up my portfolio. I'm already prepared to take
              on bigger projects if needed. I'm always following new
              technologies and learning new things to stay current in the field.
              I'm adaptable, quick to pick up new tools, and always ready to
              face new challenges. I believe in working smart, staying curious,
              and putting my best effort into every project.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.8)}
          initial="hidden"
          animate="visible"
          className="absolute"
        >
          <div className="border border-[#2A0E61] p-10">
            <div className="bg-black/40 p-4 border border-[#7042f88b] rounded flex items-center">
              <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
              <h2 className="text-white text-lg">About me</h2>
            </div>
            <p className="text-white max-w-[500px]">oiahoiudhaowd</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
