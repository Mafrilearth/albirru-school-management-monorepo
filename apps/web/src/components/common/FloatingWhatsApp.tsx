"use client";

import { MessageCircle, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { appleSpringSnappy, appleTapHaptic } from "@/lib/motion";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(true);

  const waUrl =
    "https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20I%20would%20like%20to%20inquire%20about%20school%20information%20and%20admissions.";

  return (
    <aside
      aria-label="Quick WhatsApp Contact"
      className="fixed bottom-22 lg:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Speech bubble teaser in Liquid Glass Regular */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={appleSpringSnappy}
          className="relative flex items-center gap-2 rounded-lg bg-card border border-border p-3 pr-2.5 shadow-xl text-xs text-card-foreground max-w-[230px]"
        >
          <span className="flex size-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
          <p className="font-medium leading-tight">
            Have questions about Admissions? Chat with us here!
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="size-5 rounded-md text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer shrink-0"
            aria-label="Close WhatsApp notification"
          >
            <X className="size-3.5" />
          </button>
        </motion.div>
      )}

      {/* Main floating concentric button */}
      <motion.div whileTap={appleTapHaptic}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp with SD Al-Birru Admissions Committee"
          className="group relative flex size-12 items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all duration-200"
        >
          {/* Ambient pulse ring */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping pointer-events-none group-hover:hidden"
          />

          <MessageCircle className="size-6 transition-transform group-hover:scale-105" />

          {/* Online status indicator dot */}
          <span className="absolute top-0.5 right-0.5 size-3 rounded-full bg-emerald-400 ring-2 ring-background" />
        </a>
      </motion.div>
    </aside>
  );
}
