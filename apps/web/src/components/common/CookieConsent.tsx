"use client";

import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/context";

const CONSENT_STORAGE_KEY = "albirru_cookie_consent";

export function CookieConsent() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (!consent) {
        // Show banner after brief delay to prevent layout thrash
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable
    }
  }, []);

  const handleConsent = (level: "all" | "essential") => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, level);
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Pemberitahuan Privasi dan Cookie"
      role="region"
      className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-md p-4 sm:px-8 py-4 transition-transform duration-300 animate-in slide-in-from-bottom"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex size-8 shrink-0 items-center justify-center bg-primary/10 text-primary border border-primary/20">
            <ShieldCheck className="size-4" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
              {t.cookie.title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
              {t.cookie.description}{" "}
              <Link
                href="/about"
                className="text-primary underline underline-offset-2 hover:text-primary/80 font-medium"
              >
                {t.cookie.privacyPolicy}
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end md:self-center shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleConsent("essential")}
            className="rounded-none border-border font-mono text-xs h-8 px-3.5 hover:bg-muted"
          >
            {t.cookie.essentialOnly}
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => handleConsent("all")}
            className="rounded-none font-mono text-xs h-8 px-4"
          >
            {t.cookie.acceptAll}
          </Button>
        </div>
      </div>
    </aside>
  );
}
