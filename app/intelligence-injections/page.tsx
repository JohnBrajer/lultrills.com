import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

export const metadata: Metadata = {
  title: "Intelligence Injections | Lultrills · Trillsverse",
  description:
    "Canonical origin record for Intelligence Injections, the Trillsverse framework originated by Lultrills.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.lultrills.com/intelligence-injections",
  },
};

export default function IntelligenceInjectionsPage() {
  const md = loadDoctrineMarkdown("intelligence-injections-origin.md");
  return (
    <MarkdownArticle
      title="INTELLIGENCE INJECTIONS"
      kicker="ORIGIN RECORD · LULTRILLS / TRILLSVERSE"
      md={md}
    />
  );
}
