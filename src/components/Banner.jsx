import { useEffect, useState } from "react";
import { Homeicon, Shape1, videoglobe } from "../assets";
import { Link } from "react-router-dom";

export default function CyberBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* -------- Banner Section -------- */}
      <div className="relative w-full h-[90vh] md:min-h-screen bg-[#f4f4f4] flex flex-col items-center  overflow-hidden">
        <div
          className={`pt-32 md:pt-40 relative z-10 flex flex-col items-center px-6 text-center transition-all duration-1000 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1/2"
          }`}
        >
          {/* Headline */}
          <div className="p-2 rounded-[5px] mb-5 bg-primary-1/10">
            <h2 className="text-[#3F37FF] tracking-wider font-DMmono uppercase text-[10px]">
              [ Smarter Data Center Solutions ]
            </h2>
          </div>
          <h1 className="text-4xl md:text-7xl capitalize font-Inter text-slate-900 ">
            Secure & Scalable <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-1 to-primary-2">
              Data Center Solutions
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-8 text-slate-700 max-w-xl text-sm md:text-base font-light font-DMmono leading-relaxed">
           Supporting next-generation infrastructure including AI farms, GPU clusters, and high-performance computing environments across global data centers.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex  items-center gap-5">
            <Link to={'/about-us'} className="bg-primary-1 hover:bg-primary-2 active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200">
              GET STARTED
            </Link>

            <Link to={'/contact-us'} className="border border-gray-300 bg-white hover:bg-primary-2 hover:text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200">
              GET A QUOTE
            </Link>
          </div>
        </div>

        {/* -------- Video Section (Below Banner) -------- */}
        <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 w-full flex justify-center">
          <video
            src={videoglobe}
            poster="../assets/images/bannbgpos.webp"
            autoPlay
            loop
            muted
            playsInline
            className="w-full opacity-50"
          />
        </div>
      </div>
    </>
  );
}
