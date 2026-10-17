"use client";

import { Menu } from "lucide-react";
import { motion } from "motion/react";
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
import { appleSpringSnappy } from "@/lib/motion";
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
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] min-h-16 items-stretch justify-between">
        {/* Brand Area (Left) */}
        <div className="flex items-center justify-start h-full">
          <BrandLogo className="px-0 sm:px-0 xl:px-0" />
        </div>

        {/* Center Column: Grid Navigation with Apple Spring Indicator */}
        <nav className="hidden xl:grid grid-cols-6 min-h-16 items-stretch">
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
                  "relative flex items-center justify-center px-5 py-2 text-sm font-medium transition-colors select-none text-center h-full",
                  isActive
                    ? "text-foreground font-semibold bg-muted/40"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/30",
                )}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
                    transition={appleSpringSnappy}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Global Controls & CTA (Right) */}
        <div className="flex items-stretch justify-end h-full gap-0">
          <LanguageSwitcher />
          <ThemeToggle />

          <div className="hidden sm:flex items-center pl-3 pr-1">
            <Button
              render={<Link href="/admissions" />}
              nativeButton={false}
              size="sm"
              className="font-bold text-xs px-4 rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background border border-transparent shadow-none"
            >
              {t.actions.apply}
            </Button>
          </div>

          {/* Mobile/Tablet Menu Trigger */}
          <Sheet>
            <SheetTrigger className="xl:hidden inline-flex items-center justify-center px-3 h-full rounded-none border-0 bg-transparent hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer">
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
                          "px-4 py-3 text-base font-medium rounded-none border-b border-border transition-colors",
                          isActive
                            ? "bg-muted text-foreground font-semibold border-l-2 border-l-foreground"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Button
                  render={<Link href="/admissions" />}
                  nativeButton={false}
                  className="w-full font-bold rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background border border-transparent shadow-none"
                >
                  {t.actions.apply}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
