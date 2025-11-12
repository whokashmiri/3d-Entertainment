import { useState } from "react";
import logo3d from "../../assets/react.webp";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* 🔝 Top Info Bar (hidden on small screens) */}
      <div className="hidden lg:flex bg-white text-gray-700 text-sm justify-between items-center px-8 py-2 border-b">
        <div className="flex items-center gap-8 ml-16 mt-2">
          {/* Location */}
          <div className="flex items-center gap-2 ">
            <FaMapMarkerAlt className="text-[rgb(166,0,10)]" />
            <span>Jeddah, Saudi Arabia</span>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[rgb(166,0,10)]" />
            <a
              href="tel:+966122614100"
              className=""
            >
              +966 122 614 100
            </a>
            <span>,</span>
            <a
              href="tel:+966505622994"
              className=""
            >
              +966 505 622 994
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[rgb(166,0,10)]" />
            <a
              href="mailto:hummam@3dentertainmentksa.com"
              className=""
            >
              hummam@3dentertainmentksa.com
            </a>
          </div>
        </div>
      </div>

      {/* 🧭 Main Navbar */}
      <nav className="flex flex-wrap items-center justify-between px-8 py-3">
        {/* Logo */}
        <a href="/home" className="flex items-center ml-16">
          <img src={logo3d} alt="Company Logo" className="h-12 sm:h-14" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-sm text-gray-800">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <a
                href={link.href}
                className=" font-oswald transition-colors duration-300"
              >
                {link.name}
              </a>
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Social Icons (Right side for large screens only) */}
        <div className="hidden lg:flex flex-col items-start mr-16 text-black">
          <span className="font-semibold mb-1">Follow Us :</span>
          <div className="flex gap-2">
            {[
              { Icon: FaFacebookF, href: "https://facebook.com" },
              { Icon: FaTwitter, href: "https://twitter.com" },
              { Icon: FaLinkedinIn, href: "https://linkedin.com" },
              { Icon: FaYoutube, href: "https://youtube.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1.5px] border-[rgb(166,0,10)] p-2  hover:bg-blue-300 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Burger Menu for Small Screens */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            className="flex flex-col justify-center items-center gap-1.5 p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span
              className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-black transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* 📱 Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t text-center font-medium text-gray-700 animate-slideDown">
          <ul className="flex flex-col py-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-2 hover:text-red-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
