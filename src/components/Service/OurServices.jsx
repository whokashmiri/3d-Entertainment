import { Link } from "react-router-dom";

// WhatWeOffer.jsx

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
    title: "Retail Displays.",
    description:
      "Eye-catching retail displays boost sales, engage customers, and enhance the shopping experience.",
    href: "/cinema-and-film-industry",
    image: "https://images.pexels.com/photos/5759960/pexels-photo-5759960.jpeg",
  },
  {
    title: "Kiosk",
    description:
      "Compact, self-service station for quick transactions, information, or services, often seen in public spaces.",
    href: "/props-production",
    image: "https://images.pexels.com/photos/3943949/pexels-photo-3943949.jpeg",
  },
  {
    title: "Theme Parks",
    description:
      "Immersive worlds, thrilling rides, enchanting characters, and endless fun – theme park design creates unforgettable experiences for all ages.",
    href: "/trade-show",
    image: "https://images.pexels.com/photos/1968177/pexels-photo-1968177.jpeg",
  },
  {
    title: "Family Entertainment Centers",
    description:
      "Unleash family fun! Our entertainment center offers games, rides, and excitement, creating memorable moments for all ages. Join the fun today!",
    href: "/cinema-and-film-industry",
    image: "https://images.pexels.com/photos/9821699/pexels-photo-9821699.jpeg",
  },
  {
    title: "Water Features",
    description:
      "Elevate your space with mesmerizing water features. Tranquil, captivating, and harmonious designs that transform any environment into a serene oasis.",
    href: "/props-production",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T125556.182.png",
  },
  {
    title: "Architectural Features",
    description:
      "Architectural features define spaces, embody aesthetics, and inspire awe. From intricate molding to soaring arches, they shape environments with timeless elegance.",
    href: "/trade-show",
    image: "https://images.pexels.com/photos/32639021/pexels-photo-32639021.jpeg",
  },
  {
    title: "Stage Fabrications",
    description:
      "Where creativity meets precision. Elevate your events with our expertly crafted, custom stage designs. Setting the scene for success!",
    href: "/cinema-and-film-industry",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T125018.764.png",
  },
  {
    title: "Indoor and outdoor Signage",
    description:
      "From indoor elegance to outdoor visibility, our signage solutions combine style and durability to leave a lasting impression for your business.",
    href: "/props-production",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T122403.597.png",
  },
  {
    title: "News and Sport Studios",
    description:
      "Cutting-edge news and sport studios: Where stories come to life. Seamless production, dynamic broadcasts, and unrivaled innovation redefine media excellence",
    href: "/trade-show",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T124820.357.png",
  },
  {
    title: "Concert Stages",
    description:
      "Elevate performances with our stunning concert stages. Innovative designs, top-notch construction, and flawless execution to amplify your music and audience experience.",
    href: "/cinema-and-film-industry",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T123913.697.png",
  },
  {
    title: "Design the Scenes and Sceneries",
    description:
      "Breath-taking landscapes, urban marvels, and serene seascapes, each design tells a unique story. Our artistic touch brings scenes and sceneries to life.",
    href: "/props-production",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T123758.700.png",
  },
  {
    title: "Storyboard",
    description:
      "Concise visual narrative: frames map plot, characters, actions. Guides production, clarity. Essential for film, animations, presentations, conveying ideas effectively.",
    href: "/trade-show",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T123707.635.png",
  },
  {
    title: "Costume for Actress",
    description:
      "Exquisite, bespoke costume design for our actress: A perfect blend of elegance and character, enhancing her performance brilliantly. She shines on stage!",
    href: "/cinema-and-film-industry",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T123448.952.png",
  },
  {
    title: "Fiberglass and EPS coating",
    description:
      "Fiberglass and EPS coating: The perfect blend of strength and insulation, delivering durability and energy efficiency for your projects.",
    href: "/props-production",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T123127.919.png",
  },
  {
    title: "OEM Manufacturing Models",
    description:
      "OEM manufacturing: Efficient, scalable, and tailored production solutions, offering quality and reliability for your unique product needs. Elevate your brand with us",
    href: "/trade-show",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T122231.566.png",
  },
  {
    title: "Parade equipment manufacturing",
    description:
      "Mastering parade equipment creation, our craftsmanship shines in every float, costume, and prop. Elevate your parade experience with our expertise.",
    href: "/3d-printing-services",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/Untitled-design-2023-09-15T124359.764.png",
  }
  ,
  {
    title: "Franchise installation",
    description:
      "Efficient franchise installation services – from concept to completion. Expertise in setup, branding, and functionality, ensuring seamless expansion for businesses",
    href: "/trade-show",
    image: "https://images.pexels.com/photos/226737/pexels-photo-226737.jpeg",
  },
  {
    title: "Corporate Offices",
    description:
      "Modern corporate offices prioritize open layouts, ergonomic furniture, natural light, and smart technology to enhance productivity and employee well-being.",
    href: "/3d-printing-services",
    image: "https://showtheworks.com/cinema/wp-content/uploads/2023/09/a5334dbe94b172442a0e6125e405f7b2.jpg",
  }
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