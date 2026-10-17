"use client";

import { Award, Clock, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { CopyPhoneButton } from "./CopyPhoneButton";

export function PublicFooter() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-background text-muted-foreground relative overflow-hidden">
      {/* Upper Footer Columns — Flush in Grid with 1px Shared Borders */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 divide-y md:divide-y-0 lg:divide-x divide-border border-b border-border bg-card">
        {/* Column 1: School Identity & Mission (lg:col-span-4) */}
        <div className="lg:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <BrandLogo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Sekolah Dasar Islam Terpadu yang mengintegrasikan adab mulia,
              bimbingan tahfidzul Qur&apos;an, dan kurikulum sains modern di
              Sukabumi.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge
              variant="outline"
              className="gap-1.5 font-mono text-[11px] uppercase tracking-wider rounded-none border-border"
            >
              <ShieldCheck
                aria-hidden="true"
                className="size-3.5 text-emerald-600"
              />
              <span>Terdaftar Resmi</span>
            </Badge>
            <Badge
              variant="outline"
              className="gap-1.5 font-mono text-[11px] uppercase tracking-wider rounded-none border-border"
            >
              <Award aria-hidden="true" className="size-3.5 text-emerald-600" />
              <span>Kurikulum Terpadu</span>
            </Badge>
          </div>
        </div>

        {/* Column 2: Navigation Links (lg:col-span-2) */}
        <nav
          aria-label="Footer Navigation"
          className="lg:col-span-2 p-6 sm:p-8 flex flex-col gap-4"
        >
          <span className="text-foreground text-xs font-mono uppercase tracking-wider font-semibold">
            Navigasi
          </span>
          <ul className="flex flex-col gap-2.5 text-sm list-none p-0 m-0">
            {[
              { label: t.nav.home, href: "/" },
              { label: t.nav.profile, href: "/profile" },
              { label: t.nav.academics, href: "/academics" },
              { label: t.nav.students, href: "/students" },
              { label: t.nav.news, href: "/news" },
              { label: t.nav.services, href: "/services" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <span className="size-1 bg-muted-foreground/40" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3: Program Utama (lg:col-span-3) */}
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col gap-4">
          <span className="text-foreground text-xs font-mono uppercase tracking-wider font-semibold">
            Program Utama
          </span>
          <ul className="flex flex-col gap-2.5 text-sm list-none p-0 m-0">
            <li className="flex items-start gap-2">
              <span className="size-1.5 rounded-none bg-muted-foreground/60 mt-2 shrink-0" />
              <span>Tahfidzul Qur&apos;an Talaqqi Bersanad</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="size-1.5 rounded-none bg-muted-foreground/60 mt-2 shrink-0" />
              <span>Pendidikan Adab &amp; Karakter Islami</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="size-1.5 rounded-none bg-muted-foreground/60 mt-2 shrink-0" />
              <span>Shalat Berjamaah Tepat Waktu</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="size-1.5 rounded-none bg-muted-foreground/60 mt-2 shrink-0" />
              <span>Inkuiri Sains &amp; Logika Komputasi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="size-1.5 rounded-none bg-muted-foreground/60 mt-2 shrink-0" />
              <span>Komunikasi Bahasa Arab &amp; Inggris</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Kontak & Informasi (lg:col-span-3) */}
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col gap-4">
          <span className="text-foreground text-xs font-mono uppercase tracking-wider font-semibold">
            Kontak &amp; Layanan
          </span>
          <address className="not-italic flex flex-col gap-3 text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="size-4 text-muted-foreground mt-0.5 shrink-0" />
              <span className="leading-snug">
                Kp. Cisande, Cijalingan, Cicantayan, Sukabumi, Jawa Barat
              </span>
            </div>

            <div className="flex items-center justify-between gap-2 bg-muted/30 p-2.5 rounded-none border border-border">
              <div className="flex items-center gap-2">
                <Phone className="size-3.5 text-foreground shrink-0" />
                <span className="text-foreground font-mono font-medium text-xs">
                  0812-3456-7890
                </span>
              </div>
              <CopyPhoneButton />
            </div>

            <div className="flex items-center gap-2">
              <Mail className="size-4 text-muted-foreground shrink-0" />
              <a
                href="mailto:info@sdalbirru.sch.id"
                className="hover:text-foreground transition-colors text-xs font-mono"
              >
                info@sdalbirru.sch.id
              </a>
            </div>

            <div className="flex items-start gap-2 text-xs">
              <Clock className="size-4 text-muted-foreground mt-0.5 shrink-0" />
              <div>
                <p>Senin – Jumat: 07:30 – 15:00 WIB</p>
                <p className="text-muted-foreground/80 mt-0.5">
                  Sabtu: Dengan Janji Temu
                </p>
              </div>
            </div>
          </address>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar — Flush in Grid with Clearance for Floating Bottom Dock */}
      <div className="w-full p-6 pb-20 sm:pb-24 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground bg-muted/10">
        <p>
          © {currentYear} Sekolah Dasar Islam Al-Birru. Seluruh hak cipta
          dilindungi.
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/profile"
            className="hover:text-foreground transition-colors uppercase tracking-wider"
          >
            {t.nav.profile}
          </Link>
          <Link
            href="/services"
            className="hover:text-foreground transition-colors uppercase tracking-wider"
          >
            {t.nav.services}
          </Link>
          <Link
            href="/admin"
            className="hover:text-foreground transition-colors uppercase tracking-wider"
          >
            Portal Masuk
          </Link>
        </div>
      </div>
    </footer>
  );
}
