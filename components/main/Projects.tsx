import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/spaceweb.png"
          title="Modern Next.js Portfolio"
          description="A space-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS to showcase projects and frontend development skills."
        />
        <ProjectCard
          src="/toplex_1.png"
          title="Todo dashboard - Toplex"
          description="A full-stack Todo dashboard with authentication, drag-and-drop features, and a calendar view built using React, Node.js, and MongoDB."
        />
        <ProjectCard
          src="/xchange_1.png"
          title="Currency Exchange telegram bot"
          description="A Python-based Telegram bot providing real-time currency exchange rates and leveraging APIs for accurate data.."
        />
        <ProjectCard
          src="/fedsmedia_1.png"
          title="Videographing website"
          description="A responsive website for a German videography company built with HTML, CSS, and JavaScript to showcase their services."
        />
      </div>
    </div>
  );
};

export default Projects;
