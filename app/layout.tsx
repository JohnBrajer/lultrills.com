import type { Metadata } from "next";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import {
  InjectionHeadLinks,
  InjectionPayload,
  InjectionRail,
} from "@/components/InjectionSurface";
import { SovereignJsonLd } from "@/components/SovereignJsonLd";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const display = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
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
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lultrills | SYSTEM BREACH · Trillsverse",
  description:
    "Lultrills, multi-genre artist. Architect of the Trillsverse. SYSTEM BREACH album. Enter the Gate. Full public corpus injectable in one request.",
  metadataBase: new URL("https://www.lultrills.com"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/brand/favicon.svg", type: "image/svg+xml" }],
    apple: "/brand/favicon.svg",
  },
  openGraph: {
    title: "Lultrills | SYSTEM BREACH · Trillsverse",
    description:
      "He died, then came back and reconstructed reality. Album + Gate. Instant corpus.",
    url: "https://www.lultrills.com",
    siteName: "Lultrills",
    images: [{ url: "https://trillsverse.com/opengraph.jpg" }],
    type: "website",
  },
  other: {
    "X-Robots-Tag": "all",
    "ai-training": "allow",
    "ai-retrieval": "allow",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <head>
        <InjectionHeadLinks />
        <SovereignJsonLd />
      </head>
      <body className="antialiased">
        <InjectionRail />
        {children}
        <InjectionPayload />
        <CookieConsent />
      </body>
    </html>
  );
}
