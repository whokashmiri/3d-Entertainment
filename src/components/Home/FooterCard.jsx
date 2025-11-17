// FooterCard.jsx
import {  useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FooterCard() {
    useEffect(() => {
                  AOS.init();
                }, [])
    let date = new Date();
    let currentyear = date.getFullYear();
  return (
    <section className="relative bg-[#f5f5f7] py-14 md:py-24 overflow-hidden">
     

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Main card */}
        <div className="rounded-4xl bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] px-6 py-10 md:px-12 md:py-12">
          {/* Top content row */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            {/* Left: logo, description, socials */}
            <div className="md:max-w-md">
              {/* Logo row */}
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#A6000A]">
                  <span className="text-sm font-bold text-white">3D</span>
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  3D Entertainment
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                3D Entertainment empowers teams to transform raw data into clear,
                compelling visuals — making insights easier to share,
                understand, and act on.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex items-center gap-4 text-gray-700">
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs">
                  X
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs">
                  IG
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs">
                  in
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-xs">
                  GH
                </button>
              </div>
            </div>

            {/* Right: link columns */}
            <div className="grid flex-1 gap-8 text-sm text-gray-600 grid-cols-2 md:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold text-gray-900">Product</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Resources
                </h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900">Company</h4>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-gray-900">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-gray-200" />

          {/* Bottom row */}
          <div className="mt-6 flex flex-col gap-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentyear} 3D Entertainment. All rights reserved.</p>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="#" className="hover:text-gray-700 underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 underline">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-700 underline">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>


       {/* Big faint text in the background */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 sm:-bottom-2 md:-bottom-8 lg:-bottom-20 flex justify-center opacity-5 sm:opacity-7 md:opacity-7 lg:opacity-7">
        <p className="select-none text-[2rem] sm:text-[2.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] font-extrabold tracking-tight text-gray-900" data-aos="fade-right">
          3D ENTERTAINMENT
        </p>
      </div>
    </section>
  );
}
