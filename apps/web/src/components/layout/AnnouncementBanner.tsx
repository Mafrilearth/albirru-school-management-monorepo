"use client";

import React from "react";
import Link from "next/link";
import { Megaphone } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <div className="w-full bg-amber-400 text-slate-900 border-b border-amber-500 relative z-50">
      <Link
        href="/admissions"
        className="block py-2 hover:bg-amber-300 focus:outline-none focus:bg-amber-300 group"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center md:text-start">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs font-bold font-mono uppercase tracking-widest leading-tight text-slate-900">
            <Megaphone className="size-4 shrink-0" />
            <span>Pendaftaran Siswa Baru TP 2026/2027 Telah Dibuka</span>
          </div>
          <div className="inline-flex items-center justify-center text-xs font-bold font-mono uppercase tracking-widest bg-slate-900 text-slate-50 group-hover:bg-slate-800 px-3 py-1 shrink-0 whitespace-nowrap shadow-none rounded-none border border-slate-900">
            <span>Daftar Sekarang</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
