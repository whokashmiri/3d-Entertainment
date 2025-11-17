import React from "react";
import { useEffect, useRef, useState } from "react";
import bgimage from "../../assets/imageten.png";
import { motion } from "framer-motion";


const ProductionHero = () => {
  const heroStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "55vh",
    border: "2px solid black",
    borderBottom: "none",
  };
  
   const countersRef = useRef([]);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats = [
    { target: 76, label: "WINNING AWARDS" },
    { target: 234, label: "COMPLETED PROJECTS" },
    { target: 111, label: "BEST SHOTS" },
    { target: 1234, label: "HAPPY CLIENTS" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    countersRef.current.forEach((counter) => {
      const update = () => {
        const target = +counter.dataset.target;
        const current = +counter.innerText;
        const increment = target / 60; // smooth speed

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
  };


  return (
    <>
<section
  style={heroStyle}
  className="w-full text-white flex items-center justify-center pb-7"
>
  <motion.h1
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.4 }}
    className="relative text-8xl font-bold drop-shadow-lg"
  >
PROPS PRODUCTION
  </motion.h1>
</section>

      <section className="px-2 md:px-8 py-14 w-full text-black flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-800 leading-relaxed">
            {/* our descriptive text here */}
          </p>
          {/* <p className="mt-2 text-2xl font-medium">WHO WE ARE</p> */}
          <h1 className="mt-5 text-7xl uppercase md:text-4xl font-bold tracking-wider pb-5">
            Turning Ideas Into Tangible Reality With 3D Precision
          </h1>
          <p className="mt-2 leading-relaxed text-gray-500">
            At 3DProduction, we transform imagination into reality with high-quality 3D modeling, printing, and prop fabrication. Whether you need custom prototypes, detailed props, architectural models, or specialized parts, our team delivers precision, speed, and premium craftsmanship. We bring every project to life with industry-grade tools and a passion for innovation.
            <br />
            Your ideas deserve more than sketches—they deserve to exist. 3DProduction specializes in creating stunning physical and digital products through advanced 3D technologies. From creative props and artistic designs to functional components and commercial prototypes, we ensure every detail is crafted with accuracy and style. We help creators, businesses, and innovators turn concepts into tangible masterpieces. <br />

Props Production by 3DProduction delivers cinema-quality props, replicas, and custom designs with extreme attention to detail. Using cutting-edge 3D printing and modeling technologies, we craft durable, high-precision pieces for film, events, businesses, and personal collections. If you dream it, we can shape it — flawlessly..
          </p>
      
        </div>
      </section>

      <div>

</div>

 <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 text-center">

        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <span
              ref={(el) => (countersRef.current[i] = el)}
              data-target={stat.target}
              className="text-7xl font-extrabold text-gray-900 counter"
            >
              0
            </span>

            <p className="mt-4 text-gray-500 font-semibold tracking-wide text-sm uppercase">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
    </>
  );
};

export default ProductionHero