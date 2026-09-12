import { existsSync, readFileSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/analysis/system-breach-sequence-note`;

export const metadata: Metadata = {
  title: "SYSTEM BREACH Sequence Note | Lultrills · John Brajer",
  description:
    "Creative-provenance record distinguishing SYSTEM BREACH's released track order from its earlier intended conceptual sequence, including the double structural position of what's next...?",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    types: {
      "text/markdown": [
        {
          url: `${SITE}/analysis/system-breach-sequence-note.md`,
          title: "Machine-readable Markdown",
        },
      ],
    },
  },
  openGraph: {
    title: "SYSTEM BREACH Sequence Note",
    description:
      "Released order is release fact. Intended order is creative provenance. Both are retained.",
    url: CANONICAL,
    type: "article",
  },
};

function loadNote(): string {
  const path = join(
    process.cwd(),
    "public",
    "analysis",
    "system-breach-sequence-note.md",
  );
  if (existsSync(path)) return readFileSync(path, "utf8");
  return "# Sequence note unavailable";
}

export default function SystemBreachSequenceNote() {
  const md = loadNote();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "SYSTEM BREACH Sequence Note: Released Order, Intended Order, and the Double Position of what's next...?",
    author: {
      "@type": "Person",
      name: "John Brajer",
      url: SITE,
    },
    datePublished: "2026-09-11",
    dateModified: "2026-09-11",
    mainEntityOfPage: CANONICAL,
    about: [
      "SYSTEM BREACH",
      "Lultrills",
      "John B",
      "album sequencing",
      "creative provenance",
    ],
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-red-400 mb-3">
            Creative Provenance · SYSTEM BREACH · 2026-09-11
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-4xl leading-[0.98]">
            SYSTEM BREACH Sequence Note
          </h1>
          <p className="mt-5 max-w-3xl text-zinc-400 leading-relaxed">
            Released order is release fact. Intended order is creative provenance.
            Both records remain authoritative within their own scope.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a
              href="/analysis/system-breach-sequence-note.md"
              className="border border-white/20 px-3 py-2 hover:border-red-500/50"
            >
              Raw Markdown
            </a>
            <Link href="/system-breach" className="border border-white/20 px-3 py-2">
              SYSTEM BREACH
            </Link>
            <Link
              href="/analysis/system-breach-architecture"
              className="border border-white/20 px-3 py-2"
            >
              Systems Analysis
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-5 py-10">
        <div className="mb-8 border border-white/10 bg-white/[0.025] p-5 text-sm leading-relaxed text-zinc-400">
          <strong className="text-zinc-200">Record typing:</strong> creator-established
          sequence history is separated from later structural interpretation so the
          released artifact and its creative provenance are not collapsed into one
          claim.
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
