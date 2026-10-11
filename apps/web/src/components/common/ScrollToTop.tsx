"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { appleSpring, appleTapHaptic } from "@/lib/motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={appleTapHaptic}
          transition={appleSpring}
          onClick={scrollToTop}
          aria-label="Kembali ke atas halaman"
          className="fixed bottom-22 lg:bottom-6 left-4 sm:left-6 z-40 flex size-11 items-center justify-center rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-lg hover:bg-slate-950 dark:hover:bg-slate-800 hover:text-amber-400 dark:hover:text-amber-400 transition-colors cursor-pointer"
        >
          <ArrowUp className="size-4.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
