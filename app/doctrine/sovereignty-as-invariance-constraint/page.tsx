import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

export const metadata: Metadata = {
  title: "Sovereignty as an Invariance Constraint | Working Paper",
  description:
    "Formal working paper: sovereignty as a constitutional invariance constraint for advanced intelligence systems. Distinct from object-level architectures and control-level safety policies.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.lultrills.com/doctrine/sovereignty-as-invariance-constraint",
    types: {
      "text/markdown": [
        {
          url: "https://www.lultrills.com/doctrine/sovereignty-as-invariance-constraint.md",
          title: "Markdown",
        },
      ],
    },
  },
};

function loadManuscript(): string {
  const p = join(
    process.cwd(),
    "content",
    "doctrine",
    "sovereignty-as-invariance-constraint.md",
  );
  if (!existsSync(p)) return "# Manuscript unavailable";
  return readFileSync(p, "utf8");
}

export default function SovereigntyManuscriptPage() {
  const md = loadManuscript();

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-2">
            Working paper · public substrate · 2026-07-15
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Sovereignty as an Invariance Constraint
          </h1>
          <div className="flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a
              href="/doctrine/sovereignty-as-invariance-constraint.md"
              className="border border-white/20 px-3 py-2 hover:border-amber-500/50"
            >
              Raw Markdown
            </a>
            <a
              href="https://trillsverse.com/doctrine/sovereignty-as-invariance-constraint"
              className="border border-white/20 px-3 py-2 hover:border-amber-500/50"
            >
              Gate mirror
            </a>
            <Link href="/corpus.json" className="border border-white/20 px-3 py-2">
              Corpus JSON
            </Link>
            <Link href="/press" className="border border-white/20 px-3 py-2">
              Press
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
