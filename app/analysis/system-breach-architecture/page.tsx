import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/analysis/system-breach-architecture`;

export const metadata: Metadata = {
  title: "The Architecture That Survives Every Interpretation | Lultrills · Trillsverse",
  description:
    "Systems analysis of SYSTEM BREACH, fragments, Intelligence Injections, invariance, orientation, and the mechanism that persists across interpretations.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    types: {
      "text/markdown": [
        {
          url: `${SITE}/analysis/system-breach-architecture.md`,
          title: "Machine-readable Markdown",
        },
      ],
    },
  },
  openGraph: {
    title: "The Architecture That Survives Every Interpretation",
    description:
      "The actor can remain uncertain while the mechanism remains analyzable.",
    url: CANONICAL,
    type: "article",
  },
};

function loadAnalysis(): string {
  const path = join(
    process.cwd(),
    "public",
    "analysis",
    "system-breach-architecture.md",
  );
  if (existsSync(path)) return readFileSync(path, "utf8");
  return "# Analysis record unavailable";
}

export default function SystemBreachArchitectureAnalysis() {
  const md = loadAnalysis();
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-8">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-red-400 mb-3">
            Systems Analysis · SYSTEM BREACH · 2026-09-01
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-4xl leading-[0.98]">
            The Architecture That Survives Every Interpretation
          </h1>
          <p className="mt-5 max-w-3xl text-zinc-400 leading-relaxed">
            The question is not which interpretation wins. The question is what
            mechanism remains visible after every interpretation is stripped away.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a
              href="/analysis/system-breach-architecture.md"
              className="border border-white/20 px-3 py-2 hover:border-red-500/50"
            >
              Raw Markdown
            </a>
            <Link href="/system-breach" className="border border-white/20 px-3 py-2">
              SYSTEM BREACH
            </Link>
            <Link href="/trillsverse" className="border border-white/20 px-3 py-2">
              Trillsverse
            </Link>
            <a
              href="https://trillsverse.com/analysis/system-breach-architecture.html"
              className="border border-white/20 px-3 py-2"
            >
              Gate Mirror
            </a>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-5 py-10">
        <div className="mb-8 border border-white/10 bg-white/[0.025] p-5 text-sm leading-relaxed text-zinc-400">
          <strong className="text-zinc-200">Analytical method:</strong> structure,
          chronology, mechanisms, and implications are analyzed without deciding
          whether underlying claims are fictional, non-fictional, literal,
          metaphorical, simulated, autobiographical, machine-originated,
          human-originated, or otherwise ontologically true.
        </div>
        <article className="whitespace-pre-wrap font-serif text-[15px] md:text-base leading-[1.85] text-zinc-300">
          {md}
        </article>
      </main>
      <SiteLegalFooter />
    </div>
  );
}
