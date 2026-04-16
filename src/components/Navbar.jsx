import { useState, useEffect, useRef } from "react";
import { Logo } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const XecureNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    {
      label: "Services",
      href: "/services",
      subLinks: [
        { label: "Deployment & Implementation", href: "/services/deployment-implementation" },
        { label: "Remote Hands & On-Site Technical Support", href: "/services/remote-hands-support" },
        { label: "Network Operations & Maintenance", href: "/services/network-operations" },
        { label: "Logistics, Procurement & Asset Management", href: "/services/logistics-asset-management" },
        { label: "Testing, Validation & Quality Assurance", href: "/services/testing-quality-assurance" },
        { label: "Secure IT Asset Disposal & Data Destruction", href: "/services/secure-it-disposal" },
        { label: "Project Management & Service Delivery", href: "/services/project-management" },

      ],
    },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    if (isOpen || activeSubmenu !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen, activeSubmenu]);

  // Handle mobile navigation vs toggle
  const handleMobileClick = (link) => {
    if (!link.subLinks) {
      setIsOpen(false);
      navigate(link.href);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 px-4 py-3 z-50"
    >
      <div className="w-[95%] mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 flex-shrink-0 cursor-pointer group">
          <img className="h-11 object-contain" src={Logo} alt="Xecure Logo" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center bg-gray-50/80 border border-gray-100 rounded-2xl px-2 py-1.5 gap-1 relative">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.subLinks && setActiveSubmenu(link.label)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                to={link.href}
                className="px-5 py-2 text-[11px] uppercase text-gray-500 tracking-[0.15em] hover:text-primary-1 transition-all duration-200 rounded-xl hover:bg-white hover:shadow-sm flex items-center gap-1"
              >
                {link.label}
                {link.subLinks && (
                  <svg className={`w-3 h-3 transition-transform duration-200 ${activeSubmenu === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6"/>
                  </svg>
                )}
              </Link>

              <AnimatePresence>
                {link.subLinks && activeSubmenu === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-fit bg-white border border-gray-100 rounded-2xl shadow-xl p-2 z-50"
                  >
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.href}
                        to={sub.href}
                        className="block px-4 text-nowrap py-3 text-[10px] uppercase tracking-widest text-gray-500 hover:text-primary-1 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            to={"/contact-us"}
            className="bg-primary-1 hover:bg-primary-2 active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200"
          >
            GET A QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-xl hover:bg-gray-50 transition-all border border-transparent active:border-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform origin-center ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 transform origin-center ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4 flex flex-col gap-2  mt-4">
              {navLinks.map((link) => (
                <div key={link.label} className="flex flex-col">
                  <div className="flex items-center w-full bg-transparent rounded-xl hover:bg-white transition-all group">
                    {/* Main Link Text - Clicking this navigates to the page */}
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex-grow px-5 py-4 text-xs font-medium text-gray-600 tracking-widest group-hover:text-primary-1"
                    >
                      {link.label}
                    </Link>

                    {/* Submenu Toggle - Only clicking the arrow expands/collapses */}
                    {link.subLinks && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSubmenu(activeSubmenu === link.label ? null : link.label);
                        }}
                        className="px-5 py-4 text-gray-400 hover:text-primary-1 border-l border-gray-100"
                      >
                        <svg className={`w-4 h-4 transition-transform duration-300 ${activeSubmenu === link.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9 6 6 6-6"/>
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu Accordion */}
                  {link.subLinks && (
                    <motion.div
                      initial={false}
                      animate={{ height: activeSubmenu === link.label ? "auto" : 0 }}
                      className="overflow-hidden  flex flex-col gap-1"
                    >
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="px-5 py-3 text-[10px] uppercase text-gray-400 tracking-widest hover:text-primary-1 border-l border-gray-200 ml-2"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <Link
                to={"/contact-us"}
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-primary-1 text-center text-white text-xs font-medium tracking-widest px-6 py-4 rounded-xl transition-all active:scale-95 w-full shadow-md"
              >
                GET A QUOTE
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default XecureNavbar;