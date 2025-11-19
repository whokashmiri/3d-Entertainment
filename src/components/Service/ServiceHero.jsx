import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 👇 replace this with your actual video path

gsap.registerPlugin(ScrollTrigger);



const ServiceHero = () => {
  const rootRef = useRef(null);

  const heroSectionRef = useRef(null);
  const heroVideoRef = useRef(null);






   

  
  


  return (
    <div ref={rootRef}>
      {/* HERO with video background + ABOUT US */}
      <section
        ref={heroSectionRef}
        className="relative w-full h-screen border-2 border-black border-b-0 text-white flex items-center justify-center overflow-hidden"
      >
        {/* Background video */}
        <video
          ref={heroVideoRef}
          src="https://www.pexels.com/download/video/7670534/"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

        {/* Title */}
        <h1 className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg tracking-[0.15em]">
          SERVICES
        </h1>
      </section>

      {/* WHO WE ARE SECTION (unchanged content) */}
      <section className="px-2 bg-[#c8d0d4]  md:px-8 py-14 w-full text-black flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-800 leading-relaxed">
            {/* our descriptive text here */}
          </p>
          <p className="mt-2 text-2xl font-medium">WHO WE ARE</p>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider pb-5">
            FILMS MADE TO PERFECTION
          </h1>
          <p className="mt-2 leading-relaxed text-gray-500">
            3D Entertainment employs highly skilled teams to work across the
            widest spectrum of creative and technical processes enabling all
            projects to be released to the highest specification.
            <br />
            Our expertise includes carpentry and metal fabrication, sculpting,
            mold-making, and casting, textiles and soft props, animatronics and
            engineering, fiberglass and plastics, artificial rocks and trees,
            interior design and fabrication, foam works and coating, painting
            and specialized finishes, architectural structures, site work and
            installation
          </p>
          <button className="mt-8 px-8 py-2 border border-black text-lg font-medium hover:bg-black hover:text-white transition duration-300">
            DISCOVER MORE
          </button>
        </div>
      </section>

    
    </div>
  );
};

export default ServiceHero;
