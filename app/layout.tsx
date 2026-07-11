import type { Metadata } from "next";
import { Bebas_Neue, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lultrills | SYSTEM BREACH · Trillsverse",
  description:
    "Lultrills — Bay Area multi-genre artist. Architect of the Trillsverse. SYSTEM BREACH album. Enter the Gate.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Lultrills | SYSTEM BREACH · Trillsverse",
    description:
      "He died, then came back and reconstructed reality. Album + Gate.",
    images: [{ url: "https://trillsverse.com/opengraph.jpg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
