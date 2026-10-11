import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";


interface BrandLogoProps {
  className?: string;
  isDarkBackground?: boolean;
}

export function BrandLogo({ className, isDarkBackground = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex h-full items-center justify-center gap-3 px-4 sm:px-6 xl:px-8 outline-none",
        className
      )}
      aria-label="Kembali ke Beranda SD Al-Birru"
    >
      <svg
        viewBox="0 0 100 135"
        className="h-12 w-auto shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Unified Outer Shield (Black Border) */}
        {/* We draw the path with a thick stroke to guarantee mathematically perfect uniform thickness everywhere. */}
        <path 
          d="M 50 18 L 82 34 L 82 74 A 32 34 0 0 1 18 74 L 18 34 Z" 
          className="fill-slate-900 dark:fill-slate-100 stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="24"
          strokeLinejoin="round"
        />
        
        {/* Inner Shield (Amber/Yellow Base) */}
        {/* We draw the exact same path over it, filling it with yellow. This perfectly covers the inner half of the stroke. */}
        <path 
          d="M 50 18 L 82 34 L 82 74 A 32 34 0 0 1 18 74 L 18 34 Z" 
          className="fill-amber-400"
        />

        {/* Central Emblem: 45-Degree Diamond with 16-Point Star Cutout */}
        <path 
          fillRule="evenodd" 
          clipRule="evenodd"
          d="M 50 43 L 70 63 L 50 83 L 30 63 Z
             M 50 41 L 50.9 58.6 L 53.4 54.7 L 52.5 59.3 L 59.2 53.8 L 53.7 60.5 L 58.3 59.6 L 54.4 62.1 
             L 72 63 L 54.4 63.9 L 58.3 66.4 L 53.7 65.5 L 59.2 72.2 L 52.5 66.7 L 53.4 71.3 L 50.9 67.4 
             L 50 85 L 49.1 67.4 L 46.6 71.3 L 47.5 66.7 L 40.8 72.2 L 46.3 65.5 L 41.7 66.4 L 45.6 63.9 
             L 28 63 L 45.6 62.1 L 41.7 59.6 L 46.3 60.5 L 40.8 53.8 L 47.5 59.3 L 46.6 54.7 L 49.1 58.6 Z"
          className="fill-slate-900 dark:fill-slate-100"
        />
      </svg>
      <div className="flex flex-col justify-center text-start">
        <span className="font-sans font-black text-lg xl:text-xl leading-none text-slate-900 dark:text-slate-100 tracking-tight">
          SD Al-Birru
        </span>
        <span className="font-mono text-[9px] xl:text-[10px] font-bold text-amber-500 uppercase tracking-widest mt-1">
          NPSN: 70010111
        </span>
      </div>
    </Link>
  );
}
