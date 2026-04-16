import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
 Deployment,RemoteHands,NetworkOperations,Logistics,Testing,Secure,ProjectManagement,
} from "../assets";

gsap.registerPlugin(ScrollTrigger);

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

const Service = () => {
  const component = useRef(null);
  const slider = useRef(null);
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      () => {
        const getScrollAmount = () => {
          if (!slider.current) return 0;
          let totalWidth = slider.current.scrollWidth;
          let viewportWidth = slider.current.offsetWidth;
          return -(totalWidth - viewportWidth);
        };

        const ctx = gsap.to(slider.current, {
          x: getScrollAmount,
          ease: "none", // Required for scrub to feel consistent
          scrollTrigger: {
            trigger: component.current,
            pin: true,
            scrub: 2, // The higher the number, the "smoother/heavier" the scroll feels
            start: "top top",
            end: () => `+=${slider.current?.scrollWidth}`,
            invalidateOnRefresh: true,
            anticipatePin: 1, // Smooths the transition into the pinned state
          },
        });

        return () => ctx.kill();
      },
    );

    return () => mm.revert();
  }, [init]);

  const particlesOptions = {
    background: { color: "#ffffff" },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
      },
      modes: {
        grab: { distance: 240, links: { opacity: 0.5 } },
      },
    },
    particles: {
      color: { value: "#3F37FF" },
      links: {
        color: "#3F37FF",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "out" },
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section ref={component} className="relative overflow-hidden bg-white">
      {/* Background Animation */}
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 w-11/12 md:w-10/12 mx-auto flex flex-col justify-center items-center py-20 min-h-screen pointer-events-none">
        <div className="text-center mb-10 pointer-events-auto">
          <div className="p-2 rounded-[5px] w-fit mx-auto  bg-primary-1/10">
            <h2 className="text-[#3F37FF] tracking-wider font-DMmono uppercase text-[10px]">
              [ End-to-End Data Center & Network Services ]
            </h2>
          </div>
          <h1 className="text-3xl my-5 md:text-5xl capitalize font-Inter text-slate-900">
            Our Services
          </h1>
          <p className="w-[90%] md:w-[70%] mx-auto font-light">We deliver fully integrated, turnkey solutions across data centers, networks, and IT infrastructure - from planning and procurement to deployment, support, and lifecycle management.</p>
        </div>

        <div className="w-full pointer-events-auto overflow-visible">
          <div
            ref={slider}
            className="hidden lg:flex flex-nowrap gap-4 md:gap-5 will-change-transform"
          >
            {allServices.map((service, index) => (
              <div
                key={index}
                className="panel group relative flex-none w-[80%] md:w-[calc(40%-10px)] bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 p-2 md:p-3 rounded-lg"
              >
                <div className="relative overflow-hidden group rounded-lg">
                  <img
                    className="object-cover w-full h-[350px] transition-transform duration-700 group-hover:scale-110"
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-4 right-4 rounded-lg bg-black/40 text-white backdrop-blur-md p-3 z-10 border border-white/10 transition-all duration-500">
                    <h4 className="text-sm md:text-xl font-semibold line-clamp-1 group-hover:line-clamp-none transition-all duration-200">
                      {service.title}
                    </h4>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden pb-2">
                        <p className="text-xs md:text-sm mb-5 font-DMmono opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-3 leading-relaxed md:line-clamp-2 ">
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
            ))}
          </div>

          {/* mobile */}

          <div className="block lg:hidden">
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

          <div className="mt-10 w-fit mx-auto z-50 relative">
            <Link to={'/services'} className="bg-primary-1 hover:bg-primary-2 uppercase active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200">
              More Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
