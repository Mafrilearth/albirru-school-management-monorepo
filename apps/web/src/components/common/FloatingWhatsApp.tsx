"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { appleTapHaptic } from "@/lib/motion";

export function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20I%20would%20like%20to%20inquire%20about%20school%20information%20and%20admissions.";

  return (
    <aside
      aria-label="Quick WhatsApp Contact"
      className="fixed bottom-22 lg:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Main floating rectilinear action button */}
      <motion.div whileTap={appleTapHaptic}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp with SD Al-Birru Admissions Committee"
          className="group relative flex size-12 items-center justify-center rounded-none bg-emerald-600 hover:bg-emerald-500 text-white shadow-none border border-emerald-500/50 transition-all duration-200"
        >
          <MessageCircle className="size-5 transition-transform group-hover:scale-105" />

          {/* Online status indicator dot */}
          <span className="absolute top-0.5 right-0.5 size-2 rounded-none bg-emerald-400 ring-1 ring-background" />
        </a>
      </motion.div>
    </aside>
  );
}
