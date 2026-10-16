"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useLanguage } from "@/lib/i18n/context";

export function AnnouncementBanner() {
  const { t } = useLanguage();

  return (
    <aside
      aria-label={t.badges.admissionsOpen}
      className="w-full bg-muted/40 text-foreground border-b border-border relative z-50 transition-colors"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-center text-center">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-medium text-foreground">
          <span className="size-1.5 bg-primary shrink-0" aria-hidden="true" />
          <span className="font-semibold text-foreground tracking-tight">
            {t.badges.admissionsOpen}
          </span>
          <span className="text-border hidden sm:inline" aria-hidden="true">
            |
          </span>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-1 font-bold text-primary hover:text-foreground underline underline-offset-4 decoration-primary/40 hover:decoration-foreground transition-colors group shrink-0"
          >
            <span>{t.actions.apply}</span>
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
