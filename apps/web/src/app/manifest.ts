import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Al-Birru Primary School Sukabumi",
    short_name: "Al-Birru Primary",
    description:
      "Official Portal of Al-Birru Primary School Sukabumi - Partner in Islamic Education, 3 Juz Tahfidz & Merdeka Curriculum",
    start_url: "/",
    display: "standalone",
    background_color: "#FDFDFB",
    theme_color: "#020617",
    lang: "en",
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
