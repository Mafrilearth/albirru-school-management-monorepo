"use client";

import React from "react";
import {
  ShieldCheck,
  BookOpen,
  Award,
  CheckCircle2,
  HeartHandshake,
  Compass,
} from "lucide-react";

interface TrustItem {
  icon: React.ElementType;
  label: string;
  sub: string;
}

const trustItems: TrustItem[] = [
  { icon: ShieldCheck, label: "KEMENDIKDASMEN RI", sub: "Curriculum Merdeka Resmi" },
  { icon: Award, label: "KEMENAG SUKABUMI", sub: "Bimbingan Tahfidz Al-Qur'an" },
  { icon: BookOpen, label: "JSIT INDONESIA", sub: "Jaringan School Islam Terpadu" },
  { icon: Compass, label: "SANAD TAHFIDZ", sub: "Talaqqi Riwayat Hafs Bersanad" },
  { icon: CheckCircle2, label: "BAN-S/M JABAR", sub: "Standar Mutu Terakreditasi" },
  { icon: HeartHandshake, label: "PARENTING SAHABAT ANAK", sub: "Kemitraan Positif Rumah & School" },
];

export function TrustPartnerMarquee() {
  return (
    <section className="py-8 sm:py-10 bg-transparent border-b border-slate-200/80 dark:border-slate-700/80 overflow-hidden relative">
      {/* Subtle edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF9F5] to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF9F5] to-transparent z-10"
      />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-16 sm:gap-20">
        {/* First track */}
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`track-1-${idx}`}
              className="flex items-center gap-3.5 shrink-0 text-slate-700 dark:text-slate-300 opacity-80 hover:opacity-100 transition-opacity cursor-default"
            >
              <div className="size-9 rounded-none bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 shadow-2xs">
                <Icon className="size-4.5 text-amber-600" />
              </div>
              <div className="text-left font-mono">
                <span className="block text-xs font-bold text-slate-900 dark:text-slate-50 tracking-wider">
                  {item.label}
                </span>
                <span className="block text-[11px] text-slate-500 font-sans">
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}

        {/* Second track for seamless loop */}
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`track-2-${idx}`}
              className="flex items-center gap-3.5 shrink-0 text-slate-700 dark:text-slate-300 opacity-80 hover:opacity-100 transition-opacity cursor-default"
            >
              <div className="size-9 rounded-none bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 shadow-2xs">
                <Icon className="size-4.5 text-amber-600" />
              </div>
              <div className="text-left font-mono">
                <span className="block text-xs font-bold text-slate-900 dark:text-slate-50 tracking-wider">
                  {item.label}
                </span>
                <span className="block text-[11px] text-slate-500 font-sans">
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
