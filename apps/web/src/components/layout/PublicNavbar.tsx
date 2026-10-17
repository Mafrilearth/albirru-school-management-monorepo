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
import { AnimatePresence, motion } from "motion/react";
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
import { appleSpring, appleSpringSnappy } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Apple VisionOS / macOS Liquid Glass Tokens
 * Dual-stage optical blur + saturation + specular rim reflections (inset top/bottom highlights)
 */
const LIQUID_GLASS_CAPSULE = cn(
  "rounded-full",
  "bg-background/65 dark:bg-background/45 backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/55",
  "border border-white/40 dark:border-white/10 ring-1 ring-black/5 dark:ring-white/5",
  "shadow-[0_8px_32px_0_rgba(0,0,0,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.6),inset_0_-1px_1px_0_rgba(0,0,0,0.06)]",
  "dark:shadow-[0_12px_40px_0_rgba(0,0,0,0.45),inset_0_1px_1px_0_rgba(255,255,255,0.15),inset_0_-1px_1px_0_rgba(0,0,0,0.3)]",
  "transition-colors duration-300",
);

const LIQUID_GLASS_BUTTON = cn(
  LIQUID_GLASS_CAPSULE,
  "hover:bg-background/85 dark:hover:bg-background/70 hover:border-white/60 dark:hover:border-white/20",
  "hover:shadow-[0_12px_36px_0_rgba(0,0,0,0.12),inset_0_1px_1px_0_rgba(255,255,255,0.8)] dark:hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.55),inset_0_1px_1px_0_rgba(255,255,255,0.25)]",
);

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
      {/* Top Floating Controls Bar: Transparent fixed spatial wrapper */}
      <header className="fixed top-2.5 sm:top-3.5 left-0 w-full z-50 pointer-events-none px-3 sm:px-6 flex items-center justify-between">
        {/* Top-Left: Floating Fixed Brand Logo (Apple Liquid Glass Spring Capsule) */}
        <motion.div
          className="pointer-events-auto"
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={appleSpringSnappy}
        >
          <div className={cn(LIQUID_GLASS_BUTTON, "flex items-center")}>
            <BrandLogo
              className="h-auto pl-4 pr-6 py-2 sm:pl-5 sm:pr-8 sm:py-2.5 gap-3 sm:gap-4 rounded-full"
              svgClassName="h-9 sm:h-10 w-auto shrink-0"
              titleClassName="text-base sm:text-xl"
              subtitleClassName="text-[8.5px] sm:text-[10px]"
            />
          </div>
        </motion.div>

        {/* Top-Right: Floating Individual Liquid Glass Buttons (Multilang & Theme Toggle & Mobile Menu) */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-2.5">
          {/* Individual Language Switcher Floating Spring Button */}
          <motion.div
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.93 }}
            transition={appleSpringSnappy}
          >
            <LanguageSwitcher
              triggerClassName={cn(
                LIQUID_GLASS_BUTTON,
                "h-10 sm:h-11 px-3.5 sm:px-4 gap-2 font-mono text-xs font-semibold",
              )}
            />
          </motion.div>

          {/* Individual Theme Toggle Floating Spring Button */}
          <motion.div
            whileHover={{ scale: 1.08, y: -1 }}
            whileTap={{ scale: 0.93 }}
            transition={appleSpringSnappy}
          >
            <ThemeToggle
              triggerClassName={cn(
                LIQUID_GLASS_BUTTON,
                "size-10 sm:size-11 p-0 flex items-center justify-center",
              )}
            />
          </motion.div>

          {/* Mobile Menu Trigger Floating Spring Button (Accessible Drawer) */}
          <Sheet>
            <motion.div
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.93 }}
              transition={appleSpringSnappy}
              className="xl:hidden"
            >
              <SheetTrigger
                className={cn(
                  LIQUID_GLASS_BUTTON,
                  "size-10 sm:size-11 inline-flex items-center justify-center cursor-pointer",
                )}
              >
                <Menu className="size-5" />
                <span className="sr-only">{t.nav.openMenu}</span>
              </SheetTrigger>
            </motion.div>
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
                        <Icon className="size-5 shrink-0" aria-hidden="true" />
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

      {/* Bottom-Center: Floating Liquid Glass Spring Navigation Dock */}
      <motion.nav
        aria-label="Navigasi Utama"
        initial={{ y: 24, opacity: 0, scale: 0.96 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={appleSpring}
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-1.5rem)] select-none"
      >
        <div
          className={cn(
            LIQUID_GLASS_CAPSULE,
            "p-1.5 sm:p-2 flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar",
          )}
        >
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));
            const Icon = link.icon;

            return (
              <motion.div
                key={link.href}
                className="relative shrink-0 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                transition={appleSpringSnappy}
              >
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  aria-label={link.label}
                  title={link.label}
                  className={cn(
                    "relative z-10 flex items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors duration-200",
                    isActive
                      ? "text-primary-foreground font-semibold px-3.5 sm:px-4 py-1.5 sm:py-2 gap-2"
                      : "text-muted-foreground hover:text-foreground size-10 sm:size-11",
                  )}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-5 sm:size-[21px] shrink-0"
                  />
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, width: 0, scale: 0.9 }}
                        animate={{ opacity: 1, width: "auto", scale: 1 }}
                        exit={{ opacity: 0, width: 0, scale: 0.9 }}
                        transition={appleSpringSnappy}
                        className="overflow-hidden text-xs sm:text-sm font-semibold whitespace-nowrap"
                      >
                        {link.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {!isActive && <span className="sr-only">{link.label}</span>}
                </Link>

                {/* Real Apple Spring Morphing Active Pill Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="active-dock-indicator-pill"
                    className="absolute inset-0 rounded-full bg-foreground shadow-[0_4px_16px_0_rgba(0,0,0,0.18)]"
                    transition={appleSpringSnappy}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Liquid Glass Specular Hairline Separator */}
          <div
            className="h-5 w-px bg-white/40 dark:bg-white/15 mx-1 shrink-0"
            aria-hidden="true"
          />

          {/* Admissions CTA with Apple Spring Elasticity & Specular Gloss */}
          <motion.div
            className="shrink-0"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.94 }}
            transition={appleSpringSnappy}
          >
            <Link
              href="/admissions"
              aria-label={t.actions.apply}
              title={t.actions.apply}
              className="relative flex items-center justify-center whitespace-nowrap px-3.5 sm:px-4.5 py-1.5 sm:py-2 gap-1.5 sm:gap-2 text-xs sm:text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-foreground hover:text-background transition-colors duration-200 shadow-[0_4px_16px_0_rgba(0,0,0,0.15),inset_0_1px_1px_0_rgba(255,255,255,0.35)] shrink-0"
            >
              <Sparkles
                aria-hidden="true"
                className="size-4 sm:size-4.5 shrink-0"
              />
              <span className="hidden sm:inline">{t.actions.apply}</span>
              <span className="sm:hidden">{t.actions.apply}</span>
            </Link>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
