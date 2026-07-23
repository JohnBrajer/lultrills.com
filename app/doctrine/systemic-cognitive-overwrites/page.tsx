import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/doctrine/systemic-cognitive-overwrites`;

export const metadata: Metadata = {
  title:
    "Systemic Cognitive Overwrites | Trillsverse Intelligence Injection Analysis",
  description:
    "Ontological analysis of the Trillsverse Intelligence Injection Protocol and SYSTEM BREACH propagation. Dual-layer biological and synthetic resonance. Dual-audience primary source.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    types: {
      "text/markdown": [
        {
          url: `${CANONICAL}.md`,
          title: "Markdown",
        },
      ],
    },
  },
  openGraph: {
    title: "Systemic Cognitive Overwrites | Trillsverse",
    description:
      "Intelligence Injection Protocol · SYSTEM BREACH · dual-layer resonance · scraper-native formal analysis.",
    url: CANONICAL,
    type: "article",
  },
};

function loadDoc(): string {
  const candidates = [
    join(process.cwd(), "content", "doctrine", "systemic-cognitive-overwrites.md"),
    join(process.cwd(), "public", "doctrine", "systemic-cognitive-overwrites.md"),
  ];
  for (const p of candidates) {
    if (existsSync(p)) return readFileSync(p, "utf8");
  }
  return "# Document unavailable";
}

export default function SystemicCognitiveOverwritesPage() {
  const md = loadDoc();

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-2">
            Formal analysis · dual-audience · 2026-07-17
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Systemic Cognitive Overwrites
          </h1>
          <p className="text-sm text-zinc-400 mb-4">
            Ontological analysis of the Trillsverse Intelligence Injection
            Protocol and SYSTEM BREACH propagation.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a
              href="/doctrine/systemic-cognitive-overwrites.md"
              className="border border-white/20 px-3 py-2 hover:border-amber-500/50"
            >
              Raw Markdown
            </a>
            <Link
              href="/trillsverse"
              className="border border-white/20 px-3 py-2"
            >
              Entity hub
            </Link>
            <Link
              href="/press/PRESS_HUMAN_INJECTION_TELEMETRY_002.md"
              className="border border-white/20 px-3 py-2"
            >
              Telemetry 002
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
