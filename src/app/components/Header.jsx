"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center bg-[#D9D9D9] py-6 px-4 md:px-12">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col items-center mr-3">
            <div className="bg-[#0A2640] w-4 h-3 mb-1 rounded-tr-xl rounded-br-xl" />
            <div className="bg-[#0A2640] w-6 h-4 rounded-tr-xl rounded-br-xl" />
          </div>
          <span className="text-[#0A2640] text-3xl md:text-4xl font-bold">
            Boldo
          </span>
        </div>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden text-[#0A2640]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu (desktop) */}
        <div className="hidden md:flex items-center gap-10">
          <span className="text-[#0A2640] cursor-pointer text-base md:text-lg font-bold hover:text-[#1C1C1C] hover:underline transition-transform transform hover:scale-105">
            Product
          </span>
          <span className="text-[#0A2640] cursor-pointer text-base md:text-lg font-bold hover:text-[#1C1C1C] hover:underline transition-transform transform hover:scale-105">
            Services
          </span>
          <span className="text-[#0A2640] cursor-pointer text-base md:text-lg font-bold hover:text-[#1C1C1C] hover:underline transition-transform transform hover:scale-105">
            About
          </span>
          <button
            onClick={() => alert("Pressed!")}
            className="px-6 py-2 rounded-full cursor-pointer border-2 border-[#0A2640] text-[#0A2640] font-bold hover:bg-[#0A2640] hover:text-white transition"
          >
            Log In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#D9D9D9] px-4 py-4 flex flex-col items-start gap-4">
          <span className="text-[#0A2640] cursor-pointer text-base font-bold hover:text-[#1C1C1C] hover:underline transition-transform transform hover:scale-105">
            Product
          </span>
          <span className="text-[#0A2640] cursor-pointer text-base font-bold hover:text-[#1C1C1C] hover:underline transition-transform transform hover:scale-105">
            Services
          </span>
          <span className="text-[#0A2640] cursor-pointer text-base font-bold hover:text-[#1C1C1C] hover:underline transition-transform transform hover:scale-105">
            About
          </span>
          <button
            onClick={() => {
              alert("Pressed!");
              setIsOpen(false);
            }}
            className="mt-2 px-6 cursor-pointer py-2 rounded-full border-2 border-[#0A2640] text-[#0A2640] font-bold hover:bg-[#0A2640] hover:text-white transition"
          >
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
