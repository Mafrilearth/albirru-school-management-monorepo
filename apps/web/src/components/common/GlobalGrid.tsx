import React from "react";

export function GlobalGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden flex items-center justify-center">
      {/* Full-bleed Grid Box Pattern covering the entire screen, acting as the absolute wallpaper */}
      <div 
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          backgroundPosition: "calc(50% + 16px) top",
        }}
      />
    </div>
  );
}
