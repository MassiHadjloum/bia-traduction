"use client";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  // Détecter si on a dépassé un écran
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > (window.innerHeight - 250)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 z-[6000] p-3 rounded-full
          w-12 h-12 cursor-pointer flex justify-center items-center 
                       backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 
                       transition-all duration-300 ease-in-out
                       hover:scale-110
                       bg-black-200 border dark:border-white-300 border-black-300"
        // className=" bg-white dark:bg-black shadow-lg border border-gray-300 dark:border-gray-600 hover:bg-purple-100 dark:hover:bg-purple-900"
        >
          <ArrowUp className="w-6 h-6 text-purple" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
