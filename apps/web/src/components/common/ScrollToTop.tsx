"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
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
          className="fixed bottom-22 lg:bottom-6 left-4 sm:left-6 z-40 flex size-10 items-center justify-center rounded-full bg-background border border-border text-foreground shadow-md hover:bg-muted transition-colors cursor-pointer"
        >
          <ArrowUp className="size-4.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
