import React from "react";
import { motion } from "framer-motion"; // Import motion
import {
  Clinet1,
  fasterconnection,
  highsecurity,
  resilience,
  seamlessconnection,
} from "../assets";
import Marquee from "react-fast-marquee";
import LoactionGlobe from "./LoactionGlobe.jsx";


const coLocationData = [
  { id: 1, title: "High security", img: highsecurity },
  { id: 2, title: "Faster connection", img: fasterconnection },
  { id: 3, title: "Resilience", img: resilience },
  { id: 4, title: "Seamless interconnection", img: seamlessconnection },
];

const logoArray = Array(20).fill(Clinet1);

const DataCenter = () => {
  return (
    <div className="w-full py-20">
      <div className="w-11/12 md;w-10/12 mx-auto">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="p-2 rounded-[5px] w-fit mx-auto mb-5 bg-primary-1/10">
            <h2 className="text-[#3F37FF] tracking-wider font-DMmono uppercase text-[10px]">
              [ Data Center ]
            </h2>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl capitalize font-Inter text-slate-900 mb-5">
            Co-location
          </h1>

          <p className="text-center text-sm mb-10 font-DMmono text-gray-500 xl:w-[70%] mx-auto">
            Our co-location services provide secure, reliable, and globally
            connected data center support, enabling seamless infrastructure
            deployment and migration with minimal downtime
          </p>

          {/* Globe Loacaion */}
          <LoactionGlobe/>
        </div>

        {/* Collaborated with Trusted  */}
        <div className="mt-20">
          <p className="font-DMmono text-center text-gray-500 ">
            Collaborated with Trusted<br className="md:hidden"/> Partners Worldwide
          </p>
          <Marquee className="mt-5" gradient={false} speed={40} pauseOnHover={true}>
            {logoArray.map((logo, index) => (
              <img
                key={index}
                className="h-14 md:h-20 mx-2 md:mx-5 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                src={logo}
                alt={`Client ${index + 1}`}
              />
            ))}
          </Marquee>
          {/* <Marquee direction="right" className="" gradient={false} speed={40} pauseOnHover={true}>
            {logoArray.map((logo, index) => (
              <img
                key={index}
                className="h-20 mx-5 object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                src={logo}
                alt={`Client ${index + 1}`}
              />
            ))}
          </Marquee> */}
        </div>
      </div>
    </div>
  );
};

export default DataCenter;
