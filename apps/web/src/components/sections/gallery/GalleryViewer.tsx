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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { GalleryItem } from "@/lib/content";

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
            <Button
              key={cat.id}
              type="button"
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat.id)}
              className="text-xs font-medium"
            >
              {cat.label}
            </Button>
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
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  onClick={() => setActiveItem(item)}
                  tabIndex={0}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveItem(item);
                    }
                  }}
                  className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl flex-1 flex"
                >
                  <Card className="flex-1 flex flex-col justify-between border-border bg-card shadow-sm hover:shadow-md transition-all overflow-hidden group">
                    <div>
                      {/* Image Placeholder */}
                      <figure className="relative aspect-[16/10] bg-muted border-b border-border p-6 flex flex-col items-center justify-center text-center group-hover:bg-muted/80 transition-colors">
                        <div
                          aria-hidden="true"
                          className="size-14 rounded-xl bg-background border border-border shadow-xs flex items-center justify-center text-primary group-hover:scale-105 transition-transform mb-2"
                        >
                          <ItemIcon className="size-7" />
                        </div>
                        <figcaption className="text-xs font-medium text-muted-foreground">
                          Dokumentasi Foto
                        </figcaption>

                        <span
                          aria-hidden="true"
                          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-lg bg-background/80 backdrop-blur-xs border border-border text-foreground shadow-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          <Maximize2 className="size-3.5" />
                        </span>
                      </figure>

                      {/* Content */}
                      <CardContent className="p-5 sm:p-6">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2.5">
                          <Badge variant="outline" className="text-xs">
                            {item.categoryLabel}
                          </Badge>
                          <div className="flex items-center gap-1.5">
                            <Calendar aria-hidden="true" className="size-3" />
                            <time dateTime={item.date}>{item.date}</time>
                          </div>
                        </div>

                        <h3
                          id={`gallery-${item.id}-title`}
                          className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug"
                        >
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </div>

                    <CardFooter className="px-5 sm:px-6 py-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin
                        aria-hidden="true"
                        className="size-3.5 shrink-0 text-primary"
                      />
                      <address className="not-italic truncate">
                        {item.location}
                      </address>
                    </CardFooter>
                  </Card>
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
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{activeItem.categoryLabel}</Badge>
                <span className="text-xs text-muted-foreground">•</span>
                <time
                  dateTime={activeItem.date}
                  className="text-xs text-muted-foreground"
                >
                  {activeItem.date}
                </time>
              </div>
              <DialogTitle className="text-xl font-bold leading-tight">
                {activeItem.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {activeItem.description}
              </DialogDescription>
            </DialogHeader>

            {/* Modal Image Placeholder */}
            <figure className="aspect-[16/9] w-full rounded-lg bg-muted border border-border flex flex-col items-center justify-center text-muted-foreground">
              <ImageIcon
                aria-hidden="true"
                className="size-10 text-muted-foreground/50 mb-1"
              />
              <figcaption className="text-xs font-medium text-muted-foreground">
                Pratinjau Dokumentasi Kegiatan
              </figcaption>
            </figure>

            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-lg border border-border">
              <MapPin
                aria-hidden="true"
                className="size-4 text-primary shrink-0"
              />
              <address className="not-italic">
                Lokasi: {activeItem.location}
              </address>
            </div>

            <p className="text-sm text-foreground/90 leading-relaxed">
              {activeItem.description}
            </p>

            <div className="pt-3 border-t border-border flex items-center gap-2 text-xs text-primary font-medium">
              <CheckCircle2 aria-hidden="true" className="size-4 shrink-0" />
              <span>
                Dokumentasi resmi pembelajaran dan kehidupan kampus SD Al-Birru
              </span>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
