import React from "react";
import { PublicNavbar } from "@/components/layout/PublicNavbar";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-500 text-xs font-mono font-bold tracking-wider uppercase border border-amber-500/20">
            <span className="size-1.5 bg-amber-500 animate-pulse" />
            Internal Documentation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight">
            Design System <br />
            <span className="text-slate-400 dark:text-slate-500">Multidisciplinary Showcase</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Ini adalah galeri hidup dari token desain yang telah kita bahas. Semua elemen di sini didukung oleh hukum psikologi kognitif (Fitts's Law, Hick's Law) dan rasio spasial matematika.
          </p>
        </div>

        {/* 1. Color Palette */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight border-b border-border pb-2">1. Color Palette & Tokens (OKLCH)</h2>
            <p className="text-sm text-muted-foreground mt-2 font-mono">Prinsip: Kontras Aksesibilitas (WCAG 2.2) & Psikologi Warna</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="h-24 w-full bg-primary border border-border flex items-end p-3 shadow-sm">
                <span className="text-primary-foreground font-mono text-xs font-bold">var(--primary)</span>
              </div>
              <div>
                <p className="font-bold text-sm">Al-Birru Solar Gold</p>
                <p className="text-xs text-muted-foreground">#F59E0B / Aksen Aksi (CTA)</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="h-24 w-full bg-background border border-border flex items-end p-3 shadow-sm">
                <span className="text-foreground font-mono text-xs font-bold">var(--background)</span>
              </div>
              <div>
                <p className="font-bold text-sm">Alabaster / Obsidian</p>
                <p className="text-xs text-muted-foreground">Kanvas Utama Web</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-24 w-full bg-card border border-border flex items-end p-3 shadow-sm">
                <span className="text-card-foreground font-mono text-xs font-bold">var(--card)</span>
              </div>
              <div>
                <p className="font-bold text-sm">Crisp Surface</p>
                <p className="text-xs text-muted-foreground">Permukaan Komponen</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-24 w-full bg-emerald-700 dark:bg-emerald-600 border border-border flex items-end p-3 shadow-sm">
                <span className="text-white font-mono text-xs font-bold">Islamic Emerald</span>
              </div>
              <div>
                <p className="font-bold text-sm">Tahfidz Accent</p>
                <p className="text-xs text-muted-foreground">#065F46 / Lencana Agama</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight border-b border-border pb-2">2. Typography (Modular Major Third: 1.250)</h2>
            <p className="text-sm text-muted-foreground mt-2 font-mono">Prinsip: Hirarki Visual & Keterbacaan Optik</p>
          </div>

          <div className="space-y-6 divide-y divide-border">
            <div className="py-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-32 text-xs font-mono text-muted-foreground uppercase">Display 1</div>
              <div className="text-5xl lg:text-6xl font-black tracking-tight">SD Al-Birru</div>
            </div>
            <div className="py-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-32 text-xs font-mono text-muted-foreground uppercase">Heading 1</div>
              <div className="text-3xl lg:text-4xl font-bold tracking-tight">Pendaftaran PPDB</div>
            </div>
            <div className="py-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-32 text-xs font-mono text-muted-foreground uppercase">Heading 2</div>
              <div className="text-2xl lg:text-3xl font-bold leading-snug">Kurikulum Merdeka Belajar</div>
            </div>
            <div className="py-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-32 text-xs font-mono text-muted-foreground uppercase">Body Base</div>
              <div className="text-base text-muted-foreground leading-relaxed max-w-2xl">Membentuk generasi Qur'ani yang berakhlak mulia dan kritis. Ini adalah teks paragraf standar berukuran 16px.</div>
            </div>
            <div className="py-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-32 text-xs font-mono text-muted-foreground uppercase">Caption / Meta</div>
              <div className="text-xs font-bold font-mono tracking-wider uppercase text-amber-600">Terakreditasi A</div>
            </div>
          </div>
        </section>

        {/* 3. Liquid Glass & UI Elements */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight border-b border-border pb-2">3. Meta-Material & Interaksi (Apple HIG)</h2>
            <p className="text-sm text-muted-foreground mt-2 font-mono">Prinsip: Kedalaman Spasial (Z-Index) & Fitts's Law (Target Sentuh 48px)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Liquid Glass Showcase */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Kaca Transparan (Liquid Glass)</h3>
              
              {/* Background to show transparency */}
              <div className="relative p-12 bg-linear-to-br from-amber-500 via-emerald-600 to-slate-900 border border-border flex items-center justify-center overflow-hidden">
                {/* Text behind the glass */}
                <span className="absolute text-white/50 text-6xl font-black -rotate-12">AL-BIRRU</span>
                
                {/* The Glass Element */}
                <div className="liquid-glass-regular specular-rim p-6 w-full max-w-sm relative z-10 text-center">
                  <h4 className="font-bold text-foreground">Menu Transparan</h4>
                  <p className="text-xs text-foreground/70 mt-1">Sistem ini mem-blur latar belakang secara real-time. Cocok untuk Navbar dan Floating Badge.</p>
                </div>
              </div>
            </div>

            {/* Buttons & Fitts's Law */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Interaksi Fitts's Law (Min 48px)</h3>
              
              <div className="p-8 bg-card border border-border space-y-6">
                <div>
                  <p className="text-xs text-muted-foreground mb-3 font-mono">Primary Action (CTA) - 52px Height</p>
                  <button className="flex items-center justify-center gap-2 bg-linear-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold px-8 h-13 w-full sm:w-auto shadow-md transition-transform hover:scale-105 active:scale-95">
                    Daftar PPDB Sekarang
                  </button>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-3 font-mono">Secondary Action - 48px Height</p>
                  <button className="flex items-center justify-center gap-2 bg-transparent border-2 border-slate-200 dark:border-slate-800 text-foreground font-semibold px-6 h-12 w-full sm:w-auto transition-colors hover:bg-slate-50 dark:hover:bg-slate-900">
                    Pelajari Kurikulum
                  </button>
                </div>

                <div className="p-4 bg-amber-500/10 border-l-2 border-amber-500">
                  <p className="text-xs text-amber-700 dark:text-amber-400 leading-snug">
                    <strong className="font-bold">Fitts's Law:</strong> Tinggi minimum tombol di atas dirancang spesifik agar jempol manusia tidak kesulitan saat menekan dari layar HP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
