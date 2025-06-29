"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Description = () => {
  return (
    <div className="relative w-full min-h-screen h-full pb-20">
      <video
        src="/universe.webm"
        className="w-full h-full object-cover opacity-30 blur-xs absolute top-0 left-0"
        preload="auto"
        playsInline
        loop
        muted
        autoPlay
      ></video>

      <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center gap-6 px-4 sm:px-10">
        <motion.div
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="border border-[#2A0E61] p-6 sm:p-10 w-full max-w-[500px] backdrop-blur-md rounded-lg z-10">
            <div className="bg-black/40 p-2 border border-[#7042f88b] rounded flex items-center w-fit">
              <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
              <h2 className="text-white text-lg">About me</h2>
            </div>
            <p className="text-white pt-6 sm:pt-10 text-sm sm:text-base">
              Hi! I&apos;m Vladyslav Vovk, a Software Engineering student at
              MTU, Ireland. I love working with code and constantly push myself
              to explore new technologies and improve my skills. I take on small
              freelance projects to get practical experience and build up my
              portfolio.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromRight(0.3)}
          initial="hidden"
          animate="visible"
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="border border-[#2A0E61] p-6 sm:p-10 w-full max-w-[500px] backdrop-blur-md rounded-lg z-10">
            <div className="bg-black/40 p-2 border border-[#7042f88b] rounded flex items-center w-fit">
              <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
              <h2 className="text-white text-lg">Skills</h2>
            </div>
            <p className="text-white pt-6 sm:pt-10 text-sm sm:text-base">
              Skilled in modern web development technologies like HTML, CSS,
              Tailwind, JavaScript, and TypeScript, with hands-on experience
              using frameworks like React and NextJS. Experienced in building
              full-stack applications using NodeJS and Express, and proficient
              with databases such as MongoDB and Postgres with ORM&apos;s like
              Prisma. Comfortable with version control using Git and GitHub.
              Follows object-oriented principles and SOLID design, with
              understanding of basic Linux.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
