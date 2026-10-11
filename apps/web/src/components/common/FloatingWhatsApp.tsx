"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion } from "motion/react";
import { appleSpringSnappy, appleTapHaptic } from "@/lib/motion";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(true);

  const waUrl =
    "https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20saya%20ingin%20konsultasi%20informasi%20sekolah%20dan%20PPDB.";

  return (
    <aside
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-22 lg:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Speech bubble teaser in Liquid Glass Regular */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          transition={appleSpringSnappy}
          className="relative flex items-center gap-2 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 pr-2.5 shadow-xl text-xs text-slate-800 dark:text-slate-200 max-w-[230px]"
        >
          <span className="flex size-2 rounded-none bg-emerald-500 animate-ping shrink-0" />
          <p className="font-medium leading-tight">
            Ada pertanyaan seputar Admissions? Chat kami di sini!
          </p>
          <button
            onClick={() => setIsOpen(false)}
            className="size-5 rounded-none text-slate-400 hover:text-slate-700 dark:text-slate-300 flex items-center justify-center cursor-pointer shrink-0"
            aria-label="Tutup notifikasi WhatsApp"
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
          aria-label="Chat WhatsApp Committee Admissions SD Al-Birru"
          className="group relative flex size-13 items-center justify-center rounded-none bg-emerald-700 hover:bg-emerald-700 text-white shadow-xl shadow-emerald-900/25 transition-all duration-300 border-2 border-white/80"
        >
          {/* Ambient pulse ring */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-none bg-emerald-500/40 animate-ping pointer-events-none group-hover:hidden"
          />

          <MessageCircle className="size-6.5 transition-transform group-hover:scale-110" />

          {/* Online status indicator dot */}
          <span className="absolute top-0.5 right-0.5 size-3 rounded-none bg-amber-400 ring-2 ring-white" />
        </a>
      </motion.div>
    </aside>
  );
}

