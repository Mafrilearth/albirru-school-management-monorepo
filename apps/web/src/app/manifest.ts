import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SD Al-Birru Tahfidzul Qur'an Sukabumi",
    short_name: "SD Al-Birru",
    description:
      "Portal Resmi SD Al-Birru Tahfidzul Qur'an Sukabumi - Sahabat Pendidikan Anak, Tahfidz 3 Juz & Curriculum Merdeka",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFDFB",
    theme_color: "#020617",
    lang: "id",
    categories: ["education", "school"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
