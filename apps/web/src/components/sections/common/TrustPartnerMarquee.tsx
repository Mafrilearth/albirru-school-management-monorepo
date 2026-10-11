"use client";

import {
  Award,
  BookOpen,
  CheckCircle2,
  Compass,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import type React from "react";

interface TrustItem {
  icon: React.ElementType;
  label: string;
  sub: string;
}

const trustItems: TrustItem[] = [
  {
    icon: ShieldCheck,
    label: "KEMENDIKDASMEN RI",
    sub: "Curriculum Merdeka Resmi",
  },
  {
    icon: Award,
    label: "KEMENAG SUKABUMI",
    sub: "Bimbingan Tahfidz Al-Qur'an",
  },
  {
    icon: BookOpen,
    label: "JSIT INDONESIA",
    sub: "Jaringan Sekolah Islam Terpadu",
  },
  {
    icon: Compass,
    label: "SANAD TAHFIDZ",
    sub: "Talaqqi Riwayat Hafs Bersanad",
  },
  {
    icon: CheckCircle2,
    label: "BAN-S/M JABAR",
    sub: "Standar Mutu Terakreditasi",
  },
  {
    icon: HeartHandshake,
    label: "PARENTING SAHABAT ANAK",
    sub: "Kemitraan Positif Rumah & Sekolah",
  },
];

export function TrustPartnerMarquee() {
  return (
    <section className="py-8 bg-background border-b border-border overflow-hidden relative">
      {/* Subtle edge fades */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10"
      />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-12 sm:gap-16">
        {/* Track 1 */}
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`track-1-${idx}`}
              className="flex items-center gap-3 shrink-0 text-muted-foreground hover:text-foreground transition-colors cursor-default"
            >
              <div className="size-9 rounded-lg bg-muted border border-border flex items-center justify-center text-primary shrink-0">
                <Icon className="size-4.5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-semibold text-foreground tracking-wide">
                  {item.label}
                </span>
                <span className="block text-[11px] text-muted-foreground">
                  {item.sub}
                </span>
              </div>
            </div>
          );
        })}

        {/* Track 2 */}
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`track-2-${idx}`}
              className="flex items-center gap-3 shrink-0 text-muted-foreground hover:text-foreground transition-colors cursor-default"
            >
              <div className="size-9 rounded-lg bg-muted border border-border flex items-center justify-center text-primary shrink-0">
                <Icon className="size-4.5" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-semibold text-foreground tracking-wide">
                  {item.label}
                </span>
                <span className="block text-[11px] text-muted-foreground">
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
