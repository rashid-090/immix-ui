import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
// Import React Icons
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";
import { DataCenterColocation,CloudHosting,TelecomandNewtwork,Enterprise,Manage,ContentDelivery,Financial,ITHardware,AIinfra,PubliceSector,
} from '../assets'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Industries = () => {
  const swiperRef = useRef(null);

  const industryData = [
  {
    title: "Data Centers & Colocation Providers",
    img: DataCenterColocation,
  },
  {
    title: "Cloud & Hosting Providers",
    img: CloudHosting,
  },
  {
    title: "Telecom & Network Operators",
    img: TelecomandNewtwork,
  },
  {
    title: "Enterprise IT & Global Corporates",
    img: Enterprise,
  },
  {
    title: "Managed Service Providers (MSPs)",
    img: Manage,
  },
  {
    title: "Content Delivery Networks (CDNs)",
    img: ContentDelivery,
  },
  {
    title: "Financial & Mission-Critical Industries",
    img: Financial,
  },
  {
    title: "IT Hardware & Infrastructure Vendors",
    img: ITHardware,
  },
  {
    title: "AI Infrastructure & HPC Providers",
    img: AIinfra,
  },
  {
    title: "Public Sector & Government",
    img: PubliceSector,
  },
];

  return (
    <div className="bg-[#F9F8F3] w-full py-20 text-slate-900 font-sans">
      <div className="text-center mb-12 px-4">
        <div className="p-2 rounded-[5px] w-fit mx-auto mb-5 bg-[#3F37FF]/10">
          <h2 className="text-[#3F37FF] tracking-wider font-DMmono uppercase text-[10px]">
            [ Immix Technology ]
          </h2>
        </div>
        <h1 className="text-3xl my-5 md:text-5xl capitalize font-Inter text-slate-900">
          Industries
        </h1>
      </div>

      <div className="w-11/12 xl:w-10/12 mx-auto relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {industryData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col group cursor-pointer pb-4">
                {/* Image & Cutout Button */}
                <div className="relative aspect-[1.3/1]  overflow-hidden rounded-[30px] rounded-br-[0px] mb-6 group">
                  {/* Main Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover overflow-hidden transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* The Perfect Notch Container */}
                  <div
                    className="
      absolute bottom-0 right-0 z-10
      h-[75px] w-[75px] bg-[#F9F8F3]
      rounded-tl-[35px] 
      
      /* Top Inverse Curve */
      before:content-['']
      before:absolute before:-top-[25px] before:right-0
      before:h-[25px] before:w-[25px]
      before:rounded-br-[25px]
      before:shadow-[10px_10px_0_10px_#F9F8F3]
      before:pointer-events-none

      /* Left Inverse Curve */
      after:content-['']
      after:absolute after:bottom-0 after:-left-[25px]
      after:h-[25px] after:w-[25px]
      after:rounded-br-[25px]
      after:shadow-[10px_10px_0_10px_#F9F8F3]
      after:pointer-events-none
    "
                  >
                    {/* Inner Floating Button */}
                    <div
                      className={`
        absolute bottom-2 right-2
        w-[60px] h-[60px] rounded-full
        flex items-center justify-center
        transition-all duration-500 z-10
        bg-primary-1
        group-hover:rotate-[45deg]
        shadow-sm
      `}
                    >
                      <FiArrowUpRight className="text-white text-xl" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="px-1">
                  <h3 className="font-Inter text-xl text-slate-900 mb-3 leading-tight">
                    {item.title}
                  </h3>
             

                  <div className="bg-gradient-to-r from-primary-1 to-transparent w-20 h-[3px]"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- Navigation & Pagination Area --- */}
        <div className="flex flex-col items-center gap-8 mt-5 md:mt-12">
          {/* Custom Dots */}
          <div className="custom-pagination !flex !justify-center !gap-2 cursor-pointer"></div>

          {/* React Icons Arrows */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12  h-12 cursor-pointer rounded-full border border-gray-200 flex items-center justify-center text-slate-400 hover:bg-primary-1 hover:text-white  transition-all duration-300 active:scale-90"
              aria-label="Previous slide"
            >
              <HiArrowLeft size={15} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12  h-12 cursor-pointer rounded-full border border-gray-200 flex items-center justify-center text-slate-400 hover:bg-primary-1 hover:text-white  transition-all duration-300 active:scale-90"
              aria-label="Next slide"
            >
              <HiArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #3f37ff !important;
          width: 20px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default Industries;
