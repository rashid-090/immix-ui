import React, { useEffect, useState } from 'react'
import {
    Clinet1,Clinet2,Clinet3,Clinet4,Clinet5,Clinet6,Clinet7,Clinet8,Clinet9,Clinet10,Clinet11,Clinet12,Clinet13,Clinet14,Clinet15,Clinet16,Clinet17,Clinet18,Clinet19,Clinet20,Clinet21,Clinet22,Clinet23,Clinet24,Clinet25,Clinet26,

} from "../assets";
import Marquee from "react-fast-marquee";

const ClientsLogo = [
      Clinet1,Clinet2,Clinet3,Clinet4,Clinet5,Clinet6,Clinet7,Clinet8,Clinet9,Clinet10,Clinet11,Clinet12,Clinet13,Clinet14,Clinet15,Clinet16,Clinet17,Clinet18,Clinet19,Clinet20,Clinet21,Clinet22,Clinet23,Clinet24,Clinet25,Clinet26,

]

const OurClients = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div>
      {/* Collaborated with Trusted */}
      <div className="w-11/12 mx-auto mb-20">
        <p className="font-DMmono text-center text-gray-500">
          Collaborated with Trusted<br className="md:hidden"/> Partners Worldwide
        </p>

        <Marquee
          className="mt-5"
          gradient={!isMobile}   // 👈 disable on mobile
          speed={40}
          pauseOnHover={true}
        >
          {ClientsLogo.map((logo, index) => (
            <div className='overflow-hidden'>
                <img
              key={index}
              className="h-20 md:h-28 mx-2 md:mx-5 object-contain hover:scale-110 transition-transform duration-300"
              src={logo}
              alt={`Client ${index + 1}`}
            />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default OurClients;