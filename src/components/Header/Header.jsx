import React, { useState } from "react";
import { FaPhone, FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#020230] text-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 w-full max-w-[1300px] mx-auto">
        {/* Logo */}
        <a href="#home" className="hover:opacity-80 transition-opacity">
          <h2 className="font-bold text-2xl">HOSTIT</h2>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-8">
          {["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT "].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="font-semibold text-[16px] relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
          <FaSearch className="text-[16px] cursor-pointer max-lg:hidden hover:opacity-80 transition-opacity" />
          <a
            href="#call"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <FaPhone className="max-lg:hidden" />
            <span className="font-semibold text-[16px] max-lg:hidden">
              CALL: +98073829R898
            </span>
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="hover:opacity-80 transition-opacity"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#020230] w-full absolute left-0 top-16 py-4 z-40">
          <nav className="flex flex-col items-center gap-4">
            {["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT "].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-[16px] relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
            <div className="flex items-center gap-2">
              <FaSearch className="text-[16px] max-lg:hidden" />
              <span className="font-semibold text-[16px] max-lg:hidden">
                Search
              </span>
            </div>
            <a
              href="#call"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <FaPhone className="max-lg:hidden" />
              <span className="font-semibold text-[16px] max-lg:hidden">
                CALL: +98073829R898
              </span>
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
