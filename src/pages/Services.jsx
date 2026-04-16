import React from "react";
import { headerbg } from "../assets";
import {
Deployment,RemoteHands,NetworkOperations,Logistics,Testing,Secure,ProjectManagement,
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
    slug: "deployment-implementation",
    title: "Deployment & Implementation",
    img: Deployment,
    description:
      "We ensure seamless installation and commissioning of your infrastructure with precision and adherence to global standards.",
    points: [
      "Rack & Stack Implementation",
      "Server, Storage & Network Installation",
      "Structured Cabling (Fibre & Copper)",
      "Cross-connect Setup",
      "Power Connectivity & Initial Configuration",
      "DWDM & Optical Network Deployment",
    ],
  },
  {
    slug: "remote-hands-support",
    title: "Remote Hands & On-Site Technical Support",
    img: RemoteHands,
    description:
      "Reliable, real-time technical assistance delivered by experienced engineers — whenever and wherever you need it.",
    points: [
      "24/7 Remote Hands Support",
      "Smart Hands / On-site Support",
      "Remote Eyes Assistance",
      "On-demand Data Center Engineers",
      "Real-time Troubleshooting Support",
    ],
  },
  {
    slug: "network-operations",
    title: "Network Operations & Maintenance",
    img: NetworkOperations,
    description:
      "Proactive monitoring and expert support to ensure maximum uptime and performance.",
    points: [
      "Network Monitoring & Infrastructure Management",
      "Configuration, Upgrades & Change Management",
      "Preventive & Corrective Maintenance",
      "Break-Fix & Emergency Support",
      "Live Network Troubleshooting",
    ],
  },
  {
    slug: "logistics-asset-management",
    title: "Logistics, Procurement & Asset Management",
    img: Logistics,
    description:
      "Efficient global logistics and asset handling to support your infrastructure lifecycle.",
    points: [
      "Equipment Sourcing & Procurement",
      "Importer of Record (IOR) Services",
      "Shipping, Receiving & Last-Mile Delivery",
      "Inventory Management & Warehousing",
      "RMA Handling & Spare Parts Coordination",
      "Employer of Record (EOR) Services",
    ],
  },
  {
    slug: "testing-quality-assurance",
    title: "Testing, Validation & Quality Assurance",
    img: Testing,
    description:
      "Ensuring every deployment meets performance, compliance, and reliability standards.",
    points: [
      "Fibre & Network Testing",
      "Cable Audits & Certification",
      "Deployment Validation & Reporting",
      "Optical Network Audits",
    ],
  },
  {
    slug: "secure-it-disposal",
    title: "Secure IT Asset Disposal & Data Destruction",
    img: Secure,
    description:
      "Compliant and secure handling of end-of-life IT assets.",
    points: [
      "HDD/SSD Shredding (On-site & Off-site)",
      "Certified Data Destruction & Degaussing",
      "Asset Decommissioning & Disposal",
      "Secure Chain of Custody",
      "E-waste Disposal (Regulatory Compliant)",
      "Certificate of Destruction (CoD)",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management & Service Delivery",
    img: ProjectManagement,
    description:
      "End-to-end coordination ensuring smooth execution and accountability.",
    points: [
      "Site Readiness & Deployment Planning",
      "Vendor & Stakeholder Coordination",
      "SLA-based Service Delivery",
      "Centralized Ticketing & Reporting",
      "Dedicated Engineering Teams",
      "Documentation & Final Handover",
    ],
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {allServices.map((service, index) => (
            <Link to={`/services/${service.slug}`} key={index}>
              <div
                className="panel relative flex-none  bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 p-2 md:p-3 rounded-lg"
              >
                <div className="relative overflow-hidden group rounded-lg">
                  <img
                    className="object-cover w-full h-[280px] xl:h-[350px] transition-transform duration-700 group-hover:scale-110"
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
