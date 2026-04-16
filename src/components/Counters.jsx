import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import hours from '../assets/images/count/24-7.svg'
import ior from '../assets/images/count/service.svg'
import secure from '../assets/images/count/secure.svg'
import local from '../assets/images/count/language.svg'
import ewaste from '../assets/images/count/e-waste.svg'

const stats = [
  { sicon: hours, suffix: "24/7", label: "Remote Hands and Eyes Support" },
  { sicon: ior, suffix: "IOR", label: "Importer Of Record Services" },
  { sicon: secure, suffix: "SECURE", label: "Inventory Management & Storage Services" },
  { sicon: local, suffix: "LOCAL", label: "Local Language Liaising Support" },
  { sicon: ewaste, suffix: "E-WASTE", label: "Disposal & Data Destruction" },
];

const StatItem = ({ sicon, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-black"
    >
      <div className="flex flex-col items-center w-full">
        <div className="mb-3 border border-dashed p-3 border-gray-300 rounded-lg">
          <img src={sicon} alt={suffix} className="w-10 h-10 md:w-14 md:h-14 object-contain" />
        </div>
      </div>
      <p className="mt-4 text-gray-500 text-[10px] md:text-xs uppercase tracking-widest text-center leading-tight px-2">
        {label}
      </p>
    </motion.div>
  );
};

const Counters = () => {
  return (
    <section className="bg-white w-full py-14">
      <div className="w-11/12 xl:w-10/12 py-10  border border-dashed border-gray-200 mx-auto rounded-xl">
        
        {/* --- DESKTOP VIEW (Visible from md up) --- */}
        <div className="hidden md:grid md:grid-cols-5 gap-5">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>

        {/* --- MOBILE VIEW (Visible below md) --- */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="pb-10" // Space for pagination dots
          >
            {stats.map((stat, index) => (
              <SwiperSlide key={index}>
                <StatItem {...stat} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>

      {/* Optional: Simple CSS to style Swiper pagination if needed */}
     {/* Add this at the bottom of your Counters component */}
<style jsx global>{`
  /* This targets the container holding the dots */
  .swiper-pagination {
    position: relative !important; /* Changes from absolute to relative */
    margin-top: 30px !important;   /* This is your Margin Top */
    bottom: 0 !important;
  }

  .swiper-pagination-bullet-active {
    background: #4f46e5 !important; 
  }
`}</style>
    </section>
  );
};

export default Counters;