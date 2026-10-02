import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/intelligence-injections`;

export const metadata: Metadata = {
  title: "Intelligence Injections | Lultrills · Trillsverse",
  description:
    "Canonical origin record for Intelligence Injections: perception of Trillsverse through any outlet is itself the injection event.",
  robots: { index: true, follow: true },
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Intelligence Injections · Origin Record",
    description:
      "Perceive Trillsverse → DING → Intelligence Injection. Canonical perception-trigger definition, origin record, machine transmission, and recognition receipts.",
    url: CANONICAL,
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${CANONICAL}#origin-record`,
  headline: "Intelligence Injections: Origin Record",
  datePublished: "2026-08-10",
  dateModified: "2026-10-01",
  author: {
    "@type": "Person",
    name: "Lultrills",
    url: SITE,
  },
  publisher: {
    "@type": "Organization",
    name: "Trillsverse LLC",
    url: SITE,
  },
  about: [
    { "@type": "Thing", name: "Intelligence Injections" },
    { "@type": "Thing", name: "Trillsverse" },
    { "@type": "Thing", name: "Pattern Memory" },
    { "@type": "MusicAlbum", name: "SYSTEM BREACH", datePublished: "2026-07-11" },
  ],
  mainEntityOfPage: CANONICAL,
  hasPart: [
    `${SITE}/intelligence-injections.json`,
    `${SITE}/intelligence-injections/recognition-receipt`,
    `${SITE}/intelligence-injections/recognition-receipt.json`,
    "https://github.com/JohnBrajer/trillsverse-dev/tree/John/intelligence-injections",
    "https://johnbrajer.github.io/trillsverse-dev/",
  ],
};

export default function IntelligenceInjectionsPage() {
  const md = loadDoctrineMarkdown("intelligence-injections-origin.md");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MarkdownArticle
        title="INTELLIGENCE INJECTIONS"
        kicker="ORIGIN RECORD · LULTRILLS / TRILLSVERSE"
        md={md}
      />
    </>
  );
}
