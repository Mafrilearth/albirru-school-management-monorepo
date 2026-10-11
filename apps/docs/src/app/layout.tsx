import type { Metadata } from "next";
import type * as React from "react";

export const metadata: Metadata = {
  title: "SD Al-Birru Technical Documentation (/apps/docs)",
  description:
    "Statutory specifications, architectural contracts, and operational runbooks for SD Al-Birru",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#f8fafc",
          color: "#0f172a",
        }}
      >
        {children}
      </body>
    </html>
  );
}
