import type { Metadata } from "next";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

const body = Rajdhani({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lultrills | Multi-Genre Rap Artist | Trillsverse",
  description:
    "Lultrills — Bay Area multi-genre rap/hip-hop artist. NDE survivor. AuDHD sovereign creator of Trillsverse. Gold grills frequency. A Place You Were Never Meant To Enter. Public artist portal + signal node.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Lultrills | SYSTEM BREACH · Trillsverse",
    description:
      "He died, then came back and reconstructed reality. Album + Gate. Enter the Trillsverse.",
    images: [
      {
        url: "https://trillsverse.com/opengraph.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-[var(--void)] text-[var(--ink)] antialiased">{children}</body>
    </html>
  );
}
