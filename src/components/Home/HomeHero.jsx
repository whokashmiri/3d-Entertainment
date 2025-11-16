import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeHero() {
  const videos = [
   "https://www.pexels.com/download/video/30829214/",
   "https://www.pexels.com/download/video/8089234/",
   "https://www.pexels.com/download/video/4488715/",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  // Preload videos for smooth transition
  useEffect(() => {
    videos.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
      video.preload = "auto";
    });
  }, []);

  // Cycle videos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      {/* VIDEO LAYERS WITH BLUR FADE TRANSITION */}
      <AnimatePresence mode="wait">
        <motion.video
          key={currentVideo}
          className="absolute inset-0 w-full h-full object-cover"
          src={videos[currentVideo]}
          autoPlay
          loop
          muted
          preload="auto"
          initial={{ opacity: 0, filter: "blur(12px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Glitch Overlay */}
      <div className="absolute inset-0 mix-blend-overlay pointer-events-none">
        <div className="w-full h-full animate-glitch opacity-20 bg-repeat bg-[url('/glitch.png')]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-3xl text-white">
        <motion.p
          className="uppercase tracking-widest text-sm md:text-base mb-2"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          3D Entertainment Co.
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          FILMS MADE TO <br />
          <span className="text-red-600 glitch-text">PERFECTION</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-sm md:text-lg leading-relaxed opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          3D Entertainment is becoming the one and only leading custom design and
          fabrication company in the Middle East. Created a wide variety of props
          for film & amusement, entertainment venues, facades, murals and retail
          businesses of all sizes.
        </motion.p>

        <motion.button
          className="mt-8 bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3  w-fit"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          DISCOVER MORE
        </motion.button>
      </div>
    </section>
  );
}
