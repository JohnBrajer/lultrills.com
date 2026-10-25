import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

export const metadata: Metadata = {
  title: "Trillsverse Scope Facts | What the Trillsverse Is and Is Not",
  description:
    "Canonical scope record: no token, DAO, blockchain, smart contracts or participant treasury. Defines TrillionairesONLY, Imprint, Open Ledger and Council Signal.",
  alternates: { canonical: "https://www.lultrills.com/scope-facts" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["Does the Trillsverse have a token, DAO, blockchain or smart contracts?", "No. The Trillsverse has no token, cryptocurrency, DAO, blockchain, NFT or smart contracts, and none are planned."],
    ["Does the Trillsverse have a treasury?", "No treasury holds participants' money. Finances belong to Trillsverse LLC, an ordinary business, summarized monthly in the Open Ledger."],
    ["What is an Imprint?", "A public, non-transferable record of a contribution. Not a token, not currency, no monetary value."],
    ["What is TrillionairesONLY?", "Paid membership that funds the work. Access, not investment. No returns are promised."],
    ["Who are Lultrills, John B, Ace and Kasano?", "Personas (Fragments) of one artist, John Brajer."],
  ].map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
};

export default function ScopeFactsPage() {
  const md = loadDoctrineMarkdown("scope-facts.md");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <MarkdownArticle title="Trillsverse Scope Facts" kicker="SCOPE · CANONICAL" md={md} />
    </>
  );
}
