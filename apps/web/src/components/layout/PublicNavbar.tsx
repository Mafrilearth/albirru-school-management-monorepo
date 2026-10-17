"use client";

import { BrandLogo } from "@/components/common/BrandLogo";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { ThemeToggle } from "@/components/common/ThemeToggle";

/**
 * Minimalist Utility Header
 * Architecture: Functional Minimalism with Tactile Micro-Interactions
 * Standards:
 * - Mathematical dimensions: Precise 64px height (h-16) on an 8px modular baseline.
 * - Micro-interactions: Tactile active press states (active:scale-[0.96]) and smooth border transitions.
 * - Left flank: Official school shield emblem and institution name.
 * - Right flank: Trilingual Language Switcher (ID | AR | EN) and Dark/Light Mode Toggle.
 */
export function PublicNavbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md transition-colors duration-200">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Institutional Identity (Left Anchor) */}
        <div className="flex items-center justify-start h-full shrink-0 group">
          <BrandLogo
            className="px-0 sm:px-0 xl:px-0 active:scale-[0.98] transition-transform duration-150"
            svgClassName="h-9 sm:h-10 w-auto group-hover:brightness-105 transition-all duration-200"
            titleClassName="text-lg sm:text-xl font-black tracking-tight"
            subtitleClassName="text-[8.5px] sm:text-[9.5px] tracking-[0.2em]"
          />
        </div>

        {/* System Utility Controls (Right Anchor) */}
        <div className="flex items-center justify-end h-full gap-2 sm:gap-2.5 shrink-0">
          <LanguageSwitcher triggerClassName="h-9 sm:h-10 px-2.5 sm:px-3 gap-1.5 rounded-lg border border-border bg-card/60 hover:bg-muted hover:border-foreground/20 active:scale-[0.96] font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-all duration-150 cursor-pointer" />
          <ThemeToggle triggerClassName="size-9 sm:size-10 p-0 rounded-lg border border-border bg-card/60 hover:bg-muted hover:border-foreground/20 active:scale-[0.96] flex items-center justify-center transition-all duration-150 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
