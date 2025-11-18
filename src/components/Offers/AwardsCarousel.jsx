// AwardsCarousel.jsx
import { useEffect, useMemo, useState } from "react";

const logos = [
  {
    src: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/saso-logo-e1586261089518-removebg-preview.png",
    alt: "Ultra Prestigious 1",
  },
  {
    src: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/ISO-9000-certification-removebg-preview.png",
    alt: "Ultra Prestigious 2",
  },
  {
    src: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/saso-logo-e1586261089518-removebg-preview.png",
    alt: "Hyper Best",
  },
  {
    src: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/ISO-9000-certification-removebg-preview.png",
    alt: "Ultra Prestigious 3",
  },
  {
    src: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/saso-logo-e1586261089518-removebg-preview.png",
    alt: "Ultra Prestigious 4",
  },
  {
    src: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/ISO-9000-certification-removebg-preview.png",
    alt: "Ultra Prestigious 5",
  },
   {
    src: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/saso-logo-e1586261089518-removebg-preview.png",
    alt: "Ultra Prestigious 4",
  },
   {
    src: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/saso-logo-e1586261089518-removebg-preview.png",
    alt: "Ultra Prestigious 4",
  },
];

export default function AwardsCarousel() {
  const [current, setCurrent] = useState(0);
  const [logosPerSlide, setLogosPerSlide] = useState(4);

  // 🔁 Responsive logos per slide
  useEffect(() => {
    const updateLogosPerSlide = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;

      if (width < 640) {
        // mobile
        setLogosPerSlide(2);
      } else if (width < 1024) {
        // tablet
        setLogosPerSlide(3);
      } else {
        // desktop
        setLogosPerSlide(4);
      }
    };

    updateLogosPerSlide();
    window.addEventListener("resize", updateLogosPerSlide);
    return () => window.removeEventListener("resize", updateLogosPerSlide);
  }, []);

  const slides = useMemo(() => {
    const chunks = [];
    for (let i = 0; i < logos.length; i += logosPerSlide) {
      chunks.push(logos.slice(i, i + logosPerSlide));
    }
    return chunks;
  }, [logosPerSlide]);

  // autoplay – smooth step slide by slide
  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500); // a bit quicker & smoother

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mb-12 text-center md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            Awards
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-wide text-gray-900 md:text-4xl">
            OUR ACHIEVEMENTS ON THE JOURNEY
          </h2>
        </div>

        {/* Logos carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex min-w-full items-center justify-center gap-8 md:gap-16"
                >
                  {slide.map((logo, i) => (
                    <div
                      key={logo.src + i}
                      className="flex h-16 w-28 items-center justify-center rounded-md sm:h-20 sm:w-40 md:h-24 md:w-52"
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
