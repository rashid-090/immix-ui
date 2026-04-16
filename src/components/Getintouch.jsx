import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getinBg } from '../assets';

const Getintouch = () => {
  return (
    <section 
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${getinBg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      /* Logic: 'bg-scroll' is the default (mobile). 
         'md:bg-fixed' applies the parallax effect only on medium screens and up.
      */
      className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-scroll md:bg-fixed"
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
          <Link to="/contact-us">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-1 cursor-pointer hover:bg-primary-2 active:scale-95 text-white text-xs font-light tracking-widest px-6 py-3 rounded-lg transition-all duration-200"
            >
             Talk to an Expert
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Getintouch;