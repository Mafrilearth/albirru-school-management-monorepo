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
    expect(DICTIONARY.ar.badges.admissionsOpen).toContain("التسجيل");
    expect(DICTIONARY.ar.nav.home).toBe("الرئيسية");
    expect(DICTIONARY.ar.nav.applyOnline).toBe("التسجيل الإلكتروني");
  });

  it("verifies Indonesian dictionary matches Al-Birru identity", () => {
    expect(DICTIONARY.id.badges.tahfidzFocus).toContain("3 Juz");
    expect(DICTIONARY.id.badges.quotaRemaining).toContain("14 Kursi");
  });

  it("verifies 6-pillar single-word trilingual navigation synchronization", () => {
    // English (Global Language)
    expect(DICTIONARY.en.nav.home).toBe("Home");
    expect(DICTIONARY.en.nav.profile).toBe("Profile");
    expect(DICTIONARY.en.nav.academics).toBe("Academics");
    expect(DICTIONARY.en.nav.students).toBe("Students");
    expect(DICTIONARY.en.nav.news).toBe("News");
    expect(DICTIONARY.en.nav.services).toBe("Services");

    // Indonesian (Baku, Formal, Pro)
    expect(DICTIONARY.id.nav.home).toBe("Beranda");
    expect(DICTIONARY.id.nav.profile).toBe("Profil");
    expect(DICTIONARY.id.nav.academics).toBe("Akademik");
    expect(DICTIONARY.id.nav.students).toBe("Kesiswaan");
    expect(DICTIONARY.id.nav.news).toBe("Warta");
    expect(DICTIONARY.id.nav.services).toBe("Layanan");

    // Arabic (Baku, Formal, Pro)
    expect(DICTIONARY.ar.nav.home).toBe("الرئيسية");
    expect(DICTIONARY.ar.nav.profile).toBe("التعريف");
    expect(DICTIONARY.ar.nav.academics).toBe("الأكاديميا");
    expect(DICTIONARY.ar.nav.students).toBe("الطلاب");
    expect(DICTIONARY.ar.nav.news).toBe("الأخبار");
    expect(DICTIONARY.ar.nav.services).toBe("الخدمات");
  });

  it("validates official next-intl routing configuration", async () => {
    const { routing } = await import("../i18n/routing");
    expect(routing.locales).toEqual(["id", "ar", "en"]);
    expect(routing.defaultLocale).toBe("id");
  });

  it("validates official next-intl JSON messages catalog", async () => {
    const idMsg = (await import("../../messages/id.json")).default;
    const enMsg = (await import("../../messages/en.json")).default;
    const arMsg = (await import("../../messages/ar.json")).default;

    expect(idMsg.nav.home).toBe("Beranda");
    expect(enMsg.nav.home).toBe("Home");
    expect(arMsg.nav.home).toBe("الرئيسية");
    expect(idMsg.nav.profile).toBe("Profil");
    expect(enMsg.nav.profile).toBe("Profile");
    expect(arMsg.nav.profile).toBe("التعريف");
    expect(idMsg.badges.tahfidzFocus).toContain("3 Juz");
  });

  it("calculates localized URL paths correctly for language switching", () => {
    const formatLocalizedUrl = (
      pathname: string,
      newLocale: "id" | "ar" | "en",
    ) => {
      const cleanPath = pathname.replace(/^\/(?:id|ar|en)(?=\/|$)/, "") || "/";
      return `/${newLocale}${cleanPath === "/" ? "" : cleanPath}`;
    };

    expect(formatLocalizedUrl("/", "id")).toBe("/id");
    expect(formatLocalizedUrl("/", "en")).toBe("/en");
    expect(formatLocalizedUrl("/id/profile", "en")).toBe("/en/profile");
    expect(formatLocalizedUrl("/en/profile", "ar")).toBe("/ar/profile");
    expect(formatLocalizedUrl("/ar/academics", "id")).toBe("/id/academics");
    expect(formatLocalizedUrl("/en/students", "id")).toBe("/id/students");
    expect(formatLocalizedUrl("/en/services", "id")).toBe("/id/services");
    expect(formatLocalizedUrl("/en/admissions", "id")).toBe("/id/admissions");
  });
});
