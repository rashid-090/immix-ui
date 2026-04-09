import React from 'react';
import { BIGDATA, CDN } from '../assets';

const Industries = () => {
  return (
    <div className="bg-white w-full py-20 text-slate-900">
       <div className="text-center mb-10 pointer-events-auto">
          <div className="p-2 rounded-[5px] w-fit mx-auto mb-5 bg-primary-1/10">
            <h2 className="text-[#3F37FF] tracking-wider font-DMmono uppercase text-[10px]">
              [ Immix Technology ]
            </h2>
          </div>
          <h1 className="text-3xl md:text-5xl capitalize font-Inter text-slate-900">
         Industries
          </h1>
        </div>
      <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
      
        
        {/* CDN - Large Image Card (Top Left) */}
     
         <div className="md:col-span-8 relative bg-[#000000] overflow-hidden flex flex-col md:flex-row h-[350px] md:h-[400px] group">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-end z-10">
            <h2 className="text-2xl font-semibold mb-2 text-white">CDN</h2>
            <p className="text-white/90 text-sm md:text-base font-DMmono opacity-90 leading-snug">
              Partnering with top CDNs to deliver reliable<br className='hidden md:block'/> global infrastructure support.
            </p>
          </div>
          
          {/* Portrait Image Overlay */}
          <div className="relative md:absolute right-0 bottom-0 h-full w-full md:w-1/2 overflow-hidden">
            <img 
              src={CDN} 
              alt="Data Professional" 
              className="h-full w-full object-cover object-right filter brightness-95 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle fade to blend image with green background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000cc] via-transparent to-transparent md:bg-gradient-to-r from-[#000000cc] via-transparent to-transparent" />
          </div>
        </div>




        {/* CLOUD - Light Neutral Card (Top Right) */}
        <div className="md:col-span-4 text-black border border-dashed border-gray-300 bg-gray-100 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:20px_20px]   p-8 md:p-10 flex flex-col justify-end h-full">
          <div>
            <h2 className="text-2xl font-semibold mb-2 ">CLOUD</h2>
            <p className="font-DMmono opacity-90 leading-snug">
              Services designed to simplify operations for cloud providers.
            </p>
          </div>
        </div>

        {/* MEDIA - Dark Tan Card (Bottom Left) */}
        <div className="md:col-span-4 text-black border border-dashed border-gray-300 bg-gray-100 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-[size:20px_20px] p-8 md:p-10 flex flex-col justify-end  h-full md:min-h-[400px]">
          <div>
            <h2 className="text-2xl font-semibold mb-2 ">MEDIA</h2>
            <p className=" font-DMmono opacity-90 leading-snug">
              Refined solutions for the social media and media industry.
            </p>
          </div>
        </div>

        {/* BIG DATA - Sage Green Image Card (Bottom Right) */}
        <div className="md:col-span-8 relative bg-[#000000]  overflow-hidden flex flex-col md:flex-row h-[350px] md:h-[400px] group">
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-end z-10">
            <h2 className="text-2xl font-semibold mb-2 text-white">BIG DATA</h2>
            <p className="text-white/90  font-DMmono opacity-90 leading-snug">
              Solutions tailored to handle large data with security.
            </p>
          </div>
          
          {/* Portrait Image Overlay */}
          <div className="relative md:absolute right-0 bottom-0 h-full w-full md:w-1/2 overflow-hidden">
            <img 
              src={BIGDATA} 
              alt="Data Professional" 
              className="h-full w-full object-cover object-right filter brightness-90 transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle fade to blend image with green background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000cc] via-transparent to-transparent md:bg-gradient-to-r from-[#000000e8] via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Industries;