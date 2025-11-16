import imgone from "../../assets/imageone.png";
import imagetwo from "../../assets/imagetwo.png";
import imagethree from "../../assets/imagethree.png";
import imagefour from "../../assets/imagefour.png";
import imagefive from "../../assets/imagefive.png";
import imagesix from  "../../assets/imagesix.png";
import { useState, useEffect, useRef } from "react";

export default function HomeHero() {

  const backgrounds = [
    `url(${imagetwo})`,
    `url(${imgone})`,
    `url(${imagethree})`,
    `url(${imagefour})`,
    `url(${imagefive})`,
    `url(${imagesix})`,
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");

  const fullSubtitle =
    "wWe design, fabricate, and deliver extraordinary themed entertainment environments across the Middle East — turning imagination into reality.";

  const sectionRef = useRef(null);

  /* Background Slideshow  WORKING AT THE MOMENT */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  /* Scroll Reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
  }, []);

  /* Typing Effect */
  useEffect(() => {
    if (!visible) return;

    let i = 0;
    const speed = 18;

    const type = () => {
      if (i < fullSubtitle.length) {
        setTypedText((prev) => prev + fullSubtitle.charAt(i));
        i++;
        setTimeout(type, speed);
      }
    };

    type();
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[90vh] overflow-hidden transition-all duration-[1500ms] ease-in-out"
      style={{
        backgroundImage: backgrounds[currentBg],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        {/* Title */}
        <h1
          className={`h1-3d-extrude text-white font-oswald font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 
            animate-gentleGlow transition-all duration-1000
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          CREATING IMMERSIVE EXPERIENCES
        </h1>

        {/*this is our subtittl below the h1 that is typed with an animation*/}
        <p
          className={`text-gray-200 text-lg sm:text-xl max-w-2xl min-h-[90px] mb-10 leading-relaxed 
            transition-all duration-1000 delay-200
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {typedText}
        </p>

        {/* Buttons  get in tuch will take us to fotter , doscover more willtaker us to services section*/}
        <div
          className={`flex gap-4 flex-col sm:flex-row transition-all duration-1000 delay-400
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <a
            href="/services"
            className="group bg-[rgb(166,0,10)] text-white py-3 px-8 rounded-md 
              text-sm font-medium tracking-wide hover:bg-red-700 transition-all shadow-xl
              hover:scale-[1.03] active:scale-[0.97]"
          >
            <span className="inline-block group-hover:translate-x-1 transition-all duration-300">
              DISCOVER OUR WORK →
            </span>
          </a>

          <a
            href="/contact"
            className="group border border-[rgb(166,0,10)] text-[rgb(166,0,10)] py-3 px-8 rounded-md 
              text-sm font-medium hover:bg-[rgb(166,0,10)] hover:text-white transition-all shadow-xl
              hover:scale-[1.03] active:scale-[0.97]"
          >
            <span className="inline-block group-hover:translate-x-1 transition-all duration-300">
              GET IN TOUCH →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
