import React from "react";
import { useEffect, useRef, useState } from "react";
import bgimage from "../../assets/imageten.png";
import { motion } from "framer-motion";
import imagetwo from "../../assets/imageseven.png";


const Abouthero = () => {
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
    ABOUT US
  </motion.h1>
</section>

      <section className="px-2 md:px-8 py-14 w-full text-black flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-800 leading-relaxed">
            {/* our descriptive text here */}
          </p>
          <p className="mt-2 text-2xl font-medium">WHO WE ARE</p>
          <h1 className="mt-5 text-7xl md:text-4xl font-bold tracking-wider pb-5">
            THE NEXT BIG THING IN THE FILM INDUSTRY
          </h1>
          <p className="mt-2 leading-relaxed text-gray-500">
            3D Entertainment employs highly skilled teams to work across the
            widest spectrum of creative and technical processes enabling all
            projects to be released to the highest specification.
            <br />
            Our expertise includes carpentry and metal fabrication, sculpting,
            mold-making, and casting, textiles and soft props, animatronics and
            engineering, fiberglass and plastics, artificial rocks and trees,
            interior design and fabrication, foam works and coating, painting
            and specialized finishes, architectural structures, site work and
            installation
          </p>
          <button className="mt-8 px-8 py-2 border border-black text-lg font-medium hover:bg-black hover:text-white transition duration-300">
            DISCOVER MORE
          </button>
        </div>
      </section>

      <div>
  <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">

    {/* Soft Contrast Layer Behind Text to make text clear */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

    <div className="relative z-10 flex flex-col gap-5 text-center leading-[0.8]">

      {/* LINE 1 */}
      <motion.h1
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="
          text-[24vw] md:text-[16vw] font-semibold uppercase 
          text-transparent bg-clip-text bg-cover bg-center bg-no-repeat
          bg-[length:180%]
        "
        style={{ backgroundImage: `url(${imagetwo})` }}
      >
        FILMING
      </motion.h1>

      {/* LINE 2 */}
      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="
          text-[22vw] md:text-[14vw] font-semibold uppercase 
          text-transparent bg-clip-text bg-cover bg-center bg-no-repeat
          bg-[length:180%]
        "
        style={{ backgroundImage: `url(${imagetwo})` }}
      >
        TAKEN TO THE
      </motion.h1>

      {/* LINE 3 */}
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="
          text-[28vw] md:text-[18vw] font-semibold uppercase 
          text-transparent bg-clip-text bg-cover bg-center bg-no-repeat
          bg-[length:170%]
        "
        style={{ backgroundImage: `url(${imagetwo})` }}
      >
        NEXT LEVEL
      </motion.h1>

    </div>
  </section>
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

export default Abouthero;
