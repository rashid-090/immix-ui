import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { 
  DataCenterSecurityImg, 
  SystemInfrastructureImg, 
  StructuredCablingSolutionsImg, 
  CoLocationServicesImg, 
  DataCenterMigrationImg, 
  ManagedHostingImg 
} from "../assets";

gsap.registerPlugin(ScrollTrigger);

const allServices = [
    { title: "Data Center Security", img: DataCenterSecurityImg, description: "Protecting your data center is critical in today's landscape of advanced cyber threats.", link: "/service/datacentersecurity" },
    { title: "System Infrastructure", img: SystemInfrastructureImg, description: "At Immix Technologies, we design and maintain an integrated system infrastructure.", link: "/service/system" },
    { title: "Structured Cabling", img: StructuredCablingSolutionsImg, description: "Immix Technologies delivers state-of-the-art structured cabling solutions.", link: "/service/cabling" },
    { title: "Co-Location Services", img: CoLocationServicesImg, description: "Immix Technologies operates high-end data centers worldwide.", link: "/service/colocation" },
    { title: "Data Center Migration", img: DataCenterMigrationImg, description: "Expert team ensures seamless data center migrations, minimizing downtime.", link: "/service/migration" },
    { title: "Managed Hosting", img: ManagedHostingImg, description: "Offers fully managed hosting solutions, giving you secure access to hardware.", link: "/service/hosting" },
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
    
    mm.add({
      isMobile: "(max-width: 767px)",
      isDesktop: "(min-width: 768px)"
    }, () => {
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
          scrub: 1.5, // The higher the number, the "smoother/heavier" the scroll feels
          start: "top top",
          end: () => `+=${slider.current?.scrollWidth}`,
          invalidateOnRefresh: true,
          anticipatePin: 1, // Smooths the transition into the pinned state
        }
      });

      return () => ctx.kill();
    });

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
          <div className="p-2 rounded-[5px] w-fit mx-auto mb-5 bg-primary-1/10">
            <h2 className="text-[#3F37FF] tracking-wider font-DMmono uppercase text-[10px]">
              [ Smarter Data Center Solutions ]
            </h2>
          </div>
          <h1 className="text-3xl md:text-5xl capitalize font-Inter text-slate-900">
            Our Services
          </h1>
        </div>

        <div className="w-full pointer-events-auto overflow-visible">
          <div 
            ref={slider} 
            className="flex flex-nowrap gap-4 md:gap-5 will-change-transform"
          >
            {allServices.map((service, index) => (
              <div 
                key={index} 
                className="panel relative flex-none w-[80%] md:w-[calc(40%-10px)] bg-white/80 backdrop-blur-sm border border-dashed border-gray-200 p-2 md:p-3 rounded-lg"
              >
                <div className="relative overflow-hidden group rounded-lg">
                  <img
                    className="object-cover w-full h-[350px] transition-transform duration-700 group-hover:scale-110"
                    src={service.img}
                    alt={service.title}
                  />
                  <div className="absolute bottom-2 left-4 right-4 rounded-lg bg-black/40 text-white backdrop-blur-md p-3 z-10 border border-white/10 transition-all duration-500">
                    <h4 className="text-sm md:text-xl font-semibold">{service.title}</h4>
                    <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden pb-2">
                        <p className="text-xs pb-2 font-DMmono opacity-0 group-hover:opacity-100 transition-opacity duration-500 pt-3 leading-relaxed md:line-clamp-3 ">
                          {service.description}
                        </p>
                        <Link to={service.link} className="rounded-md uppercase px-4 py-2 bg-primary-1 text-white text-[10px] font-DMmono hover:bg-primary-2 transition-colors duration-300">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 w-fit mx-auto z-50 relative">
            <button className="bg-primary-1 hover:bg-primary-2 uppercase active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200">
              More Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;