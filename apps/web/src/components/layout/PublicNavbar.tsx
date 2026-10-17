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
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/profile", label: t.nav.profile, icon: School },
    { href: "/academics", label: t.nav.academics, icon: GraduationCap },
    { href: "/students", label: t.nav.students, icon: Users },
    { href: "/news", label: t.nav.news, icon: Newspaper },
    { href: "/services", label: t.nav.services, icon: HeartHandshake },
  ];

  return (
    <>
      {/* Top Floating Controls Bar: Transparent fixed wrapper */}
      <header className="fixed top-2.5 sm:top-3.5 left-0 w-full z-50 pointer-events-none px-3 sm:px-6 flex items-center justify-between">
        {/* Top-Left: Floating Fixed Brand Logo (Glassmorphism Rounded-Full Capsule) */}
        <div className="pointer-events-auto">
          <div className="rounded-full bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border border-border/80 ring-1 ring-border/50 shadow-sm hover:border-foreground/40 hover:bg-background/85 hover:ring-border/80 transition-all duration-300 flex items-center">
            <BrandLogo
              className="h-auto pl-4 pr-6 py-2 sm:pl-5 sm:pr-8 sm:py-2.5 gap-3 sm:gap-4 rounded-full"
              svgClassName="h-9 sm:h-10 w-auto shrink-0"
              titleClassName="text-base sm:text-xl"
              subtitleClassName="text-[8.5px] sm:text-[10px]"
            />
          </div>
        </div>

        {/* Top-Right: Floating Individual Glass Buttons (Multilang & Theme Toggle & Mobile Menu) */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-2.5">
          {/* Individual Language Switcher Floating Button */}
          <LanguageSwitcher triggerClassName="h-10 sm:h-11 px-3.5 sm:px-4 rounded-full bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border border-border/80 ring-1 ring-border/50 shadow-sm hover:border-foreground/40 hover:bg-background/85 hover:ring-border/80 transition-all duration-300 gap-2 font-mono text-xs font-semibold" />

          {/* Individual Theme Toggle Floating Button */}
          <ThemeToggle triggerClassName="size-10 sm:size-11 p-0 rounded-full bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border border-border/80 ring-1 ring-border/50 shadow-sm hover:border-foreground/40 hover:bg-background/85 hover:ring-border/80 transition-all duration-300 flex items-center justify-center" />

          {/* Mobile Menu Trigger Floating Button (Accessible Drawer) */}
          <Sheet>
            <SheetTrigger className="xl:hidden size-10 sm:size-11 rounded-full bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 border border-border/80 ring-1 ring-border/50 shadow-sm hover:border-foreground/40 hover:bg-background/85 hover:ring-border/80 transition-all duration-300 inline-flex items-center justify-center">
              <Menu className="size-4" />
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
                          "flex items-center gap-3 px-4 py-3 text-base font-medium rounded-none border-b border-border transition-colors",
                          isActive
                            ? "bg-muted text-foreground font-semibold border-l-2 border-l-foreground"
                            : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                        )}
                      >
                        <Icon className="size-4 shrink-0" aria-hidden="true" />
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
                  className="w-full font-bold rounded-none bg-primary text-primary-foreground hover:bg-foreground hover:text-background border border-transparent shadow-none"
                >
                  {t.actions.apply}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Bottom-Center: Floating Navigation Dock */}
      <nav
        aria-label="Navigasi Utama"
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-1.5rem)] select-none"
      >
        <div className="rounded-full bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 border border-border/80 ring-1 ring-border/50 shadow-lg p-1.5 sm:p-2 flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar">
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
                aria-label={link.label}
                title={link.label}
                className={cn(
                  "group relative flex items-center justify-center rounded-full transition-all duration-300 ease-out outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0",
                  isActive
                    ? "bg-foreground text-background font-semibold shadow-xs px-3.5 sm:px-4 py-1.5 sm:py-2 gap-2"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60 size-9 sm:size-10",
                )}
              >
                <Icon
                  aria-hidden="true"
                  className={cn(
                    "size-4 shrink-0 transition-transform duration-200 group-hover:scale-110",
                    isActive && "scale-100",
                  )}
                />
                {isActive && (
                  <span className="text-xs sm:text-sm font-semibold whitespace-nowrap animate-in fade-in duration-200">
                    {link.label}
                  </span>
                )}
                {!isActive && <span className="sr-only">{link.label}</span>}
              </Link>
            );
          })}

          {/* Separator & Admissions CTA Button */}
          <div
            className="h-4 w-px bg-border/80 mx-1 shrink-0"
            aria-hidden="true"
          />
          <Link
            href="/admissions"
            aria-label={t.actions.apply}
            title={t.actions.apply}
            className="flex items-center justify-center whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 gap-1.5 text-xs sm:text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-all duration-200 shadow-xs shrink-0"
          >
            <Sparkles aria-hidden="true" className="size-3.5 shrink-0" />
            <span className="hidden sm:inline">{t.actions.apply}</span>
            <span className="sm:hidden">{t.actions.apply}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
