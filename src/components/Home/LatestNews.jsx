import { Link } from "react-router-dom";

// WhatWeOffer.jsx

const services = [
  {
    title: "From Concept to Creation: The Custom Design Process Unveiled",
    description:
      "Take readers through the step-by-step process of designing and fabricating custom props, displays, and installations.",
    href: "/cinema-and-film-industry",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T123127.919.png",
  },
  {
    title: "Designing for Functionality: How Custom Furniture Can Transform Spaces",
    description:
      "Discuss the benefits of custom furniture design and share examples.",
    href: "/props-production",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T125018.764.png",
  },
  {
    title: "The Art of Custom Metal Fabrication: Techniques and Inspiration",
    description:
      "Explore different metal fabrication techniques and showcase inspiring projects your",
    href: "/trade-show",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T125344.572.png",
  },
   
];

export default function LatestNews() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">

        {/* SECTION HEADER */}
        <div className="text-center mb-12 md:mb-16">
         

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            Latest News
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-gray-600">
            Stay updated with the latest industry trends, company news, and expert insights from our dedicated team,
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
