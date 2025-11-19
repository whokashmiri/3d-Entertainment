// AboutIntroPinned.jsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bottomBlocks = [
  {
    title: "OUR VISION",
    description:
      "Empower creativity through bespoke design and expert craftsmanship, delivering unique, high-quality solutions that inspire and elevate our clients’ visions.",
    image:
      "https://images.pexels.com/photos/946727/pexels-photo-946727.jpeg",
  },
  {
    title: "OUR MISSION",
    description:
      "Empower creativity through innovative custom design and precise fabrication, crafting unique solutions that exceed expectations and leave a lasting impression.",
    image:
      "https://images.pexels.com/photos/7709017/pexels-photo-7709017.jpeg",
  },
  {
    title: "OUR MOTTO",
    description:
      "Crafting Dreams, Forging Excellence: Your Vision, Our Creation. Elevate possibilities with unique designs and precision fabrication.",
    image:
      "https://images.pexels.com/photos/8656590/pexels-photo-8656590.jpeg",
  },
];

const topPanel = {
  tag: "WHY CHOOSE US",
  title: "FILMING EXPERIENCE\nJUST GOT BETTER",
  description:
    "Now we are opened in Saudi Arabia. 3D Entertainment is becoming the one and only leading custom design and fabrication company in the Middle East. Created a wide variety of props for film & amusement, entertainment venues, facades, murals and retail businesses of all sizes.",
  badge: "23 YEARS EXPERIENCED IN MAKING A MOVIE",
  image:
    "https://images.pexels.com/photos/3943950/pexels-photo-3943950.jpeg",
};

export default function AboutIntroPinned() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
const panels = gsap.utils.toArray(".about-panel", containerRef.current);

      panels.forEach((panel) => {
        const bg = panel.querySelector(".about-bg");
        const content = panel.querySelector(".about-content");

        // Pin each panel
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });

        // Parallax background image
        if (bg) {
          gsap.fromTo(
            bg,
            { scale: 1.15, y: 40 },
            {
              scale: 1,
              y: -40,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                start: "top top",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // Content fade in / slide up
        if (content) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "center 80%",
                end: "center 40%",
                scrub: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white">
      {/* PANEL 1 – WHY CHOOSE US */}
      <section className="about-panel relative h-screen overflow-hidden">
        {/* Background image */}
        <div className="about-bg absolute inset-0">
          <img
            src={topPanel.image}
            alt="Filming experience"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        {/* Content */}
        <div className="about-content relative z-10 flex h-full items-center">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:flex-row">
            {/* Left: badge area (overlay style like original card) */}
            <div className="md:w-1/2 flex items-end justify-center md:justify-start">
              <div className="bg-white px-6 py-3 shadow-xl text-center md:text-left">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gray-800">
                  {topPanel.badge}
                </p>
              </div>
            </div>

            {/* Right: text */}
            <div className="md:w-1/2">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-300">
                {topPanel.tag}
              </p>
              <h2 className="mt-3 whitespace-pre-line text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
                {topPanel.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-200 md:text-base">
                {topPanel.description}
              </p>
              <button className="inline-flex items-center gap-3 bg-[#A6000A] px-6 py-3 text-sm font-semibold text-white shadow-md transform duration-300 hover:bg-gray-700" data-aos="fade-right" data-aos-duration="1000">
                DISCOVER MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PANELS 2–4 – VISION / MISSION / MOTTO */}
      {bottomBlocks.map((block) => (
        <section
          key={block.title}
          className="about-panel relative h-screen overflow-hidden"
        >
          {/* Background image */}
          <div className="about-bg absolute inset-0">
            <img
              src={block.image}
              alt={block.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
          </div>

          {/* Content */}
          <div className="about-content relative z-10 flex h-full items-center">
            <div className="mx-auto max-w-4xl px-6 text-left">
              <p className="text-4xl font-semibold uppercase tracking-[0.25em] text-[#A6000A]" data-aos="fade-right" data-aos-duration="1000">
                {block.title}
              </p>
              <div className="mt-3 h-0.5 w-16 bg-[#A6000A]" />
              <p className="mt-6 text-4xl leading-relaxed text-gray-100 md:text-4xl" data-aos="fade-left" data-aos-duration="1000">
                {block.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
