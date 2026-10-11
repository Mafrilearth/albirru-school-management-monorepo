import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SD Al-Birru Tahfidzul Qur'an Sukabumi",
    short_name: "SD Al-Birru",
    description:
      "Official Portal of SD Al-Birru Tahfidzul Qur'an Sukabumi - Partner in Islamic Education, 3 Juz Tahfidz & Merdeka Curriculum",
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
