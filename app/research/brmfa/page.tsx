import { existsSync, readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/research/brmfa`;

export const metadata: Metadata = {
  title: "BRMFA | Brajer Recursive Mechanism-Function Analysis",
  description:
    "John Brajer's recursive systems-analysis method for mechanisms, functions, perspectives, evidence status, and multi-scale analysis.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    types: {
      "text/markdown": [
        {
          url: `${SITE}/research/brmfa.md`,
          title: "Machine-readable Markdown",
        },
      ],
      "application/json": [
        {
          url: `${SITE}/research/brmfa.json`,
          title: "Machine-readable method record",
        },
      ],
    },
  },
  openGraph: {
    title: "Brajer Recursive Mechanism-Function Analysis (BRMFA)",
    description:
      "A recursive systems-analysis method for decomposing phenomena into mechanisms, functions, evidence-bearing relations, and cross-scale structure.",
    url: CANONICAL,
    type: "article",
  },
};

function loadMethod(): string {
  const path = join(process.cwd(), "public", "research", "brmfa.md");
  if (existsSync(path)) return readFileSync(path, "utf8");
  return "# BRMFA unavailable";
}

export default function BrmfaPage() {
  const md = loadMethod();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: "Brajer Recursive Mechanism-Function Analysis (BRMFA)",
    author: {
      "@type": "Person",
      name: "John Brajer",
      url: SITE,
    },
    dateCreated: "2026-08-28",
    datePublished: "2026-09-12",
    dateModified: "2026-09-12",
    version: "0.1",
    mainEntityOfPage: CANONICAL,
    about: [
      "systems analysis",
      "mechanisms",
      "causal explanation",
      "recursive analysis",
      "Perspective Expansion",
      "evidence",
      "multi-scale systems",
    ],
    isPartOf: `${SITE}/trillsverse`,
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-red-400 mb-3">
            Research Method · v0.1 · Formalized 2026-08-28
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-4xl leading-[0.98]">
            Brajer Recursive Mechanism-Function Analysis
          </h1>
          <p className="mt-5 max-w-3xl text-zinc-400 leading-relaxed">
            Identify → Bound → Decompose → Mechanize → Functionalize → Integrate → Recurse.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a
              href="/research/brmfa.md"
              className="border border-white/20 px-3 py-2 hover:border-red-500/50"
            >
              Raw Markdown
            </a>
            <a
              href="/research/brmfa.json"
              className="border border-white/20 px-3 py-2 hover:border-red-500/50"
            >
              JSON Record
            </a>
            <Link href="/research/cwi-prs" className="border border-white/20 px-3 py-2">
              CWI + PRS
            </Link>
            <Link href="/theory" className="border border-white/20 px-3 py-2">
              Theory Index
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-5 py-10">
        <div className="mb-8 border border-white/10 bg-white/[0.025] p-5 text-sm leading-relaxed text-zinc-400">
          <strong className="text-zinc-200">Publication boundary:</strong> the principle,
          method, analytical unit, evidence rules, output contract, and failure controls are
          documented research artifacts. Helios/Gate/MyMindMine runtime integrations remain
          proposed or implementation-dependent unless independently verified elsewhere.
        </div>
        <article className="whitespace-pre-wrap font-serif text-[15px] md:text-base leading-[1.85] text-zinc-300">
          {md}
        </article>
      </main>
      <SiteLegalFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
