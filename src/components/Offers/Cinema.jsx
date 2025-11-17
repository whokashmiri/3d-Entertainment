import React from "react";
import { useEffect, useRef, useState } from "react";
import bgimage from "../../assets/imageten.png";
import { motion } from "framer-motion";
import imagetwo from "../../assets/imageseven.png";


const Cinema = () => {
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
    CINEMA & TV PRODUCTION
  </motion.h1>
</section>

      <section className="px-2 md:px-8 py-14 w-full text-black flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl">
          <p className="text-lg text-gray-800 leading-relaxed">
            {/* our descriptive text here */}
          </p>
          {/* <p className="mt-2 text-2xl font-medium">WHO WE ARE</p> */}
          <h1 className="mt-5 text-7xl uppercase md:text-4xl font-bold tracking-wider pb-5">
            Shaping the Future of Cinema in the Middle EasT
          </h1>
          <p className="mt-2 leading-relaxed text-gray-500">
            The cinema and film industry in the Middle East has been experiencing rapid growth, and companies like 3D Entertainment are positioning themselves at the forefront of this transformation. With the region’s youthful population, rising disposable incomes, and government investment in cultural infrastructure, the demand for immersive cinematic experiences has surged. Audiences are increasingly drawn to 3D films and advanced formats that deliver virtual reality–like sensations, making 3D Entertainment’s specialization in cutting-edge technology highly relevant
            <br />
            The cinema and film industry in the Middle East is experiencing unprecedented growth, driven by a young, dynamic audience and strong investment in cultural infrastructure. With new theaters opening across the region and a rising demand for premium experiences, the industry has become a hub for innovation, creativity, and global collaboration. This transformation is not only reshaping entertainment but also positioning the Middle East as a vibrant player in the worldwide film market.

At the heart of this evolution, 3D Entertainment stands out as a pioneer in delivering immersive cinematic experiences. By combining cutting-edge 3D technology with visionary storytelling, the company brings audiences closer to the magic of film than ever before. 3D Entertainment’s commitment to quality, innovation, and accessibility ensures that every screening is more than just a movie — it’s an unforgettable journey. With a focus on regional growth and global standards, the company continues to redefine what cinema means for audiences across the Middle East.
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

export default Cinema