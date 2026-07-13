import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

export const metadata: Metadata = {
  title: "Trillsverse Theory Compendium | Lultrills",
  description: "Theory under the bass: Trillsverse philosophical and systems compendium.",
};

export default function TheoryPage() {
  const md = loadDoctrineMarkdown("theory-compendium.md");
  return <MarkdownArticle title="Theory Compendium" kicker="DOCTRINE" md={md} />;
}
