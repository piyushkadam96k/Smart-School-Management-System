"use client";
import { useState, useEffect } from "react";
import { FaSchool, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "nav-scrolled"
          : "bg-[#05070f]/85 backdrop-blur-xl border-b border-white/[0.08]"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-3 sm:px-8 py-3 sm:py-5 flex items-center justify-between gap-2 overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-1.5 sm:gap-4 flex-shrink-0">
          <div className="w-7 h-7 sm:w-11 sm:h-11 bg-gradient-to-br from-[#00d4ff] to-[#00ff9d] rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg shadow-[#00d4ff]/25 flex-shrink-0">
            <FaSchool className="text-sm sm:text-2xl text-black" />
          </div>
          <div className="text-lg sm:text-4xl font-semibold tracking-tight whitespace-nowrap">
            Shala<span className="text-[#00d4ff]">Connect</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-medium">
          <a href="#features" className="hover:text-[#00d4ff] transition-colors">Features</a>
          <a href="#how" className="hover:text-[#00d4ff] transition-colors">How it Works</a>
          <a href="#why" className="hover:text-[#00d4ff] transition-colors">Why Us</a>
        </div>

        {/* Right: Demo button + Hamburger */}
        <div className="flex items-center gap-1 sm:gap-3 flex-shrink-0">
          <a
            href="https://wa.me/917829396954?text=Hello%20ShalaConnect%20Team%2C%20I%20would%20like%20a%20free%20demo%20and%20pricing%20information%20for%20my%20school"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button px-2.5 py-1.5 sm:px-7 sm:py-3.5 bg-[#00ff9d] text-black font-semibold rounded-lg sm:rounded-3xl flex items-center gap-1 shadow-lg shadow-[#00ff9d]/30 text-[10px] sm:text-sm whitespace-nowrap"
          >
            <FaWhatsapp className="text-xs sm:text-xl" />
            <span className="inline">Free Demo</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-lg text-gray-300 hover:text-white focus:outline-none p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0a0f1c] border-t border-white/10`}
      >
        <div className="flex flex-col">
          <a href="#features" onClick={closeMenu} className="py-4 px-6 text-center hover:bg-white/5 transition-colors border-b border-white/5 text-sm font-medium">
            Features
          </a>
          <a href="#how" onClick={closeMenu} className="py-4 px-6 text-center hover:bg-white/5 transition-colors border-b border-white/5 text-sm font-medium">
            How it Works
          </a>
          <a href="#why" onClick={closeMenu} className="py-4 px-6 text-center hover:bg-white/5 transition-colors text-sm font-medium">
            Why Us
          </a>
        </div>
      </div>
    </nav>
  );
}
