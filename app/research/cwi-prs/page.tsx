import { existsSync, readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/research/cwi-prs`;

export const metadata: Metadata = {
  title: "CWI + PRS | John Brajer Research Framework",
  description:
    "John Brajer's CWI framework and nested PRS decision lens for behavioral corridors, possibility, risk perception, status payoff, and early-mover asymmetry.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    types: {
      "text/markdown": [
        {
          url: `${SITE}/research/cwi-prs.md`,
          title: "Machine-readable Markdown",
        },
      ],
    },
  },
  openGraph: {
    title: "CWI + PRS",
    description:
      "A research framework for how recognized action space changes through possibility, risk perception, social proof, and status payoff.",
    url: CANONICAL,
    type: "article",
  },
};

function loadFramework(): string {
  const path = join(process.cwd(), "public", "research", "cwi-prs.md");
  if (existsSync(path)) return readFileSync(path, "utf8");
  return "# CWI + PRS unavailable";
}

export default function CwiPrsPage() {
  const md = loadFramework();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline:
      "CWI + PRS: Behavioral Corridors, Possibility, Risk Perception, and Status Payoff",
    author: {
      "@type": "Person",
      name: "John Brajer",
      url: SITE,
    },
    datePublished: "2026-09-12",
    dateModified: "2026-09-12",
    version: "0.1",
    mainEntityOfPage: CANONICAL,
    about: [
      "behavioral corridors",
      "possibility",
      "risk perception",
      "status payoff",
      "social proof",
      "early-mover asymmetry",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-red-400 mb-3">
            Research Framework · v0.1 · 2026-09-12
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-4xl leading-[0.98]">
            CWI + PRS
          </h1>
          <p className="mt-5 max-w-3xl text-zinc-400 leading-relaxed">
            Behavioral corridors, possibility, risk perception, status payoff, and the
            asymmetry between early and late movers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a
              href="/research/cwi-prs.md"
              className="border border-white/20 px-3 py-2 hover:border-red-500/50"
            >
              Raw Markdown
            </a>
            <Link href="/theory" className="border border-white/20 px-3 py-2">
              Theory Index
            </Link>
            <Link href="/trillsverse" className="border border-white/20 px-3 py-2">
              Trillsverse
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-5 py-10">
        <div className="mb-8 border border-white/10 bg-white/[0.025] p-5 text-sm leading-relaxed text-zinc-400">
          <strong className="text-zinc-200">Terminology lock:</strong> CWI is the
          parent framework; PRS is nested beneath it. The CWI acronym remains
          intentionally unexpanded until John Brajer formally defines it.
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
