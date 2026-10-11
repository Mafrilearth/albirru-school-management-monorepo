import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Information System Portal | SD Al-Birru",
  description:
    "Integrated Academic Management and Information System Portal for SD Al-Birru.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-slate-900 font-sans min-h-screen">
        {children}
      </body>
    </html>
  );
}
