import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
} from "lucide-react";
import { headerbg } from "../assets";
import { Link } from "react-router-dom";
import { ContactForm } from "../components";

const Contact = () => {
  const bgImage = headerbg;

  const locations = [
    {
      id: "singapore",
      name: "Singapore",
      address: "#04-71, Lobby D, Ubi Tech Park, Singapore - 408564.",
      phone: "+6017 317 1211",
      email: "support@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7758379244675!2d103.8943715!3d1.3103855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da18104d455555%3A0x6a1a104555555555!2sUbi%20Techpark!5e0!3m2!1sen!2ssg!4v1625000000000!5m2!1sen!2ssg",
    },
    {
      id: "malaysia",
      name: "Malaysia",
      address: "Level 28, G Tower, 199 Jalan Tun Razak, 50400 Kuala Lumpur.",
      phone: "+603 2168 4200",
      email: "my.sales@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.764426466963!2d101.7196!3d3.1592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12f345555%3A0x6a1a104555555555!2sG%20Tower!5e0!3m2!1sen!2smy!4v1625000000000!5m2!1sen!2smy",
    },
    {
      id: "uae",
      name: "UAE",
      address: "Office 1403, JBC 3, Cluster Y, Jumeirah Lake Towers, Dubai.",
      phone: "+971 4 454 2331",
      email: "uae.support@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.25!2d55.14!3d25.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca!2sJLT!5e0!3m2!1sen!2sae!4v1625000000000!5m2!1sen!2sae",
    },
    
    // Add other locations following this pattern
  ];

  const [activeTab, setActiveTab] = useState(locations[0]);

  return (
    <div className="bg-white text-black mt-[73px]">
      {/* --- HERO SECTION --- */}

      <section className="relative h-52 xl:h-60 flex flex-col justify-center overflow-hidden">
        {/* Background Image with Overlay */}

        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${bgImage}')`,

            backgroundAttachment: "fixed", // This creates the "fixed" scroll effect

            backgroundPosition: "bottom",

            backgroundRepeat: "no-repeat",

            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="w-10/12 mx-auto relative text-white ">
          <h2 className="text-3xl md:text-5xl">Talk to Our Experts</h2>

          <div className="mt-3 text-sm md:text-base">
            <span className="font-DMmono">
              <Link to="/" className="hover:text-primary-1">
                Home
              </Link>{" "}
              | Contact Us
            </span>
          </div>
        </div>
      </section>

      <section className="py-10  bg-gray-50">
        <div className="w-11/12 lg:w-10/12 mx-auto">
          {/* TABS CONTAINER */}
          <div className="flex flex-wrap gap-1 bg-primary-yellow overflow-hidden p-2 mb-5 border border-dashed border-gray-200">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setActiveTab(loc)}
                className={`relative px-6 py-4 text-xs rounded-xl font-medium transition-all duration-300 flex-grow md:flex-none uppercase tracking-wider
                  ${activeTab.id === loc.id ? "text-white" : "text-slate-800 hover:bg-black/5"}
                `}
              >
                {activeTab.id === loc.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-1 z-0 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{loc.name}</span>
              </button>
            ))}
          </div>

          {/* CONTENT SECTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-0 shadow-xl  overflow-hidden bg-white border border-slate-100"
            >
              {/* LEFT SIDE: MAP */}
              <div className="lg:col-span-2 h-[400px] lg:h-auto relative group">
                <iframe
                  title={activeTab.name}
                  src={activeTab.mapUrl}
                  className="w-full h-full grayscale-[0.3] contrast-[1.1]"
                  loading="lazy"
                ></iframe>
              </div>

              {/* RIGHT SIDE: INFO BOX */}
              <div className="relative p-5 flex flex-col justify-center text-white min-h-fit xl:min-h-[500px]">
                {/* Background Image Overlay for the Card */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700"
                  style={{ backgroundImage: `url('${bgImage}')` }}
                >
                  <div className="absolute inset-0 bg-[#000000ad] " />
                </div>

                {/* Info Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl mb-5 flex items-center gap-3">
                    <div className="w-2 h-10 bg-primary-yellow rounded-full" />
                    {activeTab.name}
                  </h3>

                  <div className="space-y-1 max-w-sm ">
                    <div className="flex gap-2 items-start">
                      <div className="p-2 bg-primary-yellow text-slate-900 rounded-lg">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <p className=" text-slate-100">
                        {activeTab.address}
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div className="p-2 bg-primary-yellow text-slate-900 rounded-lg">
                        <Phone size={20} className="text-white" />
                      </div>
                      <p className="font-medium">{activeTab.phone}</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div className="p-2 bg-primary-yellow text-slate-900 rounded-lg">
                        <Mail size={20} className="text-white" />
                      </div>
                      <a
                        href={`mailto:${activeTab.email}`}
                        className=" hover:text-primary-yellow transition-colors break-all underline underline-offset-4 decoration-primary-yellow/30"
                      >
                        {activeTab.email}
                      </a>
                    </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex gap-3 mt-10">
                    {[Facebook, Twitter, Linkedin, Globe, Instagram].map(
                      (Icon, idx) => (
                        <button
                          key={idx}
                          className="w-10 h-10 rounded-full border border-white/20 hover:bg-primary-1 cursor-pointer flex items-center justify-center  text-white transition-all duration-300"
                        >
                          <Icon size={18} />
                        </button>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Form */}
      <ContactForm/>

    </div>
  );
};

export default Contact;
