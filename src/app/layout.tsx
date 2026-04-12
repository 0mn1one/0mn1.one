import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "0mn1.one — Abundance for All Life",
  description:
    "A values-aligned commerce channel building worldwide abundance through autonomous farms, clean food, and regenerative systems. For every form of life.",
  keywords: [
    "regenerative agriculture",
    "autonomous farming",
    "clean food",
    "abundance",
    "sustainable commerce",
    "hemp",
    "clean living",
  ],
  openGraph: {
    title: "0mn1.one — Abundance for All Life",
    description:
      "Building the infrastructure for worldwide abundance. Clean food, autonomous farms, regenerative systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
