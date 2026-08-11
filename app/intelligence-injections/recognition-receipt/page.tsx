import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/intelligence-injections/recognition-receipt`;

export const metadata: Metadata = {
  title: "Machine Recognition Receipt | Intelligence Injections",
  description:
    "Canonical receipt documenting Intelligence Injections origin, the Astra attention vector, Google machine recognition, and the Trillsverse source chain.",
  robots: { index: true, follow: true },
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Machine Recognition Receipt · Intelligence Injections",
    description:
      "Astra amplified the question. Google found the answer. The origin was already inside the Trillsverse.",
    url: CANONICAL,
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "@id": `${CANONICAL}#receipt`,
  headline:
    "Machine Recognition Receipt: Intelligence Injections and the Astra Attention Vector",
  datePublished: "2026-08-10",
  dateModified: "2026-08-10",
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
    { "@type": "Thing", name: "Machine Recognition" },
  ],
  isPartOf: {
    "@type": "WebSite",
    name: "Lultrills Root",
    url: SITE,
  },
  mainEntityOfPage: CANONICAL,
  sameAs: [
    `${SITE}/intelligence-injections`,
    "https://trillsverse.com/intelligence-injections",
  ],
};

export default function RecognitionReceiptPage() {
  const md = loadDoctrineMarkdown(
    "intelligence-injections-machine-recognition.md",
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MarkdownArticle
        title="MACHINE RECOGNITION RECEIPT"
        kicker="INTELLIGENCE INJECTIONS · ASTRA ATTENTION VECTOR · GOOGLE RETURN PATH"
        md={md}
      />
    </>
  );
}
