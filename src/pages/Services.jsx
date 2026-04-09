import React from "react";
import { headerbg } from "../assets";
import {
  DataCenterSecurityImg,
  SystemInfrastructureImg,
  StructuredCablingSolutionsImg,
  CoLocationServicesImg,
  DataCenterMigrationImg,
  ManagedHostingImg,
} from "../assets";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Services = () => {
  const bgImage = headerbg;
  const allServices = [
    {
        slug: "data-center-security",
      title: "Data Center Security",
      img: DataCenterSecurityImg,
      description:
        "Protecting your data center is critical in today's landscape of advanced cyber threats.",
  
    },
    {
        slug: "system-infrastructure",
      title: "System Infrastructure",
      img: SystemInfrastructureImg,
      description:
        "At Immix Technologies, we design and maintain an integrated system infrastructure.",

    },
    {
        slug: "structured-cabling",
      title: "Structured Cabling",
      img: StructuredCablingSolutionsImg,
      description:
        "Immix Technologies delivers state-of-the-art structured cabling solutions.",
     
    },
    {
        slug: "co-location-services",
      title: "Co-Location Services",
      img: CoLocationServicesImg,
      description:
        "Immix Technologies operates high-end data centers worldwide.",
   
    },
    {
        slug: "data-center-migration",
      title: "Data Center Migration",
      img: DataCenterMigrationImg,
      description:
        "Expert team ensures seamless data center migrations, minimizing downtime.",
  
    },
    {
        slug: "managed-hosting",
      title: "Managed Hosting",
      img: ManagedHostingImg,
      description:
        "Offers fully managed hosting solutions, giving you secure access to hardware.",
   
    },
  ];

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
          <h2 className="text-3xl md:text-5xl">Innovative Digital Services</h2>
           <div className="mt-3 text-sm md:text-base">
                        <span className="font-DMmono"><Link to="/" className="hover:text-primary-1">Home</Link> | Services</span>
            </div>
        </div>
      </section>

      <section className="hidden lg:block w-11/12 xl:w-10/12 mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {allServices.map((service, index) => (
            <Link to={`/services/${service.slug}`} key={index}>
              <div
                className="panel relative flex-none  bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 p-2 md:p-3 rounded-lg"
              >
                <div className="relative overflow-hidden group rounded-lg">
                  <img
                    className="object-cover w-full h-[280px] transition-transform duration-700 group-hover:scale-110"
                    src={service.img}
                    alt={service.title}
                  />
                  <div className="absolute bottom-2 left-4 right-4 rounded-lg bg-black/40 text-white backdrop-blur-md p-3 z-10 border border-white/10 transition-all duration-500">
                    <h4 className="text-sm md:text-xl font-semibold">
                      {service.title}
                    </h4>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden pb-2">
                        <p className="text-xs pb-2 font-DMmono opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-3 leading-relaxed md:line-clamp-3 ">
                          {service.description}
                        </p>
                        <Link
                         to={`/services/${service.slug}`}
                          className="rounded-md uppercase px-4 py-2 bg-primary-1 text-white text-[10px] font-DMmono hover:bg-primary-2 transition-colors duration-300"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

{/* mobile */}

          <div className="ml-2 py-10 block lg:hidden">
            <Swiper
              modules={[Pagination, A11y, Autoplay]}
              slidesPerView={1.1}
              spaceBetween={16}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{ clickable: true }}
              className="services-swiper !pb-12"
            >
              {allServices.map((service, index) => (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="panel relative flex-none  bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 p-2 md:p-3 rounded-lg"
                  >
                    <div className="relative overflow-hidden group rounded-lg">
                      <img
                        className="object-cover w-full h-[280px] transition-transform duration-700 group-hover:scale-110"
                        src={service.img}
                        alt={service.title}
                      />
                      <div className="absolute bottom-2 left-4 right-4 rounded-lg bg-black/40 text-white backdrop-blur-md p-3 z-10 border border-white/10 transition-all duration-500">
                        <h4 className="text-sm md:text-xl font-semibold">
                          {service.title}
                        </h4>
                        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                          <div className="overflow-hidden pb-2">
                            <p className="text-xs pb-2 font-DMmono opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-3 leading-relaxed md:line-clamp-3 ">
                              {service.description}
                            </p>
                            <Link
                            to={`/services/${service.slug}`}
                              className="rounded-md uppercase px-4 py-2 bg-primary-1 text-white text-[10px] font-DMmono hover:bg-primary-2 transition-colors duration-300"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

    </div>
  );
};

export default Services;
