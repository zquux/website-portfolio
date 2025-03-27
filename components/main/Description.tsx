import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import React from "react";

const Description = () => {
  return (
    <div className="relative w-full min-h-[800px] h-full pb-[1000px]">
      <video
        src="/universe.webm"
        className="w-full h-full object-cover opacity-[30%] blur-xs absolute top-[-70px]"
        preload="auto"
        playsInline
        loop
        muted
        autoPlay
      ></video>

      <div className="absolute inset-0 flex justify-between items-center px-10">
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center"
        >
          <div className="border border-[#2A0E61] p-10 h-[400px] z-[101] backdrop-blur-md rounded-lg">
            <div className="bg-black/40 p-2 border border-[#7042f88b] rounded flex items-center w-[170px]">
              <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
              <h2 className="text-white text-lg">About me</h2>
            </div>
            <p className="text-white max-w-[500px] pt-10">
              Hi! I'm Vladyslav Vovk, a second-year Software Engineering student
              at Munster Technological University. I love working with code and
              constantly push myself to explore new technologies and improve my
              skills. I take on small freelance projects to get practical
              experience and build up my portfolio.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.3)}
          initial="hidden"
          animate="visible"
          className="flex-1 flex justify-center"
        >
          <div className="border border-[#2A0E61] p-10 h-[400px] z-[101] backdrop-blur-md rounded-lg">
            <div className="bg-black/40 p-2 border border-[#7042f88b] rounded flex items-center w-[170px]">
              <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
              <h2 className="text-white text-lg">Skills</h2>
            </div>
            <p className="text-white max-w-[500px] pt-10">
              Skilled in modern web development technologies like HTML, CSS,
              Tailwind, JavaScript, and TypeScript, with hands-on experience
              using frameworks like React and NextJS. Experienced in building
              full-stack applications using NodeJS and Express, and proficient
              with databases such as MongoDB. Comfortable with version control
              using Git and GitHub. Follows object-oriented principles and SOLID
              design, with understanding of basic Linux.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
