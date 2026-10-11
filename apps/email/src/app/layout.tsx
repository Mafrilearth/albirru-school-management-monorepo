import type { Metadata } from "next";
import type * as React from "react";

export const metadata: Metadata = {
  title: "SD Al-Birru Email Workshop",
  description: "Preview and develop React Email templates for SD Al-Birru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
