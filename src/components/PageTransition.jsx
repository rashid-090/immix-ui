import { motion } from "framer-motion";

const PageTransition = () => {
  return (
    <>
      {/* Top Layer */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-primary-1 z-[100] origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: .5, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Bottom Layer (Delayed) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-primary-1 z-[100] origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: .5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      />
    </>
  );
};

export default PageTransition;