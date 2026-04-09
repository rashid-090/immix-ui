import React from "react";
import { motion } from "framer-motion"; // Import motion
import {
  Clinet1,
  Clinet2,
  Clinet3,
  Clinet4,
  Clinet5,
  Clinet6,
  Clinet7,
  Clinet8,
  Clinet9,
  Clinet10,
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

const ClientsLogo = [
  Clinet1,
  Clinet2,
  Clinet3,
  Clinet4,
  Clinet5,
  Clinet6,
  Clinet7,
  Clinet8,
  Clinet9,
  Clinet10,
  Clinet1,
  Clinet2,
  Clinet3,
  Clinet4,
  Clinet5,
  Clinet6,
  Clinet7,
  Clinet8,
  Clinet9,
  Clinet10,
];

const DataCenter = () => {
  return (
    <div className="w-full py-20">
      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <div className="p-2 rounded-[5px] w-fit mx-auto mb-5 bg-primary-1/10">
            <h2 className="text-[#3F37FF] tracking-wider font-DMmono uppercase text-[10px]">
              [ Global Data Center Network ]
            </h2>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl capitalize text-center font-Inter text-slate-900 mb-5">
            Performance Across Regions
          </h1>

          <p className="text-center text-sm mb-10 font-DMmono text-gray-500 xl:w-[70%] mx-auto">
            With facilities across major international locations, we provide
            enterprise-grade co-location services designed for uptime, security,
            and scalability. Our network ensures efficient data flow and minimal
            latency for mission-critical operations.
          </p>

          {/* Globe Loacaion */}
          <LoactionGlobe />
        </div>
      </div>
    </div>
  );
};

export default DataCenter;
