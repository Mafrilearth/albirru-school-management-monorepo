"use client";

import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  svgClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  isDarkBackground?: boolean;
  ariaLabel?: string;
  title?: string;
  subtitle?: string;
}

export function BrandLogo({
  className,
  svgClassName,
  titleClassName,
  subtitleClassName,
  isDarkBackground = false,
  ariaLabel,
  title,
  subtitle,
}: BrandLogoProps) {
  const { t } = useLanguage();
  const displayTitle = title ?? t.brand.title;
  const displaySubtitle = subtitle ?? t.brand.subtitle;
  const displayAriaLabel = ariaLabel ?? t.brand.ariaLabel;
  return (
    <Link
      href="/"
      className={cn(
        "flex h-full items-center justify-center gap-3 px-4 sm:px-6 xl:px-8 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
      aria-label={displayAriaLabel}
    >
      <svg
        viewBox="6 4.5 88 116"
        className={cn("h-12 w-auto shrink-0", svgClassName)}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Unified Outer Shield (Black Border with sharp mitered 3 top corners) */}
        {/* We draw the path with a thick stroke to guarantee mathematically perfect uniform thickness everywhere. */}
        <path
          d="M 50 18 L 82 34 L 82 74 A 32 34 0 0 1 18 74 L 18 34 Z"
          className={cn(
            "fill-foreground stroke-foreground",
            isDarkBackground && "fill-white stroke-white",
          )}
          strokeWidth="24"
          strokeLinejoin="miter"
          strokeMiterlimit="4"
        />

        {/* Inner Shield (Amber/Yellow Base) */}
        {/* We draw the exact same path over it, filling it with yellow. This perfectly covers the inner half of the stroke. */}
        <path
          d="M 50 18 L 82 34 L 82 74 A 32 34 0 0 1 18 74 L 18 34 Z"
          className="fill-amber-400"
        />

        {/* Central Emblem: Kotak Tengah Sisi Lengkung (Arc R=28), Tepat 16 Lancip (Kardinal Terpanjang, Serong Panjang Setengah Diapit 2 Lancip Kecil) */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 50 43
             A 28 28 0 0 1 70 63
             A 28 28 0 0 1 50 83
             A 28 28 0 0 1 30 63
             A 28 28 0 0 1 50 43 Z
             M 50 40.5
             L 51.1 57.6
             L 54.0 53.3
             L 53.1 58.4
             L 61.0 52.0
             L 54.6 59.9
             L 59.7 59.0
             L 55.4 61.9
             L 72.5 63
             L 55.4 64.1
             L 59.7 67.0
             L 54.6 66.1
             L 61.0 74.0
             L 53.1 67.6
             L 54.0 72.7
             L 51.1 68.4
             L 50 85.5
             L 48.9 68.4
             L 46.0 72.7
             L 46.9 67.6
             L 39.0 74.0
             L 45.4 66.1
             L 40.3 67.0
             L 44.6 64.1
             L 27.5 63
             L 44.6 61.9
             L 40.3 59.0
             L 45.4 59.9
             L 39.0 52.0
             L 46.9 58.4
             L 46.0 53.3
             L 48.9 57.6 Z"
          className={cn(
            "fill-foreground",
            isDarkBackground && "fill-slate-950",
          )}
        />
      </svg>
      <div className="flex flex-col justify-center text-start select-none">
        <span
          className={cn(
            "font-sans font-black text-xl sm:text-2xl leading-none tracking-tight text-foreground transition-colors",
            isDarkBackground && "text-white",
            titleClassName,
          )}
        >
          {displayTitle}
        </span>
        <span
          className={cn(
            "font-mono text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground leading-none mt-1 sm:mt-1.5 transition-colors",
            isDarkBackground && "text-zinc-400",
            subtitleClassName,
          )}
        >
          {displaySubtitle}
        </span>
      </div>
    </Link>
  );
}
