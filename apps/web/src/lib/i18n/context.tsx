"use client";

import type React from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DICTIONARY, type Locale, type Translations } from "./dictionary";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "albirru_preferred_locale";
const COOKIE_NAME = "NEXT_LOCALE";

export function LanguageProvider({
  children,
  defaultLocale = "id",
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  // Sync from storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && (stored === "id" || stored === "ar" || stored === "en")) {
        setLocaleState(stored);
      }
    } catch {
      // Storage unavailable or disabled
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      // biome-ignore lint/suspicious/noDocumentCookie: client-side cookie persistence for Next.js SSR
      document.cookie = `${COOKIE_NAME}=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    } catch {
      // Ignore storage errors
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo(() => {
    return {
      locale,
      setLocale,
      t: DICTIONARY[locale] || DICTIONARY.id,
      dir: (locale === "ar" ? "rtl" : "ltr") as "ltr" | "rtl",
    };
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    // Return safe fallback if rendered outside provider
    return {
      locale: "id",
      setLocale: () => {},
      t: DICTIONARY.id,
      dir: "ltr",
    };
  }
  return context;
}
