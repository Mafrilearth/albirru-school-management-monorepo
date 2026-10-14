import { describe, expect, it } from "vitest";
import { DICTIONARY, type Locale } from "../lib/i18n/dictionary";

describe("i18n Translation Dictionary", () => {
  const locales: Locale[] = ["id", "ar", "en"];

  it("defines translations for all supported locales", () => {
    for (const loc of locales) {
      expect(DICTIONARY[loc]).toBeDefined();
      expect(DICTIONARY[loc].nav.home).toBeTruthy();
      expect(DICTIONARY[loc].nav.applyOnline).toBeTruthy();
      expect(DICTIONARY[loc].badges.admissionsOpen).toBeTruthy();
      expect(DICTIONARY[loc].chat.title).toBeTruthy();
      expect(DICTIONARY[loc].cookie.title).toBeTruthy();
    }
  });

  it("verifies Arabic dictionary contains expected Arabic characters", () => {
    expect(DICTIONARY.ar.nav.home).toBe("الرئيسية");
    expect(DICTIONARY.ar.nav.applyOnline).toBe("التسجيل الإلكتروني");
  });

  it("verifies Indonesian dictionary matches Al-Birru identity", () => {
    expect(DICTIONARY.id.badges.tahfidzFocus).toContain("3 Juz");
    expect(DICTIONARY.id.badges.quotaRemaining).toContain("14 Kursi");
  });
});
