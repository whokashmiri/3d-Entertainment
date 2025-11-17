// OurProject.jsx

const projects = [
  {
    src: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
    alt: "Colorful amusement park",
  },
  {
    src: "https://images.pexels.com/photos/7991175/pexels-photo-7991175.jpeg",
    alt: "Exhibition booth",
  },
  {
    src: "https://images.pexels.com/photos/8088386/pexels-photo-8088386.jpeg",
    alt: "Cinema and props collage",
  },
  {
    src: "https://images.pexels.com/photos/10981974/pexels-photo-10981974.jpeg",
    alt: "Industrial production room",
  },
];

export default function OurProject() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* TOP HEADING WITH BOX + LINES */}
        <div className="mb-12 md:mb-16 flex items-center justify-center">
          {/* Left line */}
          <div className="hidden flex-1 border-t border-gray-300 md:block" />

          {/* Center box */}
          <div className="mx-6 inline-block rounded-sm border border-gray-900 bg-white px-10 py-6 shadow-md">
            <p className="text-xl md:text-2xl font-extrabold uppercase tracking-[0.18em] text-gray-900 text-center">
              OUR PROJECT
            </p>
          </div>

          {/* Right line */}
          <div className="hidden flex-1 border-t border-gray-300 md:block" />
        </div>

        {/* PROJECT IMAGES ROW */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={project.src}
                  alt={project.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
