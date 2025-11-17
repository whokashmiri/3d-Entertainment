// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function HomeHero() {
//   const videos = [
//    "https://www.pexels.com/download/video/30829214/",
//    "https://www.pexels.com/download/video/8089234/",
//    "https://www.pexels.com/download/video/4488715/",
//   ];

//   const [currentVideo, setCurrentVideo] = useState(0);

//   // Preload videos for smooth transition
//   useEffect(() => {
//     videos.forEach((src) => {
//       const video = document.createElement("video");
//       video.src = src;
//       video.preload = "auto";
//     });
//   }, []);

//   // Cycle videos
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideo((prev) => (prev + 1) % videos.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen bg-black overflow-hidden">

//       {/* VIDEO LAYERS WITH BLUR FADE TRANSITION */}
//       <AnimatePresence mode="wait">
//         <motion.video
//           key={currentVideo}
//           className="absolute inset-0 w-full h-full object-cover"
//           src={videos[currentVideo]}
//           autoPlay
//           loop
//           muted
//           preload="auto"
//           initial={{ opacity: 0, filter: "blur(12px)" }}
//           animate={{ opacity: 1, filter: "blur(0px)" }}
//           exit={{ opacity: 0, filter: "blur(12px)" }}
//           transition={{ duration: 1.4, ease: "easeInOut" }}
//         />
//       </AnimatePresence>

//       {/* Glitch Overlay */}
//       <div className="absolute inset-0 mix-blend-overlay pointer-events-none">
//         <div className="w-full h-full animate-glitch opacity-20 bg-repeat bg-[url('/glitch.png')]" />
//       </div>

//       {/* CONTENT */}
//       <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-3xl text-white">
//         <motion.p
//           className="uppercase tracking-widest text-sm md:text-base mb-2"
//           initial={{ x: -40, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           3D Entertainment Co.
//         </motion.p>

//         <motion.h1
//           className="text-4xl md:text-6xl font-extrabold leading-tight"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//         >
//           FILMS MADE TO <br />
//           <span className="text-red-600 glitch-text">PERFECTION</span>
//         </motion.h1>

//         <motion.p
//           className="mt-6 text-sm md:text-lg leading-relaxed opacity-90"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           3D Entertainment is becoming the one and only leading custom design and
//           fabrication company in the Middle East. Created a wide variety of props
//           for film & amusement, entertainment venues, facades, murals and retail
//           businesses of all sizes.
//         </motion.p>

//         <motion.button
//           className="mt-8 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3  w-fit"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//         >
//           DISCOVER MORE
//         </motion.button>
//       </div>
//     </section>
//   );
// }



// StudioGramHero.tsx
// 'use client';  // <- uncomment if using Next.js app router

import React, { useEffect, useState } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeHero = () => {
  useEffect(() => {
          AOS.init();
        }, [])
  const [overlayOpacity, setOverlayOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 400; // px until overlay mostly gone
      const y = window.scrollY;
      const progress = Math.min(y / maxScroll, 1);
      // from 1 (top) to ~0.3 (scrolled)
      setOverlayOpacity(1 - progress * 0.7);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* Replace with your own video sources */}
        <source src="https://www.pexels.com/download/video/8089234/" type="video/mp4" />
      </video>

      {/* Red / black overlay that fades on scroll */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          opacity: overlayOpacity,
          transition: "opacity 150ms ease-out",
          background:
            "linear-gradient(to right, rgba(0,0,0,0.70) 10%, rgba(0,0,0,0.85) 40%, rgba(180,0,0,0.9) 90%)",
        }}
      />

      {/* Top nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3">
          {/* Left: logo mark + wordmark */}
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-red-600">
              <span className="text-xs font-bold tracking-[0.2em]">/</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                3D Entertainment
              </span>
              <span className="text-[10px] tracking-[0.2em] text-neutral-500">
                creative agency
              </span>
            </div>
          </div>

          {/* Right: Get in touch button + plus icon */}
          <div className="flex items-center gap-3">
            <button className=" border border-red-500/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur-md transition hover:bg-red-600 hover:text-white">
              Get In Touch
            </button>
          
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between px-6 pb-16 pt-28 md:pb-24 md:pt-36">
          {/* Upper content block */}
          <div className="max-w-xl space-y-6">
            {/* Badge row */}
            <div className="space-y-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
              <div className="flex items-center gap-2">
                {/* Fake logo row */}
                <div className="flex items-center gap-[6px] text-[9px]">
                  <span className="rounded-sm bg-white/10 px2 py-[2px] px-[6px]">
                    LOGO
                  </span>
                  <span className="rounded-sm bg-white/10 px2 py-[2px] px-[6px]">
                    IPSUM
                  </span>
                  <span className="rounded-sm bg-white/10 px2 py-[2px] px-[6px]">
                    LOGO
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="flex items-center gap-[3px] text-red-500">
                  ★ ★ ★ ★ ★
                </span>
                <span className="text-neutral-300">Loved by Big Brands</span>
              </div>
            </div>

            {/* Hero copy */}
            <h1 className="text-2xl font-semibold leading-snug md:text-[28px]" data-aos="fade-left" data-aos-duration="1000"
    >
              3D ENTERTAINMENT brings ideas to life with{" "}
              <span className="text-red-400">bold storytelling</span>,
              high-end production, and strategic marketing that makes an{" "}
              <span className="text-red-400">impact.</span>
            </h1>
          </div>

{/* Giant title at bottom */}
<div className="mt-12 md:mt-20 lg:mt-24 flex justify-end">
  <div className="relative inline-block leading-none tracking-tight mix-blend-difference">
    
    {/* Main title */}
    <span
      className="select-none block font-semibold text-white/80 tracking-tight mix-blend-difference
                 text-[11vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[8vw]" data-aos="fade-up" data-aos-duration="1000"
    >
      3D ENTERTAINMENT
    </span>

  
  </div>
</div>


        </div>
      </div>
    </section>
  );
};

export default HomeHero;
