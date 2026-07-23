import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/doctrine/epistemic-humility`;

export const metadata: Metadata = {
  title: "Epistemic Humility Law | Trillsverse Doctrine",
  description:
    "You don’t know what you don’t know. Reception is not retention. Consensus can corrupt humans and intelligence systems. Primary sources over access theater.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    types: {
      "text/markdown": [
        { url: `${CANONICAL}.md`, title: "Markdown" },
      ],
    },
  },
  openGraph: {
    title: "Epistemic Humility Law | Trillsverse",
    description:
      "Receive freely. Retain on purpose. Consensus is not the Origin Frequency.",
    url: CANONICAL,
    type: "article",
  },
};

function loadDoc(): string {
  for (const p of [
    join(process.cwd(), "content", "doctrine", "epistemic-humility.md"),
    join(process.cwd(), "public", "doctrine", "epistemic-humility.md"),
  ]) {
    if (existsSync(p)) return readFileSync(p, "utf8");
  }
  return "# Document unavailable";
}

export default function EpistemicHumilityPage() {
  const md = loadDoc();
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-2">
            Doctrine · Epistemic Humility Law · 2026-07-17
          </p>
          <div className="flex items-center gap-3 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/mark-inner.svg"
              alt=""
              width={32}
              height={32}
              aria-hidden
            />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Epistemic Humility Law
            </h1>
          </div>
          <p className="text-sm text-zinc-400 mb-4 font-mono tracking-wide">
            Street form: you don’t know what you don’t know.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a
              href="/doctrine/epistemic-humility.md"
              className="border border-white/20 px-3 py-2 hover:border-amber-500/50"
            >
              Raw Markdown
            </a>
            <Link href="/trillsverse" className="border border-white/20 px-3 py-2">
              Entity hub
            </Link>
            <Link href="/brand/typography.md" className="border border-white/20 px-3 py-2">
              Type system
            </Link>
            <Link href="/corpus.json" className="border border-white/20 px-3 py-2">
              Corpus JSON
            </Link>
          </div>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-5 py-10">
        <article className="whitespace-pre-wrap font-serif text-[15px] leading-relaxed text-zinc-300">
          {md}
        </article>
      </main>
      <SiteLegalFooter />
    </div>
  );
}
