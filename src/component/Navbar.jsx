"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { GoHome } from "react-icons/go";
import { BsStars } from "react-icons/bs";
import { PiVideoCamera } from "react-icons/pi";

const Li = ({ children, className }) => {
  return (
    <li
      className={`text-black  font-inter cursor-pointer hover:text-[#00AEEF] transition-colors duration-300 ${className}`}
    >
      {children}
    </li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-[5%] rounded-full md:border md:border-[#006489]/40 md:bg-white/20 md:backdrop-blur-sm fixed top-4 left-1/2 -translate-x-1/2 w-[90%] z-50">
      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-between w-[50%] py-2.5">
        <Li>Home</Li>
        <Li>Features</Li>
        <Li>Video Chat</Li>
        <Li>Pricing</Li>
        <Li>FAQ</Li>
        <Li>Blog</Li>
      </ul>

      {/* Right Side (Join + Theme Toggle) */}
      <div className="flex  items-center gap-3 w-full md:w-auto">
        <div className="bg-white p-[1px] rounded-full hidden md:block">
          <button className="bg-[#0F172B] px-6 py-2.5 rounded-full hover:bg-[#314D91] transition-all duration-300 cursor-pointer text-white dar:text-black">
            JOIN
          </button>
        </div>
        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center justify-between w-full">
          <button
          className="md:hidden text-3xl text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <ThemeToggle />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-[50%] bg-white/90 darkbg-[#0F172B]/90 backdrop-blur-md py-15 flex flex-col items-center gap-6 shadow-lg md:hidden transition-all duration-300">
          <ul className="flex flex-col gap-5">
            <Li className="flex flex-col items-center">
              <GoHome className="h-6 w-6" />
              Home
            </Li>
            <Li className="flex flex-col items-center">
              <BsStars className="h-6 w-6" />
              Features
            </Li>

            <Li className="flex flex-col items-center">
              <PiVideoCamera className="h-6 w-6" />
              Video Chat</Li>
          </ul>
          <button className="bg-[#0F172B] px-6 py-2.5 rounded-full hover:bg-[#314D91] transition-all duration-300 cursor-pointer text-white drk:text-black">
            JOIN
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
