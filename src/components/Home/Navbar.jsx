import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../../assets/react.webp";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="w-screen px-6 py-4 bg-transparent text-white flex justify-between items-center">

      {/* Logo */}
      <Link to="/" className="text-lg font-bold">
        <img src={logo} alt="" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <div className="relative bg-black/40 backdrop-blur-md px-2 py-1 rounded-full flex gap-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setActive(item.name)}
              className="relative z-10 px-4 py-2 rounded-full font-medium"
            >
              {active === item.name && (
                <motion.div
                  layoutId="highlight"
                  className="absolute inset-0 bg-gray-800 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Get Yours Button */}
      <Link
        to="/get"
        className="hidden md:block bg-gray-600 text-white font-semibold px-5 py-2 rounded-full"
      >
        Get Yours
      </Link>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden  flex flex-col gap-1 relative w-8 h-8"
        onClick={() => setOpen(!open)}
      >
        <motion.span
          animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-8 h-[3px] bg-black block rounded"
        ></motion.span>

        <motion.span
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="w-8 h-[3px] bg-black block rounded"
        ></motion.span>

        <motion.span
          animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-8 h-[3px] bg-black block rounded"
        ></motion.span>
      </button>

      {/* Mobile Menu Drawer */}
     {open && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className="absolute left-0 top-[70px] w-full mt-5 bg-gray-900 p-6 flex flex-col gap-3 md:hidden z-50"
  >
    {menuItems.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        onClick={() => {
          setActive(item.name);
          setOpen(false);
        }}
        className="relative px-4 py-3 rounded-xl text-left text-lg font-semibold z-10"
      >
        {active === item.name && (
          <motion.div
            layoutId="highlight"
            className="absolute inset-0 bg-gray-800 rounded-xl z-0 pointer-events-none"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}
        <span className="relative z-10">{item.name}</span>
      </Link>
    ))}

    <Link
      to="/get"
      onClick={() => setOpen(false)}
      className="bg-white text-black font-semibold px-5 py-3 rounded-full mt-2 z-10"
    >
      Get Yours
    </Link>
  </motion.div>
)}

    </nav>
  );
}