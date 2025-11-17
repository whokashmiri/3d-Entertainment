
import { useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AboutUs() {

useEffect(() => {
        AOS.init();
      }, [])

  const topImages = [
    "https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg",
    "https://images.pexels.com/photos/5870407/pexels-photo-5870407.jpeg",
    "https://images.pexels.com/photos/22669860/pexels-photo-22669860.jpeg",
    "https://images.pexels.com/photos/6982474/pexels-photo-6982474.jpeg",
  ];

  const bottomImages = [
    "https://images.pexels.com/photos/3917729/pexels-photo-3917729.jpeg",
    "https://images.pexels.com/photos/7991238/pexels-photo-7991238.jpeg",
    "https://images.pexels.com/photos/2253046/pexels-photo-2253046.jpeg",
    "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg",
    "https://images.pexels.com/photos/3917729/pexels-photo-3917729.jpeg",
  ];




  return (

    <section className="w-full py-20 border border-gray-300 mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT SIDE - CAROUSEL IMAGES */}
        <div className="relative w-full">

          {/* Top Row Carousel */}
          <div className="overflow-hidden mb-3">
            <div className="flex animate-slide-left gap-3 hover:pause">
              {[...topImages, ...topImages].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="h-40 w-auto object-cover rounded"
                />
              ))}
            </div>
          </div>

          {/* Bottom Row Carousel */}
        <div className="overflow-hidden mt-3">
  <div className="flex animate-slide-right gap-3 hover:pause">
    {[...bottomImages, ...bottomImages].map((src, i) => (
      <img
        key={i}
        src={src}
        className="h-40 w-auto object-cover rounded"
      />
    ))}
  </div>
</div>


          {/* Bottom Label */}
          <div className="mt-6 shadow-lg bg-green-800 p-4 text-center font-semibold" data-aos="fade-down" data-aos-duration="1000">
           <p className="text-white">  BEST CUSTOM DESIGN AND FABRICATION COMPANY IN MIDDLE EAST</p>
          </div>
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="flex flex-col justify-center">
          <p className="uppercase text-sm tracking-widest font-bold mb-3">
            ABOUT US
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Crafting Your Vision <br />
            Through Custom Design <br />
            and Fabrication
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            3D Entertainment is becoming the one and only leading custom design
            and fabrication company in the Middle East. Created a wide variety
            of props for film & amusement, entertainment venues, facades, murals
            and retail businesses of all sizes.
          </p>

          <button className="bg-red-600 hover:bg-red-700 transition text-white font-semibold px-6 py-3  w-fit">
            DISCOVER MORE
          </button>
        </div>

      </div>
    </section>
  );
}



