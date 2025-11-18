import React, { useEffect } from "react";


import AOS from 'aos';
import 'aos/dist/aos.css';

export default function JoinOurTeam() {
     useEffect(() => {
              AOS.init();
            }, [])
  return (
    <section className="min-h-screen bg-[#c8d0d4] flex items-center justify-center px-4 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        {/* Left copy & button */}
        <div className="md:w-1/4 space-y-6">
          <p className="text-xs font-medium leading-relaxed text-gray-900" data-aos="fade-left" data-aos-duration="1000">
           
            Passionate, skilled, and ready to make an impact? Join us to innovate, collaborate, and thrive in a dynamic team dedicated to excellence.
          </p>

          <button className="inline-flex items-center gap-3 bg-[#A6000A] px-6 py-3 text-sm font-semibold text-white shadow-md transform duration-300 hover:bg-gray-700" data-aos="fade-right" data-aos-duration="1000">
            <span>FIND A OPEN POSITION</span>
           
          </button>
        </div>

        {/* Right main graphic / text */}
        <div className="relative md:w-3/4">
          {/* Top row: orange arrow + "build" + up-right icon & dots */}
          <div className="flex items-center gap-6">
            {/* Orange arrow circle */}
            <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#ff7843]" data-aos="fade-down" data-aos-duration="1000">
              <div className="absolute left-4 h-6 w-6 rounded-full border-4 border-black" />
              <div className="h-1 w-10 translate-x-3 bg-black" />
              <div className="absolute right-5 h-0 w-0 border-y-[6px] border-y-transparent border-l-12 border-l-black" />
            </div>

            <span className="text-5xl font-black tracking-tight text-[#161616] md:text-7xl" data-aos="fade-left" data-aos-duration="1000">
              INTERESTED IN 
            </span>

            {/* Up-right arrow & small dots */}
            <div className="ml-3 flex flex-col items-start gap-3" data-aos="fade-up" data-aos-duration="1000">
              <span className="text-3xl md:text-4xl font-black text-[#161616]">
                ↗
              </span>
              <div className="flex items-center gap-3">
                <span className="h-7 w-7 rounded-full bg-[#4b7cff]" />
                <span className="text-3xl font-black text-[#161616]">×</span>
                <span className="h-7 w-7 rounded-full bg-[#2eb267]" />
              </div>
            </div>
          </div>

          {/* "beautiful" */}
          <div className="mt-4">
            <span className="text-6xl font-black leading-[1.05] tracking-tight text-[#161616] md:text-8xl" data-aos="fade-left" data-aos-duration="1000">
              JOINING 
            </span>
          </div>

          {/* Middle row: shapes + "product" */}
          <div className="mt-6 flex items-center gap-6">
            {/* Purple / green half circles */}
            <div className="flex h-32 w-32 overflow-hidden rounded-[999px]" data-aos="fade-down" data-aos-duration="1000">
              <div className="h-full w-1/2 bg-[#a352e6]" />
              <div className="h-full w-1/2 bg-[#2fb36d]" />
            </div>

            <span className="text-6xl font-black tracking-tight text-[#161616] md:text-8xl" data-aos="fade-right" data-aos-duration="1000">
              O
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[6px] border-[#161616] text-3xl align-middle">
                <span className="h-2 w-2 rounded-full bg-[#161616]" />
              </span>
              UR
            </span>

            {/* Yellow speech bubble thing */}
            <div className="hidden h-28 flex-1 items-center rounded-[60px] bg-[#f2b438] pl-10 pr-6 md:flex" data-aos="fade-left" data-aos-duration="1000">
              <div className="flex h-14 flex-1 items-center rounded-[999px] bg-[#ff7843] px-6">
                <div className="h-2 w-2 rounded-full bg-black" />
                <div className="mx-3 h-[3px] flex-1 bg-black" />
                <div className="h-2 w-2 rounded-full bg-black" />
              </div>
              <div className="ml-4 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <div className="h-7 w-7 rounded-full border-[5px] border-black" />
              </div>
            </div>
          </div>

          {/* Bottom: "faster" + underline + flags */}
          <div className="mt-6 flex items-end gap-6">
            <div data-aos="fade-left" data-aos-duration="1000">
              <span className="text-6xl font-black tracking-tight text-[#161616] md:text-8xl" >
                TEAM
              </span>
              <div className="mt-3 h-2 w-[260px] rounded-full bg-[#161616]" />
            </div>

            <div className="ml-auto flex items-end gap-0.5" data-aos="fade-up" data-aos-duration="1000">
              <div className="h-24 w-24 bg-[#ff7843]" />
              <div className="h-24 w-24 bg-[#4b7cff]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
