import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const stats = [
  { value: 500, suffix: "K+", label: "Total Active Users" },
  { value: 2, suffix: "B", label: "Data Stored" },
  { value: 50, suffix: "+", label: "Global Data Centers" },
  { value: 100, suffix: "%", label: "Uptime Guarantee" },
];

const StatItem = ({ value, suffix = "", prefix = "", label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Motion value to hold the current count
  const count = useMotionValue(0);
  
  // Transform the motion value into a clean integer
  const rounded = useTransform(count, (latest) => Math.round(latest));

  // Trigger animation when in view
  React.useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="flex flex-col items-center text-black ">
      <div className="flex flex-col items-center">
        <div className="text-3xl md:text-6xl w-full font-light tracking-tighter flex items-center gap-1 font-DMmono">
          <span>{prefix}</span>
          <motion.span>{rounded}</motion.span>
          <span>{suffix}</span>
        </div>
        {/* The Blue Underline from your image */}
        <div className="w-full h-[3px] bg-primary-1 mt-4 rounded-full" />
      </div>
      <p className="mt-3 text-gray-500 text-[11px] md:text-xs uppercase tracking-wider text-center max-w-[150px]">
        {label}
      </p>
    </div>
  );
};

const Counters = () => {
  return (
    <section className="bg-white w-full py-10">
      <div className="w-11/12 xl:w-10/12 py-5 border border-dashed border-gray-200 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counters;