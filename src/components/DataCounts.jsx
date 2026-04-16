import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const DataCounts = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check window width to disable gradient on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the standard 'md' breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const stats = [
    { label: "Years of Expertise", value: "15+" },
    { label: "Countries Support", value: "40+" },
    { label: "Data Centers Covered", value: "250+" },
    { label: "Tickets Every Year", value: "10,000+" },
    { label: "Deployments Every Year", value: "500+" },
    { label: "RMA’s Yearly", value: "4,000+" },
    { label: "In-Countries Secured Storage", value: "10+" },
  ];

  return (
    <div className="py-5 xl:py-10 bg-black border-y border-dashed border-gray-800">
      <Marquee gradient={!isMobile} gradientColor="#000" speed={50} pauseOnHover={true}>
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 mx-10 xl:mx-16 group"
          >
            <div className='flex flex-col items-center justify-center text-center gap-3'>
                {/* Value */}
            <span className="text-center text-3xl md:text-5xl font-Inter text-white group-hover:text-indigo-500 transition-colors duration-300">
              {stat.value}
            </span>
            
            {/* Label */}
            <span className="text-xs md:text-sm text-gray-400 group-hover:text-indigo-500 text-nowrap capitalize tracking-widest leading-tight w-full">
              {stat.label}
            </span>
            </div>

            {/* Decorative Divider (Except for last item in the list) */}
            {/* <div className="ml-10 h-10 w-[1px] bg-red-500 hidden md:block" /> */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default DataCounts;