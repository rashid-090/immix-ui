import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Helper to parse values like "10,000+" into { target: 10000, suffix: "+" }
const parseValue = (valStr) => {
  const cleanStr = valStr.replace(/,/g, "");
  const match = cleanStr.match(/^(\d+)(.*)$/);
  if (match) {
    return {
      target: parseInt(match[1], 10),
      suffix: match[2],
    };
  }
  return { target: 0, suffix: valStr };
};

const DataCounts = () => {
  const stats = [
    { label: "Years of Expertise", value: "15+" },
    { label: "Countries Support", value: "40+" },
    { label: "Data Centers Covered", value: "250+" },
    { label: "Tickets Every Year", value: "10,000+" },
    { label: "Deployments Every Year", value: "500+" },
    // { label: "Country-Based Storage", value: "10+" },
  ];

  return (
    <div className="pt-8 md:pt-12">
      <div className="w-full mx-auto">
        
        {/* --- MOBILE VIEW: Swiper Carousel --- */}
        <div className="md:hidden px-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={false}
            className="pb-8"
          >
            {stats.map((stat, index) => {
              const { target, suffix } = parseValue(stat.value);
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center text-center gap-2 group py-2">
                    {/* Value */}
                    <span className="text-3xl font-Inter font-medium text-primary-1">
                      <CountUp
                        end={target}
                        suffix={suffix}
                        separator=","
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </span>

                    {/* Label */}
                    <span className="text-[8px] text-slate-600 uppercase tracking-widest leading-tight w-full font-DMmono">
                      {stat.label}
                    </span>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* --- DESKTOP VIEW: Clean Horizontal Flex Layout --- */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between py-2 px-12">
          {stats.map((stat, index) => {
            const { target, suffix } = parseValue(stat.value);

            return (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center text-center gap-2 group py-2 px-4"
                >
                  {/* Value */}
                  <span className="text-3xl md:text-4xl lg:text-5xl font-Inter text-gray-700 transition-colors duration-300">
                    <CountUp
                      end={target}
                      suffix={suffix}
                      separator=","
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </span>

                  {/* Label */}
                  <span className="text-[10px] text-slate-600 uppercase tracking-widest leading-tight w-full font-DMmono transition-colors duration-300">
                    {stat.label}
                  </span>
                </motion.div>

                {/* Vertical divider between items */}
                {index < stats.length - 1 && (
                  <div className="h-20 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default DataCounts;
