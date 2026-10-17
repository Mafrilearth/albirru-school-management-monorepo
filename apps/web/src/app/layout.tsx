import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
