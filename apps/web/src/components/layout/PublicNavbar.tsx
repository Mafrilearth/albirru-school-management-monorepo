"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BrandLogo } from "@/components/common/BrandLogo";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { NotificationBell } from "@/components/common/NotificationBell";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLanguage } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

export function PublicNavbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/programs", label: t.nav.programs },
    { href: "/news", label: t.nav.news },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Brand Area */}
        <div className="flex items-center gap-6">
          <BrandLogo />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors select-none",
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Global Controls & CTA (Desktop & Mobile) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <NotificationBell />
          <LanguageSwitcher />
          <ThemeToggle />

          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="ghost"
            size="sm"
            className="hidden md:inline-flex font-medium rounded-full px-4 active:scale-[0.98] transition-all"
          >
            <span>{t.nav.contactUs}</span>
          </Button>

          <Button
            render={<Link href="/admissions" />}
            nativeButton={false}
            variant="default"
            size="sm"
            className="hidden sm:inline-flex font-semibold shadow-sm shadow-primary/20 rounded-full px-5 active:scale-[0.98] transition-all"
          >
            <span>{t.nav.applyOnline}</span>
          </Button>

          {/* Mobile/Tablet Menu Trigger */}
          <Sheet>
            <SheetTrigger className="xl:hidden inline-flex items-center justify-center size-9 rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors">
              <Menu className="size-4" />
              <span className="sr-only">{t.nav.openMenu}</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="pb-4 border-b border-border text-start">
                  <SheetTitle className="text-base font-bold text-foreground">
                    {t.nav.menuTitle}
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-1 py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                        pathname === link.href
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button
                  render={<Link href="/admissions" />}
                  nativeButton={false}
                  className="w-full font-semibold shadow-sm"
                >
                  {t.nav.applyOnline}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
