import React, { useState, useEffect, useMemo } from "react";
import { Mail, ArrowRight, Facebook, Youtube, Instagram, Twitter, ArrowUp } from "lucide-react";
// tsParticles Imports
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { Logo } from "../assets";
import { motion, AnimatePresence } from "framer-motion"; // Added Framer Motion

import { Link } from "react-router-dom";
export default function XecureFooter() {
  const [email, setEmail] = useState("");
  const [init, setInit] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);



  // 1. Logic to show/hide button based on scroll depth
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Smooth scroll function
const scrollToTop = (e) => {
    // Prevent any bubbling that might interfere
    if (e) e.preventDefault();

    // Force the scroll to happen on the next animation frame
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  };

  // 1. Initialize the particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // 2. Particle configuration (Subtle tech/security look)
  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false }, // Keeps particles inside the footer container
    background: {
      color: { value: "transparent" },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        grab: {
          distance: 340,
          links: { opacity: 0.5 },
        },
      },
    },
    particles: {
      color: { value: "#fff" }, // Indigo/Security Blue
      links: {
        color: "#fff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 60,
      },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

const services = [
  { name: "Deployment & Implementation", url: "/services/deployment-implementation" },
  { name: "Remote Hands & On-Site Technical..", url: "/services/remote-hands-support" },
  { name: "Network Operations & Maintenance", url: "/services/network-operations" },
  { name: "Logistics, Procurement & Asset..", url: "/services/logistics-asset-management" },
  { name: "Testing, Validation & Quality..", url: "/services/testing-quality-assurance" },
  { name: "Secure IT Asset Disposal & Data..", url: "/services/secure-it-disposal" },
  { name: "Project Management & Service..", url: "/services/project-management" },
];

const aboutLinks = [
  { name: "About", url: "/about-us" },
  { name: "Services", url: "/services" },
  { name: "Careers", url: "/careers" },
  { name: "Blog", url: "/blog" },
  { name: "Contact us", url: "/contact-us" }
];


  const contact = [
    { label: "Email", value: "support@immixtechnologies.com" },
    { label: "Phone", value: "+60 17 317 1211" },
    { label: "Address", value: "Singapore - HQ #04-71, Lobby D, Ubi Tech Park, Singapore - 408564." },
  ];
  const socials = [
    { Icon: Facebook },
    { Icon: Twitter },
    { Icon: Youtube },
    { Icon: Instagram },
  ];

  return (
    <footer className="relative w-full text-white bg-[#060915] font-DMmono overflow-hidden">
      
      {/* ── TSPARTICLES LAYER ── */}
      {/* {init && (
        <Particles
          id="tsparticles-footer"
          className="absolute inset-0 z-0 pointer-events-none"
          options={particlesOptions}
        />
      )} */}


      {/* ── SCROLL TO TOP BUTTON ── */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
     onClick={(e) => scrollToTop(e)}
            className="fixed bottom-16 xl:bottom-8 cursor-pointer right-8 z-[99] bg-indigo-600 hover:bg-indigo-500 text-white p-2.5 rounded-lg shadow-lg shadow-indigo-500/20 transition-colors border border-white/10"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── CONTENT WRAPPER (z-10 to stay above particles) ── */}
      <div className="relative z-10 w-11/12 xl:w-10/12 mx-auto">
        
        {/* ── CTA SECTION ── */}
        <div className="relative overflow-hidden border border-dashed border-white/10 ">
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 xl:py-28">
            <h2
              className="text-2xl md:text-4xl font-light text-white mb-5 leading-snug"
              style={{ letterSpacing: "0.02em" }}
            >
              Let's Simplify Your Security
            </h2>
            <p className="text-gray-400 text-sm mb-12 tracking-wider">
              We help organizations stay ahead of threats.
            </p>
            <a
            href="tel:+60 17 317 1211"
              className="font-light tracking-wider bg-primary-1 hover:bg-primary-2 text-indigo-100 text-xs px-5 py-3 rounded-md transition-all duration-200"
            >
             Setup A Discovery Call
            </a>
          </div>
        </div>

        {/* ── FOOTER COLUMNS ── */}
        <div className="border border-dashed border-white/10 bg-[#060915]/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-dashed divide-white/10">

          
          {/* Col 1 — Brand */}
            <div className="px-5 py-10 md:px-8 md:py-12 flex flex-col">
              <div>
                <img className="h-16 object-contain" src={Logo} alt="" />
              </div>

             

              {/* Socials */}
              <div className="flex flex-col items-start justify-between gap-5  md:gap-3 mt-10">
                <span className="text-gray-500 text-xs tracking-wider">
                  FOLLOW US
                </span>
               <div className="flex gap-3 items-center ">
                 {socials.map(({ Icon }, i) => (
                 <a href="#" className="h-10 w-10 rounded-full border border-gray-500 hover:bg-white duration-500 grid place-items-center">
                   <Icon key={i} size={17} className="text-gray-500 cursor-pointer transition-colors" />
                 </a>
                ))}
               </div>
              </div>
            </div>

            {/* Col 1 — About us */}
            <div className="px-5 py-10 md:px-8 md:py-12 flex flex-col items-start justify-center">
              <h3 className="text-white font-medium tracking-widest mb-7 font-Inter">About us</h3>
              <ul className="space-y-4">
                {aboutLinks.map((item) => (
                  <Link to={item.url} key={item} className="flex gap-3 text-gray-500 font-light text-sm hover:text-white cursor-pointer transition-colors">
                    <span className="text-indigo-500 shrink-0 mt-px">•</span>
                    {item.name}
                  </Link>
                ))}
              </ul>
            </div>

        

            

            {/* Col 3 — Contact */}
            <div className="px-5 py-10 md:px-8 md:py-12 flex flex-col items-start justify-start">
              <h3 className="text-white font-medium tracking-widest mb-7 font-Inter">Contact</h3>
              <ul className="space-y-4">
                {contact.map(({ label, value }) => (
                  <li key={label} className="flex gap-3 text-gray-500 font-light text-sm hover:text-white cursor-pointer transition-colors">
                    <span className="text-indigo-500 shrink-0">•</span>
                    <span>
                      <span className="text-gray-500">{label} :</span> {value}
                    </span>
                  </li>
                ))}
              </ul>
            
            </div>

          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="p-5 md:px-10 py-7 border border-dashed border-white/10 bg-[#060915]/60 backdrop-blur-md">
          <div className="flex flex-col-reverse md:flex-row justify-between text-center items-center gap-4 text-xs text-gray-500">
            <p>
              Copyright © 2025 Immix | <a href="https://dostudio.co.in" target="_blank" className="hover:text-indigo-300 cursor-pointer transition-colors">Powered by Dostudio</a>
            </p>
            <div className="flex gap-2">
              <span className="hover:text-indigo-300 cursor-pointer transition-colors">• Disclaimer</span>
              <span className="hover:text-indigo-300 cursor-pointer transition-colors">• Privacy Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}