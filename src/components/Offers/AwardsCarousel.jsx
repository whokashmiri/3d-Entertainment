// AwardsCarousel.jsx
import { useEffect, useMemo, useState } from "react";

const logos = [
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpUb_7Urdno_LuRtJJ82lLneSxuwiZ1Tww&s",
    alt: "Ultra Prestigious 1",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpUb_7Urdno_LuRtJJ82lLneSxuwiZ1Tww&s",
    alt: "Ultra Prestigious 2",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpUb_7Urdno_LuRtJJ82lLneSxuwiZ1Tww&s",
    alt: "Hyper Best",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpUb_7Urdno_LuRtJJ82lLneSxuwiZ1Tww&s",
    alt: "Ultra Prestigious 3",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpUb_7Urdno_LuRtJJ82lLneSxuwiZ1Tww&s",
    alt: "Ultra Prestigious 4",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpUb_7Urdno_LuRtJJ82lLneSxuwiZ1Tww&s",
    alt: "Ultra Prestigious 5",
  },
];

export default function AwardsCarousel() {
  // how many logos per slide (like screenshot – 4 across)
  const logosPerSlide = 4;

  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < logos.length; i += logosPerSlide) {
      chunks.push(logos.slice(i, i + logosPerSlide));
    }
    return chunks;
  }, []);

  const [current, setCurrent] = useState(0);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            Awards
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            OUR ACHIEVEMENTS ON THE JOURNEY
          </h2>
        </div>

        {/* Logos carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex min-w-full items-center justify-center gap-10 md:gap-16"
                >
                  {slide.map((logo, i) => (
                    <div
                      key={logo.src + i}
                      className="flex h-24 w-40 md:h-24 md:w-52 items-center justify-center rounded-md"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full border border-gray-900 transition
                  ${
                    current === index
                      ? "bg-gray-900"
                      : "bg-transparent hover:bg-gray-700"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
