import { Link } from "react-router-dom";

// WhatWeOffer.jsx

const services = [
  {
    title: "Cinema and film industry",
    description:
      "Creativity, storytelling, technology merge to entertain, provoke, and reflect culture in the cinematic world.",
    href: "/cinema-and-film-industry",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T130139.844.png",
  },
  {
    title: "Props Production",
    description:
      "Crafting custom props for film, theater, events, and advertising, blending creativity, precision, and storytelling expertise.",
    href: "/props-production",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T130324.632.png",
  },
  {
    title: "Trade Show",
    description:
      "Exhibition of industry innovations, networking, and business opportunities, showcasing products, services, and fostering industry connections.",
    href: "/trade-show",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T130440.785.png",
  },
   {
    title: "Retail Displays",
    description:
      "Eye-catching retail displays boost sales, engage customers, and enhance the shopping experience.",
    href: "/retail-displays",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T130634.248.png",
  },
  {
    title: "Kiosk",
    description:
      "Compact, self-service station for quick transactions, information, or services, often seen in public spaces",
    href: "/kiosk",
    image: "https://images.pexels.com/photos/3943950/pexels-photo-3943950.jpeg",
  },
  {
    title: "Theme Parks",
    description:
      "Immersive worlds, thrilling rides, enchanting characters, and endless fun – theme park design creates unforgettable experiences for all ages.",
    href: "/trade-show",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T134919.647.png",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            WHAT WE OFFER
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            Our adept teams cover diverse creative and technical aspects,
            ensuring top-tier project execution and quality.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              to={service.href}
              className="group block h-full"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">

                {/* CARD IMAGE */}
                <div className="relative w-full overflow-hidden">
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={service.image}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      alt={service.title}
                    />
                  </div>
                </div>

                {/* CARD CONTENT */}
                <div className="flex flex-1 flex-col items-center justify-between px-6 py-6 text-center">

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-gray-600">
                      {service.description}
                    </p>
                  </div>

                  <span className="mt-5 text-sm font-semibold text-gray-900">
                    View More »
                  </span>

                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
