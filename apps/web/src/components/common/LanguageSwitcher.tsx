"use client";

import { Check, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/dictionary";
import { cn } from "@/lib/utils";

const LANGUAGE_OPTIONS: {
  code: Locale;
  label: string;
  nativeLabel: string;
  flag: string;
}[] = [
  {
    code: "id",
    label: "Indonesia",
    nativeLabel: "Bahasa Indonesia",
    flag: "🇮🇩",
  },
  { code: "ar", label: "Arab", nativeLabel: "العربية", flag: "🇸🇦" },
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
];

interface LanguageSwitcherProps {
  triggerClassName?: string;
}

/**
 * Language Switcher Component
 * Supports trilingual localization (ID, AR, EN) with seamless URL synchronization.
 */
export function LanguageSwitcher({
  triggerClassName,
}: LanguageSwitcherProps = {}) {
  const { locale, setLocale, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const current =
    LANGUAGE_OPTIONS.find((option) => option.code === locale) ||
    LANGUAGE_OPTIONS[0];

  const handleSelectLanguage = (newLocale: Locale) => {
    setLocale(newLocale);
    // Strip existing locale prefix from pathname if present
    const cleanPath = pathname.replace(/^\/(?:id|ar|en)(?=\/|$)/, "") || "/";
    const targetUrl = `/${newLocale}${cleanPath === "/" ? "" : cleanPath}`;
    router.push(targetUrl);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            aria-label={t.nav.changeLanguage}
            className={cn(
              "h-full px-3 gap-1.5 rounded-lg border-0 font-mono text-xs uppercase tracking-wider hover:bg-muted/40 shadow-none bg-transparent",
              triggerClassName,
            )}
          />
        }
      >
        <Globe className="size-4 text-muted-foreground" />
        <span className="font-semibold">{current.code.toUpperCase()}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={6}
        className="min-w-[11rem] w-auto rounded-lg border border-border bg-popover p-1 shadow-none"
      >
        {LANGUAGE_OPTIONS.map((option) => {
          const isSelected = option.code === locale;
          return (
            <DropdownMenuItem
              key={option.code}
              onClick={() => handleSelectLanguage(option.code)}
              className="flex items-center justify-between px-3 py-2 text-xs rounded-md cursor-pointer hover:bg-muted data-[highlighted]:bg-muted transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>{option.flag}</span>
                <span
                  className={
                    isSelected ? "font-bold text-primary" : "text-foreground"
                  }
                >
                  {option.nativeLabel}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                  {option.code}
                </span>
                {isSelected && <Check className="size-3 text-primary" />}
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
