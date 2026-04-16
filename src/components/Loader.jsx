import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Assuming Logo is an SVG or PNG import
import { Logo } from '../assets'; 

// We accept an 'isLoading' prop to control when this component animates out
const Loader = ({ isLoading }) => {
  
  // Animation variants for the pulsating logo
  const logoVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: [0.5, 1, 0.5], // Fades slightly in and out
      scale: [1, 1.1, 1],       // Gently scales up and down
      transition: {
        duration: 2,           // Time for one full pulse cycle
        ease: "easeInOut",
        repeat: Infinity,      // Keep pulsing forever while loading
      },
    },
  };

  // Variants for the full-screen container exit
  const screenVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,         // Smooth fade out duration
        ease: [0.43, 0.13, 0.23, 0.96], // Custom cubic-beizer for polished feel
        when: "afterChildren", // Ensure logo animation stops before exit
      },
    },
  };

  return (
    // AnimatePresence is required to enable 'exit' animations in React
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          variants={screenVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          // Crucial for accessibility: hides content from screen readers while loading
          aria-hidden="true" 
        >
          <motion.div
            className="flex flex-col items-center gap-4"
            variants={logoVariants}
            initial="initial"
            animate="animate"
          >
            {/* Logo Image */}
            <img 
              src={Logo} 
              alt="Loading..." 
              className="h-16 w-auto object-contain" // Adjust size as needed
            />
            
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;