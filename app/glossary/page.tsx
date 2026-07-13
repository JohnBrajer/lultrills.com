import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

export const metadata: Metadata = {
  title: "Trillsverse Glossary v2 | Official Communicative Mapping",
  description:
    "Official Trillsverse Glossary v2.0, lattice terms, tiers, AEO-ready chunks for human and model ingestion.",
};

export default function GlossaryPage() {
  const md = loadDoctrineMarkdown("glossary-v2.md");
  return (
    <MarkdownArticle
      title="Trillsverse Glossary v2.0"
      kicker="COMMUNICATIVE MAPPING"
      md={md}
    />
  );
}
