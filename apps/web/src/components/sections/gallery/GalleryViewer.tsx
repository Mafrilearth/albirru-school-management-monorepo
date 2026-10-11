"use client";

import React, { useState, useMemo } from "react";
import {
  Calendar,
  MapPin,
  Maximize2,
  BookMarked,
  Trophy,
  Building2,
  Compass,
  ImageIcon,
  X,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { BorderBeam } from "@/components/common/BorderBeam";
import { GalleryItem } from "@/lib/content";
import { cn } from "@/lib/utils";

interface GalleryViewerProps {
  items: GalleryItem[];
}

const categories = [
  { id: "all", label: "Semua Kategori" },
  { id: "tahfidz", label: "Tahfidzul Qur'an" },
  { id: "kegiatan", label: "Kegiatan & Ekskul" },
  { id: "prestasi", label: "Wisuda & Prestasi" },
  { id: "fasilitas", label: "Facilities Kampus" },
];

export function GalleryViewer({ items }: GalleryViewerProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "tahfidz":
        return BookMarked;
      case "prestasi":
        return Trophy;
      case "fasilitas":
        return Building2;
      default:
        return Compass;
    }
  };

  return (
    <div className="space-y-16">
      <h2 id="gallery-grid-heading" className="sr-only">
        Koleksi Foto &amp; Dokumentasi Pembiasaan Students
      </h2>

      {/* Category Filter Pills with Sliding Spring layoutId */}
      <div
        role="toolbar"
        aria-label="Filter Kategori Gallery"
        className="flex flex-wrap items-center justify-center gap-2.5 p-2 rounded-none bg-slate-100/90 border border-slate-200/80 dark:border-slate-700/80 max-w-fit mx-auto"
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "relative px-4 py-2.5 rounded-none text-xs font-bold transition-colors cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-amber-500 font-mono",
                isActive ? "text-slate-950 dark:text-slate-50 font-bold" : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-50"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-gallery-pill"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-none bg-white dark:bg-slate-900 shadow-2xs border border-slate-200/80 dark:border-slate-700/80"
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Semantic Gallery Grid with Spotlight Cards & Layout Animation */}
      <motion.ul
        layout
        aria-label="Register Foto Dokumentasi"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 list-none p-0"
        role="list"
      >
        <AnimatePresence>
          {filteredItems.map((item, idx) => {
            const ItemIcon = getCategoryIcon(item.category);
            return (
              <li key={item.id} className="flex">
                <motion.article
                  layout
                  aria-labelledby={`gallery-${item.id}-title`}
                  initial={{ opacity: 0, scale: 0.95, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 16 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  onClick={() => setActiveItem(item)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveItem(item);
                    }
                  }}
                  className="cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-amber-500/30 rounded-none flex-1 flex"
                >
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.08)"
                    className="bg-[#FDFDFB] dark:bg-slate-950 hover:bg-white dark:hover:bg-slate-700 dark:bg-slate-900 shadow-2xs hover:shadow-xl transition-all flex-1 flex flex-col justify-between group rounded-none"
                  >
                    <div>
                      {/* Minimalist Image Placeholder Canvas */}
                      <figure className="relative aspect-[16/10] bg-slate-100 border-b border-slate-200/80 dark:border-slate-700/80 p-8 flex flex-col items-center justify-center text-center group-hover:bg-slate-150 transition-colors overflow-hidden">
                        <div
                          aria-hidden="true"
                          className="size-16 rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-center text-slate-400 group-hover:text-amber-600 group-hover:scale-105 transition-all mb-2"
                        >
                          <ItemIcon className="size-8" />
                        </div>
                        <figcaption className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                          Foto Dokumentasi
                        </figcaption>

                        <span
                          aria-hidden="true"
 className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-none bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-500 group-hover:bg-amber-500 group-hover:text-slate-950 dark:hover:text-slate-50 transition-colors shadow-2xs"
                        >
                          <Maximize2 className="size-4" />
                        </span>
                      </figure>

                      {/* Text Description */}
                      <div className="p-7 sm:p-8">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                          <span className="font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-none font-mono border border-amber-200/60">
                            {item.categoryLabel}
                          </span>
                          <div className="flex items-center gap-1.5 font-mono">
                            <Calendar aria-hidden="true" className="size-3 text-slate-400" />
                            <time dateTime={item.date}>{item.date}</time>
                          </div>
                        </div>

                        <h3
                          id={`gallery-${item.id}-title`}
                          className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-50 group-hover:text-amber-700 transition-colors leading-snug"
                        >
                          {item.title}
                        </h3>

                        <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <footer className="px-7 sm:px-8 pb-7 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 font-mono">
                      <MapPin aria-hidden="true" className="size-3.5 text-slate-400 shrink-0" />
                      <address className="not-italic truncate">{item.location}</address>
                    </footer>
                  </SpotlightCard>
                </motion.article>
              </li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {/* Accessible Detail Modal with AnimatePresence & BorderBeam */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-gallery-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative w-full max-w-lg rounded-none bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-2xl border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-50 overflow-hidden"
            >
              <BorderBeam size={220} duration={10} colorFrom="#f59e0b" colorTo="#10b981" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 size-9 rounded-none border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-50 transition-colors focus-visible:ring-2 focus-visible:ring-slate-900 outline-none cursor-pointer z-20"
                aria-label="Tutup Detail"
              >
                <X aria-hidden="true" className="size-5" />
              </button>

              {/* Modal Image Placeholder */}
              <figure className="aspect-[16/9] w-full rounded-none bg-slate-100 border border-slate-200 dark:border-slate-700 mb-6 flex flex-col items-center justify-center text-slate-400">
                <ImageIcon aria-hidden="true" className="size-10 text-slate-300 mb-1" />
                <figcaption className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">
                  Pratinjau Foto Dokumentasi
                </figcaption>
              </figure>

              <div className="flex items-center gap-2 mb-2">
 <span className="px-3 py-1 rounded-none bg-amber-500 text-slate-950 font-mono font-bold text-xs">
                  {activeItem.categoryLabel}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <time dateTime={activeItem.date} className="text-xs text-slate-500 font-mono">
                  {activeItem.date}
                </time>
              </div>

              <h2 id="modal-gallery-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
                {activeItem.title}
              </h2>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-3 rounded-none border border-slate-200 dark:border-slate-700 font-mono">
                <MapPin aria-hidden="true" className="size-4 text-amber-600 shrink-0" />
                <address className="not-italic">Lokasi: {activeItem.location}</address>
              </div>

              <p className="mt-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                {activeItem.description}
              </p>

              <footer className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs text-emerald-700 font-medium font-mono">
                <CheckCircle2 aria-hidden="true" className="size-4 text-emerald-700 shrink-0" />
                <span>Dokumentasi resmi pembelajaran students SD Al-Birru</span>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

