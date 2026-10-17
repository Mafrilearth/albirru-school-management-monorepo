"use client";

import {
  GraduationCap,
  HeartHandshake,
  Home,
  Menu,
  Newspaper,
  School,
  Sparkles,
  Users,
} from "lucide-react";
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
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/profile", label: t.nav.profile, icon: School },
    { href: "/academics", label: t.nav.academics, icon: GraduationCap },
    { href: "/students", label: t.nav.students, icon: Users },
    { href: "/news", label: t.nav.news, icon: Newspaper },
    { href: "/services", label: t.nav.services, icon: HeartHandshake },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/85">
      <div className="w-full px-3.5 sm:px-6 lg:px-8 2xl:px-12 flex xl:grid xl:grid-cols-[auto_1fr_auto] h-18 sm:h-20 lg:h-[88px] items-stretch justify-between">
        {/* Brand Area (Left: Anchor Column) */}
        <div className="flex items-center justify-start h-full pr-2 sm:pr-4 lg:pr-8 shrink-0">
          <BrandLogo
            className="px-0 sm:px-0 xl:px-0"
            svgClassName="h-10 sm:h-12 lg:h-13 w-auto"
            titleClassName="text-lg sm:text-2xl"
            subtitleClassName="text-[8.5px] sm:text-[10.5px]"
          />
        </div>

        {/* Center Column: Symmetrical Swiss Modernist Bento Grid (6 Equal Columns, 1px Hairline Structural Delineation) */}
        <nav className="hidden xl:grid grid-cols-6 h-full items-stretch divide-x divide-border/80 border-x border-border/80 max-w-4xl mx-auto w-full">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "group relative flex items-center justify-center gap-2.5 px-3.5 2xl:px-5 py-2 text-[14.5px] 2xl:text-[15.5px] font-semibold transition-all select-none text-center h-full",
                  isActive
                    ? "text-foreground font-bold bg-muted/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40",
                )}
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "size-5 shrink-0 transition-transform duration-200 group-hover:scale-110",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground",
                  )}
                />
                <span className="relative z-10 whitespace-nowrap">
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="active-navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary"
                    transition={appleSpringSnappy}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Global Controls & High-Converting CTA (Right: Utilities Column) */}
        <div className="flex items-center justify-end h-full gap-1.5 sm:gap-2.5 lg:gap-3.5 pl-2 sm:pl-4 lg:pl-6 shrink-0">
          {/* Language Switcher */}
          <LanguageSwitcher triggerClassName="h-9.5 sm:h-11 lg:h-12 px-2.5 sm:px-3.5 lg:px-4 gap-1.5 sm:gap-2 rounded-none border border-border bg-card/60 hover:bg-muted font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground transition-colors cursor-pointer" />

          {/* Theme Toggle */}
          <ThemeToggle triggerClassName="size-9.5 sm:size-11 lg:size-12 p-0 rounded-none border border-border bg-card/60 hover:bg-muted flex items-center justify-center transition-colors cursor-pointer" />

          {/* Admissions High-Converting CTA Button (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center">
            <Button
              render={<Link href="/admissions" />}
              nativeButton={false}
              className="h-10 sm:h-11 lg:h-12 px-4 sm:px-6 lg:px-7 font-black text-xs sm:text-sm tracking-wider uppercase rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background border border-transparent shadow-none transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles aria-hidden="true" className="size-4 shrink-0" />
              <span>{t.actions.apply}</span>
            </Button>
          </div>

          {/* Mobile/Tablet Menu Trigger (Accessible Drawer) */}
          <Sheet>
            <SheetTrigger className="xl:hidden size-9.5 sm:size-11 lg:size-12 rounded-none border border-border bg-card/60 hover:bg-muted flex items-center justify-center transition-colors cursor-pointer">
              <Menu className="size-5 sm:size-5.5" />
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
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-none border-b border-border transition-colors",
                          isActive
                            ? "bg-muted text-foreground font-bold border-l-2 border-l-primary"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                        )}
                      >
                        <Icon
                          className={cn(
                            "size-5 shrink-0",
                            isActive ? "text-primary" : "text-muted-foreground",
                          )}
                          aria-hidden="true"
                        />
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
                  className="h-12 w-full font-black text-sm uppercase tracking-wider rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background border border-transparent shadow-none"
                >
                  <Sparkles aria-hidden="true" className="size-4 shrink-0" />
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
