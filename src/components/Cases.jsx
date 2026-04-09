import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { abtbg } from "../assets";
import { IoIosCheckbox } from "react-icons/io";

const tabData = [
  {
    id: "tab1",
    label: "Remote Infrastructure",
    title: "Remote Infrastructure Management",
    image: abtbg,
    description: "Our remote infrastructure management services provide end-to-end monitoring and management of IT systems from any location, ensuring seamless operations and minimal downtime.",
    points: [
      "Continuous Availability: Real-time remedial actions keep your IT systems running 24/7.",
      "Improved Coordination: Streamlines maintenance and enhances team efficiency.",
      "Cost Savings: Reduces operational and staffing expenses.",
      "Enhanced Service Reliability: Boosts availability of business-critical applications.",
      "Increased Operational Efficiency: Optimizes IT workflows for smoother performance.",
    ],
  },
  {
    id: "tab2",
    label: "Managed Hosting",
    title: "Managed Hosting",
    image: abtbg, // Replace with specific image if available
    description: "Our managed hosting services offer tailored server solutions to meet your business needs, ensuring reliability, security, and performance. Key features include.",
    points: [
      "Custom Server Solutions: Cluster setups, special software installation, and platform optimization.",
      "Enhanced Security: Keep your servers protected with advanced security measures.",
      "Task Automation: Streamline routine operations for efficiency.",
      "Expert Management: Regular account reviews and customized reports on request.",
      "Fast & Accurate Response: Quick issue resolution to minimize downtime."
    ],
  },
  {
    id: "tab3",
    label: "Infrastructure as A Service",
    title: "Infrastructure as a Service",
    image: abtbg, // Replace with specific image if available
    description: "Our Infrastructure as a Service (IaaS) solutions provide scalable virtual computing resources over the internet, enabling businesses to leverage cloud computing without the burden of managing physical hardware. Key benefits include:",
    points: [
      "Cost-Effective: Reduce capital expenses by using virtualized resources.",
      "Reliable & Secure: Ensure high availability and robust security for your applications and data.",
      "Simplified Maintenance: We handle hardware and network equipment, so your team can focus on core business operations.",
    ],
  },
];

const Cases = () => {
  const [activeTab, setActiveTab] = useState(tabData[0]);

  return (
    <section className="w-full bg-black text-white overflow-hidden">
      <div className="w-11/12 xl:w-10/12 mx-auto py-20 border border-dashed border-gray-800 border-t-0 border-b-0">
         <div className="p-2 rounded-[5px] w-fit mx-auto mb-5 bg-primary-1/10">
          <h2 className="text-primary-1 tracking-wider font-DMmono uppercase text-[10px]">
            [ Smarter Data Center Solutions ]
          </h2>
        </div>
        <h1 className="text-center text-3xl md:text-5xl capitalize font-Inter mb-10">
          Our Cases
        </h1>

        {/* Tab Buttons Container */}
        <div className="flex flex-wrap gap-2 md:gap-5 items-center justify-center mb-10 bg-[#111] w-[90%] md:w-fit mx-auto p-1 rounded-xl border border-gray-800">
          {tabData.map((tab) => {
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-3 text-xs w-full md:w-fit font-light transition-colors duration-300 z-10 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {/* The "Jumping" Background Effect */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-1 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.35, duration: 0.6 }}
                  />
                )}
                <span className="relative uppercase tracking-wider font-medium">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-y-5 items-center"
          >
            {/* Image Box */}
            <div className="overflow-hidden">
                <motion.img 
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={activeTab.image} 
                  alt={activeTab.title} 
                  className="w-full h-full object-cover"
                />
            </div>

            {/* Text Box */}
            <div className="h-full flex flex-col justify-center p-5 md:p-10">
              <motion.h2 
                initial={{ x: 20 }} 
                animate={{ x: 0 }} 
                className="text-2xl md:text-3xl capitalize font-Inter"
              >
                {activeTab.title}
              </motion.h2>
              
              <p className="mt-5 max-w-xl text-sm md:text-base font-light font-DMmono leading-relaxed text-gray-300">
                {activeTab.description}
              </p>

              <div className="mt-8 text-[14px] flex flex-col gap-3">
                {activeTab.points.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-3 items-start"
                  >
                    <IoIosCheckbox className="text-primary-1 text-xl flex-shrink-0 mt-0.5" />
                    <p className="font-light font-DMmono text-gray-300 leading-snug">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-1 hover:bg-primary-2 active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200 w-fit mt-10"
              >
                GET STARTED
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Cases;