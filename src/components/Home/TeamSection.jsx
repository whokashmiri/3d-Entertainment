// TeamSection.jsx
import { useState ,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const accordionItems = [
  {
    title: "TEAMWORK",
    content:
      "Our crew collaborates seamlessly across departments to deliver cinematic experiences from concept to final cut.",
  },
  {
    title: "QUALITY",
    content:
      "We obsess over every frame, ensuring top-tier visual and audio quality for every single project.",
  },
  {
    title: "PROFESSIONAL",
    content:
      "From pre-production to post, our team brings industry-level professionalism and reliability.",
  },
];

const teamPills = [
  {
    name: "Amelia Stone",
    role: "Producer",
    image:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "#bfd8df", // pale blue
  },
  {
    name: "Sara Reed",
    role: "Art Director",
    image:
      "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "#203854", // navy
  },
  {
    name: "Jason Cole",
    role: "Cinematographer",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    bg: "#f4c372", // warm yellow
  },
  {
    name: "Luke Anthony",
    role: "Founder",
    image:
      "https://images.pexels.com/photos/30627674/pexels-photo-30627674.jpeg",
    bg: "#f6e4c5", // cream
    isFounder: true,
  },
];

export default function TeamSection() {
     useEffect(() => {
              AOS.init();
            }, [])

    
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top row: heading + accordion */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left heading */}
          <div className="md:w-1/2" >
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500" data-aos="fade-right" data-aos-duration="1000">
              Our Super Team
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide text-gray-900" data-aos="fade-left" data-aos-duration="1000">
              MEET WITH OUR
              <br />
              PROFESSIONAL TEAM
            </h2>
          </div>

          {/* Right accordion */}
          <div className="md:w-[40%] space-y-3">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.title}
                  className="rounded-sm bg-white shadow-md"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="text-sm md:text-base font-semibold tracking-[0.12em] uppercase text-gray-900">
                      {item.title}
                    </span>

                    <span className="flex h-7 w-7 items-center justify-center rounded-[3px] border border-gray-900 text-[11px]">
                      <span
                        className={`inline-block transform transition-transform ${
                          isOpen ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-4 text-sm text-gray-600">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      {/* Pills row (inline, no wrap, stronger hover effect) */}
<div className="mt-16 flex flex-nowrap items-end justify-center gap-6 md:gap-8 overflow-x-auto pb-4">
  {teamPills.map((member) => (
    <div
      key={member.name}
      className={
        "group relative shrink-0 overflow-hidden shadow-md rounded-full transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.08] h-[260px] w-32 sm:h-[300px] sm:w-40 md:h-[340px] md:w-48 lg:h-[380px] lg:w-56"
      }
      style={{
        backgroundColor: member.bg,
      }}
    >
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover rounded-full"
      />
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
