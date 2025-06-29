"use client";

import ProjectCardBig from "@/components/main/ProjectCardBig";
import {
  imagesForEXchange,
  imagesForFreelance,
  imagesForSpacePortfolio,
  imagesForToplex,
} from "@/constants";
import React from "react";

const Page = () => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-10 flex flex-col gap-16">
      <ProjectCardBig
        heading="Space Portfolio"
        images={imagesForSpacePortfolio}
        description="A space-themed portfolio website built using Next.js, TypeScript, and Tailwind CSS. It showcases all my projects with detailed explanations, demonstrating my skills in frontend development and modern web technologies."
        tech={["/next.png", "/ts.png", "/tailwind.png"]}
        repo={"https://github.com/zquux/website-portfolio"}
      />

      <ProjectCardBig
        heading="Toplex - Todo Dashboard"
        images={imagesForToplex}
        description={`A full-stack Todo dashboard built with React and Node.js, featuring authentication via Mailtrap and JWTs. Uses MongoDB as a database and leverages external libraries for drag-and-drop functionality. 
        Currently in development, with plans to add a calendar view for setting tasks and taking dates.`}
        tech={[
          "/js.png",
          "/react.png",
          "/node-js.png",
          "/express.png",
          "/tailwind.png",
        ]}
        repo={"https://github.com/zquux/toplex"}
      />

      <ProjectCardBig
        heading="Currency Exchange Telegram Bot"
        images={imagesForEXchange}
        description={`A Python-based Telegram bot that provides real-time currency exchange rates. Built using Python libraries for bot implementation and API calls to a currency rates provider.

        Telegram bots are popular for automating tasks and providing information within the messaging app, making them a convenient tool for users.

        Note: Telegram is a cloud-based messaging app known for its speed, security, and support for bots and channels. It's widely used in various regions, especially in Eastern Europe.`}
        tech={["/python.png", "/telegram.webp"]}
        repo={"https://github.com/zquux/exchangebot"}
      />

      <ProjectCardBig
        heading="Freelance websites"
        images={imagesForFreelance}
        description={`As part of my freelance work, I've designed and developed several responsive websites for clients including small businesses and startups. These projects typically focused on creating clean, modern, and mobile-friendly landing pages using HTML, CSS, and JavaScript.`}
        tech={["/html.png", "/css.png", "/js.png"]}
        repo={""}
      />
    </div>
  );
};

export default Page;
