// WhatWeOfferScroll.jsx
import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Cinema and film industry",
    description:
      "Creativity, storytelling, technology merge to entertain, provoke, and reflect culture in the cinematic world.",
    href: "/cinema-and-film-industry",
    image: "https://images.pexels.com/photos/7991175/pexels-photo-7991175.jpeg",
  },
  {
    title: "Props Production",
    description:
      "Crafting custom props for film, theater, events, and advertising, blending creativity, precision, and storytelling expertise.",
    href: "/props-production",
    image: "https://images.pexels.com/photos/8088386/pexels-photo-8088386.jpeg",
  },
  {
    title: "Trade Show",
    description:
      "Exhibition of industry innovations, networking, and business opportunities, showcasing products, services, and fostering industry connections.",
    href: "/trade-show",
    image: "https://images.pexels.com/photos/10981974/pexels-photo-10981974.jpeg",
  },
  {
    title: "Retail Displays",
    description:
      "Eye-catching retail displays boost sales, engage customers, and enhance the shopping experience.",
    href: "/retail-displays",
    image: "https://images.pexels.com/photos/5531541/pexels-photo-5531541.jpeg",
  },
  {
    title: "Kiosk",
    description:
      "Compact, self-service station for quick transactions, information, or services, often seen in public spaces.",
    href: "/kiosk",
    image: "https://images.pexels.com/photos/3943950/pexels-photo-3943950.jpeg",
  },
  {
    title: "Theme Parks",
    description:
      "Immersive worlds, thrilling rides, enchanting characters, and endless fun – theme park design creates unforgettable experiences for all ages.",
    href: "/theme-parks",
    image: "https://images.pexels.com/photos/2316786/pexels-photo-2316786.jpeg",
  },
];

export default function WhatWeOfferScroll() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".service-panel");

      // Pin each panel so they stack as you scroll (Apple-style)
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false, // next panel comes over the previous
        });

        const content = panel.querySelector(".service-content");

        if (content) {
          // Animate text/content in each panel
          gsap.fromTo(
            content,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "center center",
                end: "bottom top",
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
      {/* SECTION HEADER (normal, non-pinned) */}
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 md:pt-20 md:pb-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-[0.18em] text-white">
            WHAT WE OFFER
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-300">
            Our adept teams cover diverse creative and technical aspects,
            ensuring top-tier project execution and quality.
          </p>
        </div>
      </div>

      {/* FULL-VIEWPORT PANELS */}
      <div className="relative">
        {services.map((service) => (
          <section
            key={service.href}
            className="service-panel relative h-screen"
          >
            <Link to={service.href} className="group block h-full w-full">
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                {/* Dark gradient overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />
              </div>

              {/* Text content overlay */}
              <div className="service-content relative z-10 flex h-full items-center">
                <div className="w-full px-10 pb-10 md:px-12 md:pb-16 lg:max-w-3xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-300">
                    {service.href.replace("/", "").replace("-", " ") ||
                      "Service"}
                  </p>

                  <h3 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm md:text-base text-gray-200">
                    {service.description}
                  </p>

                  <button className="mt-6 inline-flex items-center rounded-full bg-white/95 px-6 py-2 text-sm font-semibold text-black shadow-lg shadow-black/40 transition hover:bg-white">
                    View More
                    <span className="ml-2 text-base">↗</span>
                  </button>
                </div>
              </div>
            </Link>
          </section>
        ))}
      </div>
    </section>
  );
}


