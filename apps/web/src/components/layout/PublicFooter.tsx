"use client";

import { useLanguage } from "@/lib/i18n/context";

/**
 * Public Footer Component
 * Architecture: Zero-Redundancy Minimalist Single-Line Bar
 * Principles Enforced:
 * - NO repeated phone number or email (exclusively authority of Admissions/Contact section).
 * - NO repeated school logo (exclusively anchored in header).
 * - NO repeated NPSN or accreditation badges.
 * - NO duplicate scroll-to-top buttons or text.
 * - Pristine, flat, clean single-page anchor navigation and official copyright.
 */
export function PublicFooter() {
  const currentYear = new Date().getFullYear();
  const { t, locale } = useLanguage();
  const localizedYear = new Intl.NumberFormat(
    locale === "ar" ? "ar-u-nu-arab" : "en-US",
    { useGrouping: false },
  ).format(currentYear);

  return (
    <footer className="w-full bg-card border-t border-border text-muted-foreground">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
        {/* Single-Page Section Anchors */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center sm:justify-start gap-6 font-semibold"
        >
          <a
            href="#hero"
            className="hover:text-foreground hover:-translate-y-0.5 active:scale-95 transition-all duration-150 ease-out inline-block"
          >
            {t.nav.home}
          </a>
          <a
            href="#curriculum"
            className="hover:text-foreground hover:-translate-y-0.5 active:scale-95 transition-all duration-150 ease-out inline-block"
          >
            {t.nav.academics}
          </a>
          <a
            href="#facilities"
            className="hover:text-foreground hover:-translate-y-0.5 active:scale-95 transition-all duration-150 ease-out inline-block"
          >
            {t.nav.services}
          </a>
          <a
            href="#admissions"
            className="hover:text-foreground hover:-translate-y-0.5 active:scale-95 transition-all duration-150 ease-out inline-block"
          >
            {t.nav.applyOnline}
          </a>
        </nav>

        {/* Official Legal Copyright Only */}
        <p className="text-muted-foreground text-center sm:text-end">
          © {localizedYear} {t.contact.copyright}
        </p>
      </div>
    </footer>
  );
}
