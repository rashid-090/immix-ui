import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white px-6 overflow-hidden">
      {/* Animated Background 404 */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.05, 
          scale: 1,
          y: [0, -20, 0] // Gentle floating movement
        }}
        transition={{ 
          opacity: { duration: 1.5 },
          scale: { duration: 1.5 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute inset-0 flex items-center justify-center -z-10 select-none"
      >
        <h1 className="text-[25vw] font-bold text-gray-900">404</h1>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.p variants={itemVariants} className="text-xl font-medium text-primary-1">
          Error 404
        </motion.p>
        
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl capitalize my-2"
        >
          Page not found
        </motion.h1>
     
        
        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col md:flex-row gap-y-10 items-center justify-center gap-x-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="mt-4 bg-primary-1 text-center text-white text-xs font-medium tracking-widest px-6 py-4 rounded-full transition-all active:scale-95 w-full shadow-md"
            >
              Back to Home
            </Link>
          </motion.div>
          
          <Link 
            to="/contact-us" 
            className="text-sm font-semibold text-gray-900 hover:text-primary-1 flex items-center gap-1 group"
          >
            Contact Support 
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NotFound;