"use client";

import {
  BookMarked,
  Building2,
  Calendar,
  CheckCircle2,
  Compass,
  ImageIcon,
  MapPin,
  Maximize2,
  Trophy,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { GalleryItem } from "@/lib/content";
import { cn } from "@/lib/utils";

interface GalleryViewerProps {
  items: GalleryItem[];
}

const categories = [
  { id: "all", label: "Semua Kategori" },
  { id: "tahfidz", label: "Tahfidzul Qur'an" },
  { id: "activities", label: "Aktivitas & Karakter" },
  { id: "achievements", label: "Wisuda & Prestasi" },
  { id: "facilities", label: "Fasilitas Kampus" },
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
      case "achievements":
        return Trophy;
      case "facilities":
        return Building2;
      default:
        return Compass;
    }
  };

  return (
    <div className="flex flex-col gap-12">
      <h2 id="gallery-grid-heading" className="sr-only">
        Dokumentasi Foto dan Aktivitas Siswa
      </h2>

      {/* Category Filter Buttons */}
      <div
        role="toolbar"
        aria-label="Filter Kategori Galeri"
        className="flex flex-wrap items-center justify-center gap-2 max-w-fit mx-auto"
      >
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-none border transition-colors cursor-pointer",
                isActive
                  ? "bg-foreground text-background border-foreground font-bold"
                  : "bg-background border-border text-muted-foreground hover:text-foreground hover:bg-muted/50",
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Cards Grid */}
      <motion.ul
        layout
        aria-label="Daftar Dokumentasi Foto"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 list-none p-0"
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
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, delay: idx * 0.03 }}
                  onClick={() => setActiveItem(item)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveItem(item);
                    }
                  }}
                  className="cursor-pointer outline-none rounded-none flex-1 flex"
                >
                  <div className="flex-1 flex flex-col justify-between border border-border bg-card/60 rounded-none hover:border-foreground/30 transition-colors relative group">
                    <div>
                      {/* Image Placeholder */}
                      <figure className="relative aspect-[16/10] bg-muted/40 border-b border-border p-6 flex flex-col items-center justify-center text-center group-hover:bg-muted/70 transition-colors">
                        <div
                          aria-hidden="true"
                          className="size-14 rounded-none bg-background border border-border flex items-center justify-center text-foreground group-hover:scale-105 transition-transform mb-2 shadow-none"
                        >
                          <ItemIcon className="size-7" />
                        </div>
                        <figcaption className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                          Dokumentasi Galeri
                        </figcaption>

                        <span
                          aria-hidden="true"
                          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-none bg-background border border-border text-foreground hover:bg-muted transition-colors shadow-none"
                        >
                          <Maximize2 className="size-3.5" />
                        </span>
                      </figure>

                      {/* Content */}
                      <div className="p-5 sm:p-6">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 font-mono">
                          <span className="inline-flex px-2 py-0.5 text-[10px] uppercase tracking-wider bg-muted/40 border border-border text-foreground font-bold">
                            {item.categoryLabel}
                          </span>
                          <div className="flex items-center gap-1.5 text-[11px]">
                            <Calendar
                              aria-hidden="true"
                              className="size-3 text-primary"
                            />
                            <time dateTime={item.date}>{item.date}</time>
                          </div>
                        </div>

                        <h3
                          id={`gallery-${item.id}-title`}
                          className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug tracking-tight"
                        >
                          {item.title}
                        </h3>

                        <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="px-5 sm:px-6 py-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <MapPin
                        aria-hidden="true"
                        className="size-3.5 shrink-0 text-primary"
                      />
                      <address className="not-italic truncate text-[11px]">
                        {item.location}
                      </address>
                    </div>
                  </div>
                </motion.article>
              </li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      {/* Accessible Detail Dialog */}
      <Dialog
        open={Boolean(activeItem)}
        onOpenChange={(open) => {
          if (!open) setActiveItem(null);
        }}
      >
        {activeItem && (
          <DialogContent className="sm:max-w-lg rounded-none border border-border bg-card shadow-none p-6">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2 font-mono">
                <span className="inline-flex px-2 py-0.5 text-[10px] uppercase tracking-wider bg-muted/40 border border-border text-foreground font-bold">
                  {activeItem.categoryLabel}
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <time
                  dateTime={activeItem.date}
                  className="text-xs text-muted-foreground"
                >
                  {activeItem.date}
                </time>
              </div>
              <DialogTitle className="text-xl font-bold leading-tight tracking-tight text-foreground">
                {activeItem.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {activeItem.description}
              </DialogDescription>
            </DialogHeader>

            {/* Modal Image Placeholder */}
            <figure className="aspect-[16/9] w-full rounded-none bg-muted/40 border border-border flex flex-col items-center justify-center text-muted-foreground">
              <ImageIcon
                aria-hidden="true"
                className="size-10 text-muted-foreground/50 mb-1"
              />
              <figcaption className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                // PRATINJAU DOKUMENTASI KEGIATAN
              </figcaption>
            </figure>

            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/40 p-3 rounded-none border border-border font-mono">
              <MapPin
                aria-hidden="true"
                className="size-4 text-primary shrink-0"
              />
              <address className="not-italic text-[11px]">
                Lokasi: {activeItem.location}
              </address>
            </div>

            <p className="text-sm text-foreground/90 leading-relaxed">
              {activeItem.description}
            </p>

            <div className="pt-3 border-t border-border flex items-center gap-2 text-xs text-primary font-mono font-medium">
              <CheckCircle2 aria-hidden="true" className="size-4 shrink-0" />
              <span>
                // Dokumentasi resmi kehidupan kampus SD Al-Birru Sukabumi
              </span>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
