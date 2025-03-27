import ProjectCardBig from "@/components/main/ProjectCardBig";
import {
  imagesForEXchange,
  imagesForFedsmedia,
  imagesForSpacePortfolio,
  imagesForToplex,
} from "@/constants";

import React from "react";

const page = () => {
  return (
    <div className="p-30">
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

          Telegram is a cloud-based messaging app similar to Snapchat or WhatsApp, known for its speed, security, and support for bots and channels. Its widely used in various regions, especially in Eastern Europe, for messaging.`}
        tech={["/python.png", "/telegram.webp"]}
        repo={"https://github.com/zquux/exchangebot"}
      />
      <ProjectCardBig
        heading="Videographing Website"
        images={imagesForFedsmedia}
        description={`A responsive website developed for a German videomaking company, using HTML, CSS, and JavaScript. The project is still in development, focusing on creating an intuitive and visually appealing platform to showcase the company's videography services.
                                              
        No git hub repo provided for privacy reasons.
        `}
        tech={["/html.png", "/css.png", "/js.png"]}
        repo={""}
      />
    </div>
  );
};

export default page;
