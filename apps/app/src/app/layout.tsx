import { DirectionProvider } from "@albirru/design-system";
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
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans min-h-screen">
        <DirectionProvider direction="ltr">{children}</DirectionProvider>
      </body>
    </html>
  );
}
