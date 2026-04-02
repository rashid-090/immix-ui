import React from 'react';
import { motion } from 'framer-motion';

const Getintouch = () => {
  // Replace this with your actual image path
  const bgImage = "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg";

  return (
    <section 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImage})`,
        backgroundAttachment: 'fixed', // This creates the "fixed" scroll effect
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <div className=" px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          {/* Main Heading */}
          <h2 className="text-white text-2xl md:text-4xl font-DMmono font-light mb-8 leading-tight tracking-wide">
           Looking for a First-Class<br className='hidden md:block'/> Data center support?
          </h2>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-1 hover:bg-primary-2 active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200"
          >
            Talk to an Expert
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Getintouch;