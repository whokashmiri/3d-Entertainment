import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imagetwo from "../../assets/image.jpg";
// 👇 replace this with your actual video path

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { target: 76, label: "WINNING AWARDS" },
  { target: 234, label: "COMPLETED PROJECTS" },
  { target: 111, label: "BEST SHOTS" },
  { target: 1234, label: "HAPPY CLIENTS" },
];

const AboutHero = () => {
  const rootRef = useRef(null);

  const heroSectionRef = useRef(null);
  const heroVideoRef = useRef(null);

  const textSectionRef = useRef(null);
  const textLinesRef = useRef([]);

  const statsSectionRef = useRef(null);
  const countersRef = useRef([]);
  const hasCountedRef = useRef(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ==== HERO VIDEO PARALLAX ====
      if (heroVideoRef.current && heroSectionRef.current) {
        gsap.fromTo(
          heroVideoRef.current,
          { scale: 1.15, y: 0 },
          {
            scale: 1,
            y: -60,
            ease: "none",
            scrollTrigger: {
              trigger: heroSectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }

      // ==== BIG TEXT PARALLAX / SCROLL ANIMATIONS ====
      const [line1, line2, line3] = textLinesRef.current;

      if (line1 && line2 && line3 && textSectionRef.current) {
        // Line 1: from left
        gsap.fromTo(
          line1,
          { x: -200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textSectionRef.current,
              start: "top 80%",
              end: "center center",
              scrub: true,
            },
          }
        );

        // Line 2: from right
        gsap.fromTo(
          line2,
          { x: 200, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textSectionRef.current,
              start: "top 75%",
              end: "center center",
              scrub: true,
            },
          }
        );

        // Line 3: from bottom
        gsap.fromTo(
          line3,
          { y: 200, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: textSectionRef.current,
              start: "top 70%",
              end: "center center",
              scrub: true,
            },
          }
        );
      }

      // ==== STATS COUNTERS (TRIGGER ONCE) ====
      if (statsSectionRef.current) {
        ScrollTrigger.create({
          trigger: statsSectionRef.current,
          start: "top 80%",
          onEnter: () => {
            if (hasCountedRef.current) return;
            hasCountedRef.current = true;

            countersRef.current.forEach((el, index) => {
              if (!el) return;
              const target = Number(el.dataset.target || 0);
              const obj = { value: 0 };

              gsap.to(obj, {
                value: target,
                duration: 2,
                ease: "power1.out",
                delay: index * 0.15,
                onUpdate: () => {
                  el.textContent = Math.floor(obj.value).toString();
                },
              });
            });
          },
        });
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

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
          src="https://www.pexels.com/download/video/9724373/"
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
          ABOUT US
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
            THE NEXT BIG THING IN THE FILM INDUSTRY
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

      {/* BIG IMAGE-MASKED TEXT SECTION (now GSAP parallax) */}
      <section
        ref={textSectionRef}
        className="relative w-full bg-[#c8d0d4]  min-h-screen flex items-center justify-center overflow-hidden py-20"
      >
        {/* Soft contrast layer behind text */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

        <div className="relative  z-10 flex flex-col gap-5 text-center leading-[0.8]">
          {/* LINE 1 */}
          <h1
            ref={(el) => (textLinesRef.current[0] = el)}
            className="
              text-[24vw] md:text-[16vw] font-semibold uppercase 
              text-transparent bg-clip-text bg-cover bg-center bg-no-repeat
            "
            style={{ backgroundImage: `url(${imagetwo})` }}
          >
            FILMING
          </h1>

          {/* LINE 2 */}
          <h1
            ref={(el) =>(textLinesRef.current[1] = el)}
            className="
              text-[22vw] md:text-[14vw] font-semibold uppercase 
              text-transparent bg-clip-text bg-cover bg-center bg-no-repeat
            "
            style={{ backgroundImage: `url(${imagetwo})` }}
          >
            TAKEN TO THE
          </h1>

          {/* LINE 3 */}
          <h1
            ref={(el) => (textLinesRef.current[2] = el)}
            className="
              text-[28vw] md:text-[18vw] font-semibold uppercase 
              text-transparent bg-clip-text bg-cover bg-center bg-no-repeat
            "
            style={{ backgroundImage: `url(${imagetwo})` }}
          >
            NEXT LEVEL
          </h1>
        </div>
      </section>

      {/* STATS / COUNTERS SECTION (now using GSAP instead of IntersectionObserver) */}
      <section ref={statsSectionRef} className="py-20 bg-[#c8d0d4] ">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 text-center">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span
                ref={(el) => (countersRef.current[i] = el)}
                data-target={stat.target}
                className="text-5xl md:text-7xl font-extrabold text-gray-900 counter"
              >
                50
              </span>

              <p className="mt-4 text-gray-500 font-semibold tracking-wide text-sm uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
