/**
 * School Shortlink Management
 * Provides clean, branded short redirects for promotional banners, social media bios,
 * QR codes, WhatsApp announcements, and flyers.
 */

export interface ShortlinkDefinition {
  slug: string;
  destination: string;
  label: string;
  description: string;
  isExternal: boolean;
}

export const SHORTLINKS: Record<string, ShortlinkDefinition> = {
  ppdb: {
    slug: "ppdb",
    destination: "/admissions",
    label: "Pendaftaran PPDB 2026/2027",
    description: "Portal formulir pendaftaran santri baru SD Al-Birru",
    isExternal: false,
  },
  pendaftaran: {
    slug: "pendaftaran",
    destination: "/admissions",
    label: "Pendaftaran PPDB 2026/2027",
    description: "Portal formulir pendaftaran santri baru SD Al-Birru",
    isExternal: false,
  },
  brosur: {
    slug: "brosur",
    destination: "/academics",
    label: "Brosur & Program Pendidikan",
    description: "Kurikulum unggulan, kurikulum fitrah, dan sains terapan",
    isExternal: false,
  },
  kurikulum: {
    slug: "kurikulum",
    destination: "/academics",
    label: "Kurikulum Terpadu",
    description: "Sintesis Kurikulum Merdeka dan Fitrah Nabawiyyah",
    isExternal: false,
  },
  tahfidz: {
    slug: "tahfidz",
    destination: "/academics#tahfidz",
    label: "Tahfidzul Qur'an 3 Juz Mutqin",
    description: "Program tahfidz sanad Hafs 'an 'Ashim Juz 30-28",
    isExternal: false,
  },
  kontak: {
    slug: "kontak",
    destination: "/services",
    label: "Kontak & Lokasi Kampus",
    description: "Alamat, peta kampus, dan narahubung resmi sekolah",
    isExternal: false,
  },
  wa: {
    slug: "wa",
    destination:
      "https://wa.me/6281234567890?text=Assalamu'alaikum%20Admin%20SD%20Al-Birru,%20mohon%20informasi%20PPDB%202026/2027.",
    label: "WhatsApp Panitia PPDB",
    description: "Layanan chat WhatsApp langsung dengan panitia PPDB",
    isExternal: true,
  },
  lokasi: {
    slug: "lokasi",
    destination:
      "https://maps.google.com/?q=SD+Al-Birru+Cisande+Cijalingan+Cicantayan+Sukabumi",
    label: "Google Maps Kampus",
    description:
      "Peta navigasi langsung ke kampus SD Al-Birru Cisande Sukabumi",
    isExternal: true,
  },
  portal: {
    slug: "portal",
    destination: "https://portal.sdalbirru.sch.id",
    label: "Portal Orang Tua & Guru",
    description: "Sistem Informasi Manajemen Sekolah Al-Birru",
    isExternal: true,
  },
};

/**
 * Resolves a shortlink slug to its target destination URL.
 * Normalizes input by lowercasing and trimming slashes.
 */
export function resolveShortlink(rawSlug: string): ShortlinkDefinition | null {
  if (!rawSlug) return null;
  const normalized = rawSlug
    .trim()
    .toLowerCase()
    .replace(/^\/+|\/+$/g, "");
  return SHORTLINKS[normalized] || null;
}

/**
 * Returns all active shortlink definitions.
 */
export function getAllShortlinks(): ShortlinkDefinition[] {
  return Object.values(SHORTLINKS);
}
