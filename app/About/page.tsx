"use client";

import Description from "@/components/main/Description";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-black/40">
      <div className="h-[60px] inset-0 absolute bg-[#2A0E61]/40"></div>
      <Description />
    </div>
  );
};

export default About;
