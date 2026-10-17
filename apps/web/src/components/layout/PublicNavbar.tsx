"use client";

import { Menu, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navigation";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

export function PublicNavbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/profile", label: t.nav.profile },
    { href: "/academics", label: t.nav.academics },
    { href: "/students", label: t.nav.students },
    { href: "/news", label: t.nav.news },
    { href: "/services", label: t.nav.services },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 h-20 flex items-center justify-between">
        {/* Brand Area (Left: Anchor Column) */}
        <div className="flex items-center justify-start h-full shrink-0">
          <BrandLogo
            className="px-0 sm:px-0 xl:px-0"
            svgClassName="h-11 sm:h-12 w-auto"
            titleClassName="text-xl sm:text-2xl font-black tracking-tight"
            subtitleClassName="text-[9.5px] sm:text-[10px] tracking-[0.22em]"
          />
        </div>

        {/* Center Navigation: Clean, Symmetrical, Uncluttered Swiss Modernist Typography (Default Animations) */}
        <nav className="hidden xl:flex items-center justify-center h-full gap-7 xl:gap-8 2xl:gap-9">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex items-center justify-center py-2 text-[15px] select-none text-center h-full transition-colors duration-150 border-b-2",
                  isActive
                    ? "text-foreground font-bold border-b-foreground"
                    : "text-muted-foreground hover:text-foreground font-medium border-b-transparent",
                )}
              >
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Global Controls & Admissions CTA (Right: Utilities Column) */}
        <div className="flex items-center justify-end h-full gap-2 sm:gap-2.5 shrink-0">
          {/* Language Switcher */}
          <LanguageSwitcher triggerClassName="h-10 px-3 gap-1.5 rounded-none border border-border bg-card/60 hover:bg-muted font-mono text-xs font-semibold uppercase tracking-wider text-foreground transition-colors duration-150 cursor-pointer" />

          {/* Theme Toggle */}
          <ThemeToggle triggerClassName="size-10 p-0 rounded-none border border-border bg-card/60 hover:bg-muted flex items-center justify-center transition-colors duration-150 cursor-pointer" />

          {/* Admissions High-Converting CTA Button (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center ml-1">
            <Button
              render={<Link href="/admissions" />}
              nativeButton={false}
              className="h-10 sm:h-11 px-5 sm:px-6 font-bold text-xs uppercase tracking-wider rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background border border-transparent shadow-none transition-all duration-150 flex items-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <Sparkles aria-hidden="true" className="size-3.5 shrink-0" />
              <span>{t.actions.apply}</span>
            </Button>
          </div>

          {/* Mobile/Tablet Menu Trigger (Accessible Drawer) */}
          <Sheet>
            <SheetTrigger className="xl:hidden size-10 rounded-none border border-border bg-card/60 hover:bg-muted flex items-center justify-center transition-colors duration-150 cursor-pointer ml-1 active:scale-[0.98]">
              <Menu className="size-5" />
              <span className="sr-only">{t.nav.openMenu}</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[85vw] max-w-xs sm:max-w-sm p-6 flex flex-col justify-between rounded-none border-l border-border"
            >
              <div>
                <SheetHeader className="pb-4 border-b border-border text-start">
                  <SheetTitle className="text-base font-bold text-foreground">
                    {t.nav.menuTitle}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 py-4">
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href !== "/" &&
                        pathname.startsWith(`${link.href}/`));
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center px-4 py-3.5 text-base font-medium rounded-none border-b border-border transition-colors duration-150",
                          isActive
                            ? "bg-muted text-foreground font-bold border-l-2 border-l-primary"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                        )}
                      >
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button
                  render={<Link href="/admissions" />}
                  nativeButton={false}
                  className="h-11 w-full font-bold text-xs uppercase tracking-wider rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background border border-transparent shadow-none transition-colors duration-150 active:scale-[0.98]"
                >
                  <Sparkles aria-hidden="true" className="size-3.5 shrink-0" />
                  <span>{t.actions.apply}</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
