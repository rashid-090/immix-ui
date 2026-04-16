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
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.625400420358!2d103.84914!3d1.286433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190bb5fe741b%3A0x3606c1a0a75b2757!2sImmix%20Technologies%20Pte.%20Ltd.!5e0!3m2!1sen!2sin!4v1775820784143!5m2!1sen!2sin",
    },
    {
      id: "malaysia",
      name: "Malaysia",
      address: "Immix Technology SDN 3-3B, Incubartor 3, Technology Park Malaysia, Kuala Lumpur, Malaysia - 57000 Office - 03 8922 3099",
      phone: "+6017 317 1211",
      email: "support@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7968.355649162053!2d101.688899!3d3.046989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4bff706c4801%3A0x2cab8496a4998f23!2sImmix%20Technology%20sdn%20bhd!5e0!3m2!1sen!2sus!4v1775820699158!5m2!1sen!2sus",
    },
    {
      id: "uae",
      name: "UAE",
      address: "B-103, Bin shabeeb Twin tower, Al nahda 1, Dubai.",
      phone: "+6017 317 1211",
      email: "support@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5250.056048070201!2d2.324135!3d48.857676!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2a926bc4ef%3A0x4ac12ec4dd9c22d9!2s250%20B%20Bd%20Saint-Germain%2C%2075007%20Paris%2C%20France!5e0!3m2!1sen!2sin!4v1775820945491!5m2!1sen!2sin",
    },
       {
      id: "sewden",
      name: "Sewden",
      address: "Sibeliusgången 52, lgh 1202 164 76 Kista",
      phone: "+966 55 181 9330",
      email: "support@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.625400420358!2d103.84914!3d1.286433!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190bb5fe741b%3A0x3606c1a0a75b2757!2sImmix%20Technologies%20Pte.%20Ltd.!5e0!3m2!1sen!2sin!4v1775821152023!5m2!1sen!2sin",
    },
       {
      id: "france",
      name: "France",
      address: "250 B, Boulevard Saint Germain, 75007 - Paris",
      phone: "+6017 317 1211",
      email: "info@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4612.534454071519!2d25.271384!3d54.687325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940eef0881ef%3A0xb402edb90040fbbd!2sPam%C4%97nkalnio%20g.%2017%2C%20Vilnius%2C%2001114%20Vilniaus%20m.%20sav.%2C%20Lithuania!5e0!3m2!1sen!2sin!4v1775821252184!5m2!1sen!2sin",
    },
       {
      id: "saudi-arabia",
      name: "Saudi Arabia",
      address: "#308, Salahiya Tower, Al Balad, Jeddah",
      phone: "+6017 317 1211",
      email: "support@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4612.534454071519!2d25.271384!3d54.687325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940eef0881ef%3A0xb402edb90040fbbd!2sPam%C4%97nkalnio%20g.%2017%2C%20Vilnius%2C%2001114%20Vilniaus%20m.%20sav.%2C%20Lithuania!5e0!3m2!1sen!2sin!4v1775821326082!5m2!1sen!2sin",
    },
       {
      id: "japan",
      name: "Japan",
      address: "115-0056, Tokyo-to, Kita-ku, Nishi-ga-oka 1-29-2",
      phone: "+6017 317 1211",
      email: "info@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4612.534454071519!2d25.271384!3d54.687325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940eef0881ef%3A0xb402edb90040fbbd!2sPam%C4%97nkalnio%20g.%2017%2C%20Vilnius%2C%2001114%20Vilniaus%20m.%20sav.%2C%20Lithuania!5e0!3m2!1sen!2sin!4v1775821412788!5m2!1sen!2sin",
    },
       {
      id: "usa",
      name: "USA",
      address: "3422 W 83rd Street, Chicago, IL 60652",
      phone: "+6017 317 1211",
      email: "support@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4612.534454071519!2d25.271384!3d54.687325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940eef0881ef%3A0xb402edb90040fbbd!2sPam%C4%97nkalnio%20g.%2017%2C%20Vilnius%2C%2001114%20Vilniaus%20m.%20sav.%2C%20Lithuania!5e0!3m2!1sen!2sin!4v1775821471488!5m2!1sen!2sin",
    },
       {
      id: "russia",
      name: "Russia",
      address: "Room : 20 , Floor 10, Building 4 , Ryazanskiy рrоsресt 75, Moscow109456",
      phone: "+6017 317 1211",
      email: "support@immixtechnologies.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4612.534454071519!2d25.271384!3d54.687325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940eef0881ef%3A0xb402edb90040fbbd!2sPam%C4%97nkalnio%20g.%2017%2C%20Vilnius%2C%2001114%20Vilniaus%20m.%20sav.%2C%20Lithuania!5e0!3m2!1sen!2sin!4v1775821471488!5m2!1sen!2sin",
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
                className={`relative px-4 xl:px-6 py-2 xl:py-4 text-xs rounded-xl font-medium transition-all duration-300 md:flex-none uppercase tracking-wider
                  ${activeTab.id === loc.id ? "text-white" : "text-slate-800 hover:bg-black/5"}
                `}
              >
                {activeTab.id === loc.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-1 z-0 rounded-md xl:rounded-xl"
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
              <div className="lg:col-span-2 h-[250px] xl:h-full lg:h-auto relative group">
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
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 bg-gradient-to-b from-primary-1 to-primary-2"
                  // style={{ backgroundImage: `url('${bgImage}')` }}
                >
                  {/* <div className="absolute inset-0 bg-[#000000ad] " /> */}
                </div>

                {/* Info Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl mb-5 flex items-center gap-3">
                    <div className="w-2 h-10  rounded-full" />
                    {activeTab.name}
                  </h3>

                  <div className="space-y-3 max-w-sm font-DMmono">
                    <div className="flex gap-2 items-start">
                      <div className="p-2  text-slate-900 rounded-lg">
                        <MapPin size={20} className="text-white" />
                      </div>
                      <p className=" text-slate-100">
                        {activeTab.address}
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div className="p-2  text-slate-900 rounded-lg">
                        <Phone size={20} className="text-white" />
                      </div>
                      <a
                        href={`tel:${activeTab.phone}`}
                        className="transition-colors break-all underline underline-offset-4"
                      >
                        {activeTab.phone}
                      </a>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div className="p-2  text-slate-900 rounded-lg">
                        <Mail size={20} className="text-white" />
                      </div>
                      <a
                        href={`mailto:${activeTab.email}`}
                        className="  transition-colors break-all underline underline-offset-4"
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
