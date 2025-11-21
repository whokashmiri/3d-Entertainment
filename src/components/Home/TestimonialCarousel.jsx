// TestimonialCarousel.jsx
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Stephanie",
    role: "COO at InnovateCo",
    quote:
      "Exceptional craftsmanship and attention to detail! This custom design and fabrication company exceeded our expectations, turning our vision into reality with precision and creativity. Highly recommended",
    avatar:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 2,
    name: "Dan",
    role: "CTO at SecureNet",
    quote:
      "I'm confident my data is safe with COMPANY. I can’t say that about other providers.",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 3,
    name: "Marie",
    role: "CFO at FuturePlanning",
    quote:
      "COMPANY's product gave us clarity for the future. Can’t recommend it enough!",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 4,
    name: "Andre",
    role: "Head of Growth at CreativeSolutions",
    quote:
      "If I could give 12 stars, I would. COMPANY changed how we operate completely.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getPositionStyles = (index) => {
    if (index === activeIndex) {
      return "z-20 scale-100 opacity-100 translate-x-0 blur-0";
    }

    const total = testimonials.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    if (index === prevIndex) {
      return "z-10 -translate-x-1/3 scale-95 opacity-40 blur-[1px]";
    }

    if (index === nextIndex) {
      return "z-10 translate-x-1/3 scale-95 opacity-40 blur-[1px]";
    }

    return "z-0 scale-90 opacity-0 blur-sm pointer-events-none";
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        {/* ⚠️ Use a direct .mp4 URL here */}
        <source
          src="https://www.pexels.com/download/video/857134/"
          type="video/mp4"
        />
      </video>

     

      {/* Content (centered vertically & horizontally) */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4">
        {/* Heading */}
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl uppercase font-extrabold tracking-wide text-gray-900">
            WHAT Our Clients Say
          </h2>

        {/* Carousel area */}
        <div className="relative flex h-[460px] w-full   ">
          {/* Cards layer */}
          <div className="relative h-full w-full flex items-center justify-center">
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className={`absolute top-1/2 w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 transform transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] ${getPositionStyles(
                  index
                )}`}
              >
                {/* Outer subtle shadow card */}
                <div className="rounded-[10px] pb-3 pt-3 shadow-lg/40">
                  {/* Main orange card */}
                  <div className="relative  h-full w-full rounded-xl bg-[#A6000A] px-8 pb-10 pt-8 text-white shadow-xl md:min-h-[400px] ">
                    {/* Avatar */}
                    <div className="mb-6 flex items-center">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-14 w-14 rounded-[18px] object-cover shadow-md md:h-16 md:w-16"
                      />
                    </div>

                    {/* Decorative corner line */}
                    <div className="pointer-events-none absolute right-8 top-8 hidden h-10 w-10 rotate-45 items-center justify-center md:flex">
                      <span className="block h-0.5 w-9 rounded-full bg-white" />
                    </div>

                    {/* Quote */}
                    <p className="mb-10 text-lg leading-relaxed md:text-2xl">
                      “{t.quote}”
                    </p>

                    {/* Name / role */}
                    <p className="text-sm font-medium md:text-base">
                      - {t.name}, {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow buttons */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={goPrev}
            className="flex h-12 w-16 items-center justify-center  border border-gray-200 bg-white/90 text-xl text-gray-800 shadow-sm backdrop-blur-sm transition hover:bg-white hover:shadow-md"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            onClick={goNext}
            className="flex h-12 w-16 items-center justify-center  border border-gray-200 bg-white/90 text-xl text-gray-800 shadow-sm backdrop-blur-sm transition hover:bg-white hover:shadow-md"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
