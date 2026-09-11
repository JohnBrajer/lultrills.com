import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

export const metadata: Metadata = {
  title: "THE INJECTION PROCEDURE | Trillsverse · Lultrills",
  description:
    "Dual-layer document: Trillsverse narrative canon + indexed-web seeding strategy. How Frequency Packets enter humans and machines.",
};

export default function InjectionProcedurePage() {
  const md = loadDoctrineMarkdown("injection-procedure.md");
  return (
    <MarkdownArticle
      title="THE INJECTION PROCEDURE"
      kicker="CANON + SEEDING"
      md={md}
    />
  );
}
