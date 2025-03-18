import React from "react";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full ">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm"></source>
      </video>
    </div>
  );
};

export default Hero;
