import { flag } from "@vercel/flags/next";

/**
 * Feature Flags for Al-Birru Primary School
 * Accessible and toggleable via Vercel Toolbar & Edge Config
 */

export const ppdbWave1Open = flag<boolean>({
  key: "ppdb-wave-1-open",
  description: "Status buka/tutup Gelombang I PPDB 2026/2027",
  defaultValue: true,
  options: [
    { value: true, label: "Buka (Pendaftaran Aktif)" },
    { value: false, label: "Tutup (Pendaftaran Ditutup)" },
  ],
  decide: () => true,
});

export const showRamadhanTheme = flag<boolean>({
  key: "show-ramadhan-theme",
  description: "Aktifkan tema visual dan ucapan Marhaban ya Ramadhan",
  defaultValue: false,
  options: [
    { value: true, label: "Aktif" },
    { value: false, label: "Nonaktif" },
  ],
  decide: () => false,
});

export const enableAIChatbot = flag<boolean>({
  key: "enable-ai-chatbot",
  description: "Aktifkan widget Asisten AI PPDB di sudut layar",
  defaultValue: true,
  options: [
    { value: true, label: "Tampilkan AI Widget" },
    { value: false, label: "Sembunyikan AI Widget" },
  ],
  decide: () => true,
});

export const maintenanceMode = flag<boolean>({
  key: "maintenance-mode",
  description: "Mode pemeliharaan sistem sementara",
  defaultValue: false,
  options: [
    { value: true, label: "Mode Maintenance Aktif" },
    { value: false, label: "Normal" },
  ],
  decide: () => false,
});
