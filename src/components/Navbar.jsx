import { useState, useEffect, useRef } from "react";
import { Logo } from "../assets";
import { Link } from "react-router-dom";

const XecureNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ];

  // Logic to detect clicks outside of the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-sm border-b border-gray-200 px-4 py-3 z-50"
    >
      <div className="w-[95%] mx-auto flex items-center justify-between">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 cursor-pointer group">
          <img className="h-11 object-contain" src={Logo} alt="Xecure Logo" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center bg-gray-50/80 border border-gray-100 rounded-2xl px-2 py-1.5 gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-5 py-2 text-[11px] uppercase text-gray-500 tracking-[0.15em] hover:text-primary-1 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to={'/contact-us'}
            className="bg-primary-1 hover:bg-primary-2 active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl hover:bg-gray-50 transition-all border border-transparent active:border-gray-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform origin-center ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform origin-center ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex flex-col gap-2 shadow-xl shadow-gray-100/50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="px-5 py-4 text-xs font-medium text-gray-600 tracking-widest hover:text-primary-1 hover:bg-white rounded-xl transition-all duration-200 border border-transparent hover:border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
              <Link to={'/contact-us'}
              onClick={() => setIsOpen(false)}
            className="mt-4 bg-primary-1 text-center text-white text-xs font-medium tracking-widest px-6 py-4 rounded-xl transition-all active:scale-95 w-full shadow-md"
          >
            GET A QUOTE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default XecureNavbar;