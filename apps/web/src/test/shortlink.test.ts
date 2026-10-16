import { describe, expect, it } from "vitest";
import {
  getAllShortlinks,
  resolveShortlink,
  SHORTLINKS,
} from "../lib/shortlink";

describe("Shortlink Registry & Resolver", () => {
  it("resolves valid internal shortlinks correctly", () => {
    const ppdb = resolveShortlink("ppdb");
    expect(ppdb).not.toBeNull();
    expect(ppdb?.destination).toBe("/admissions");
    expect(ppdb?.isExternal).toBe(false);

    const brosur = resolveShortlink("brosur");
    expect(brosur?.destination).toBe("/academics");

    const tahfidz = resolveShortlink("tahfidz");
    expect(tahfidz?.destination).toBe("/academics#tahfidz");
  });

  it("handles case insensitivity and leading/trailing slashes", () => {
    expect(resolveShortlink("PPDB")?.destination).toBe("/admissions");
    expect(resolveShortlink("/ppdb/")?.destination).toBe("/admissions");
    expect(resolveShortlink("  KOnTaK  ")?.destination).toBe("/services");
  });

  it("resolves external redirects (WhatsApp & Maps)", () => {
    const wa = resolveShortlink("wa");
    expect(wa?.isExternal).toBe(true);
    expect(wa?.destination).toContain("wa.me");

    const lokasi = resolveShortlink("lokasi");
    expect(lokasi?.isExternal).toBe(true);
    expect(lokasi?.destination).toContain("maps.google.com");
  });

  it("returns null for non-existent shortlinks", () => {
    expect(resolveShortlink("unknown-link-xyz")).toBeNull();
    expect(resolveShortlink("")).toBeNull();
  });

  it("lists all available shortlinks", () => {
    const all = getAllShortlinks();
    expect(all.length).toBe(Object.keys(SHORTLINKS).length);
    expect(all.some((item) => item.slug === "ppdb")).toBe(true);
  });
});
