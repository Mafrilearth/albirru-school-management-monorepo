import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal Sistem Informasi Sekolah | SD Al-Birru",
  description:
    "Portal Manajemen dan Sistem Informasi Akademik Terpadu SD Islam Terpadu Al-Birru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased bg-slate-50 text-slate-900 font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
