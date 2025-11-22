// ContactSection.jsx
import { useEffect, useRef } from "react";
import rough from "roughjs/bundled/rough.esm.js";

export default function GetInTouch() {
  const circleRef = useRef(null);
const textRef = useRef(null);

useEffect(() => {
  const svg = circleRef.current;
  const text = textRef.current;

  // Get text width & height
  const rect = text.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;

  // Clear previous drawings
  svg.innerHTML = "";

  const rc = rough.svg(svg);

  // Draw ellipse around text
  const ellipse = rc.ellipse(
    width / 2,
    height / 2,      // center
    width * 1.4,      // width a bit larger than text
    height * 1.4,     // height a bit larger than text
    {
      stroke: "#A6000A",
      strokeWidth: 6,
      roughness: 2.5,
      bowing: 3,
    }
  );

  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.appendChild(ellipse);


}, []);


  return (
    <section className="bg-black text-white py-24 px-6 md:px-16 lg:px-24 font-[Inter]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-[10vw] md:text-[6vw] font-light leading-[0.9]">
            Get In
          </h1>

         <div className="relative inline-block mt-4">
  {/* The word */}
  <h2
    ref={textRef}
    className="text-[16vw] md:text-[9vw] italic font-serif leading-[0.8] inline-block relative"
  >
    Touch
  </h2>

  {/* Circle — now fits the text width */}
  <svg
    ref={circleRef}
    className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
    style={{ overflow: "visible" }}
  />
</div>


          <div className="mt-16 flex items-start gap-3">
            <span className="h-3 w-3 animate-ping rounded-full bg-[#A6000A] mt-1"></span>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              You have something in your mind ? Let's make it Happen, so let’s chat!
            </p>
          </div>

          {/* Footer Social Links */}
          <div className="mt-16 flex gap-10 text-gray-400 text-sm tracking-wide">
            <a href="#" className="hover:text-white">instagram</a>
            <a href="#" className="hover:text-white">linkedin</a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center gap-12">

          {/* Email Row */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500 mb-2">
              drop us a line
            </p>

            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <a href="info@3dentertainmentksa.com"  className="text-2xl  md:text-3xl">
                info@3dentertainmentksa.com
              </a>
              <span className="text-3xl text-gray-500 hover:text-white animate-pulse cursor-pointer">
                →
              </span>
            </div>
          </div>

          {/* Phone Row */}
          <div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <p className="text-2xl md:text-3xl">+966 122 751 997</p>
              <span className="text-3xl text-gray-500 animate-pulse hover:text-white cursor-pointer">
                →
              </span>
            </div>
          </div>

           <div>
            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
              <p className="text-2xl md:text-3xl">+966 537 399 808</p>
              <span className="text-3xl text-gray-500 animate-pulse hover:text-white cursor-pointer">
                →
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
