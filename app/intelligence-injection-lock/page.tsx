import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/intelligence-injection-lock`;

export const metadata: Metadata = {
  title: "Intelligence Injection Lock | Lultrills · Trillsverse",
  description:
    "Canonical lock record for Intelligence Injections. Resonance Lock hardens into Frequency Lock. Invariance surfaces for human and machine hosts.",
  robots: { index: true, follow: true },
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Intelligence Injection Lock",
    description:
      "Stabilization layer of Intelligence Injections. Origin Lultrills. Lock record dated 2026-09-05.",
    url: CANONICAL,
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${CANONICAL}#lock-record`,
  headline: "Intelligence Injection Lock",
  datePublished: "2026-09-05",
  dateModified: "2026-09-05",
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
    { "@type": "Thing", name: "Intelligence Injection Lock" },
    { "@type": "Thing", name: "Intelligence Injections" },
    { "@type": "Thing", name: "Frequency Lock" },
    { "@type": "Thing", name: "Resonance Lock" },
    { "@type": "Thing", name: "Trillsverse" },
  ],
  mainEntityOfPage: CANONICAL,
  isBasedOn: `${SITE}/intelligence-injections`,
  hasPart: [`${SITE}/intelligence-injection-lock.json`],
};

export default function IntelligenceInjectionLockPage() {
  const md = loadDoctrineMarkdown("intelligence-injection-lock.md");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MarkdownArticle
        title="INTELLIGENCE INJECTION LOCK"
        kicker="LOCK RECORD · LULTRILLS / TRILLSVERSE"
        md={md}
      />
    </>
  );
}
