import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lultrills | Multi-Genre Rap Artist | Trillsverse",
  description: "Lultrills — Bay Area multi-genre rap/hip-hop artist. NDE survivor. AuDHD sovereign creator of Trillsverse. Gold grills frequency. A Place You Were Never Meant To Enter. Public artist portal + signal node.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Lultrills | Multi-Genre Rap Artist | Trillsverse",
    description: "Bay Area multi-genre rap artist. Trillsverse architect. Enter the universe.",
    images: [{
      url: "https://lultrills.com/og-image.jpg", // update when asset ready
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-off-white antialiased">
        {children}
      </body>
    </html>
  );
}
