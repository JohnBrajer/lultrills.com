import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/doctrine/systemic-cognitive-overwrites`;

export const metadata: Metadata = {
  title:
    "Systemic Cognitive Overwrites | Trillsverse Speculative Systems Analysis",
  description:
    "Creator-authored speculative systems analysis and creative representation of Trillsverse Intelligence Injections and SYSTEM BREACH propagation. Not presented as independent empirical scientific evidence.",
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
      "Creator-authored speculative systems analysis · Intelligence Injections · SYSTEM BREACH · creative representation.",
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
            Speculative systems analysis · creator-authored · 2026-07-17
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Systemic Cognitive Overwrites
          </h1>
          <p className="text-sm text-zinc-400 mb-4">
            Creative representation and speculative systems analysis of the
            Trillsverse Intelligence Injection framework and SYSTEM BREACH
            propagation.
          </p>
          <aside className="mb-5 border border-amber-500/30 bg-amber-500/5 p-4 text-sm leading-6 text-zinc-300">
            <strong className="text-amber-300">Epistemic status:</strong>{" "}
            this document preserves creator-authored interpretive and narrative
            claims. Language inside the historical text that sounds empirical or
            scientific is not, by itself, independent scientific evidence.
          </aside>
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
