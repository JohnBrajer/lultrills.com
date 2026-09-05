import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/doctrine/john-b-irreversible-math`;

export const metadata: Metadata = {
  title: "John B: Irreversible Math | Trillsverse Canon",
  description:
    "John B converts living signal into decisions that survive contact with time, money, bodies, consequence, and other people's motives.",
  robots: { index: true, follow: true },
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "John B: Irreversible Math | Trillsverse",
    description:
      "Do not make an irreversible move on a reversible feeling. Lock, release, or wait when the case can survive time.",
    url: CANONICAL,
    type: "article",
  },
};

function loadDoc(): string {
  for (const p of [
    join(process.cwd(), "content", "doctrine", "john-b-irreversible-math.md"),
    join(process.cwd(), "public", "doctrine", "john-b-irreversible-math.md"),
  ]) {
    if (existsSync(p)) return readFileSync(p, "utf8");
  }
  return "# Document unavailable";
}

export default function JohnBIrreversibleMathPage() {
  const md = loadDoc();

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-2">
            Canon · John B · Irreversible Math · 2026-09-05
          </p>
          <div className="flex items-center gap-3 mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/mark-inner.svg" alt="" width={32} height={32} aria-hidden />
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              John B: Irreversible Math
            </h1>
          </div>
          <p className="text-sm text-zinc-400 mb-4 font-mono tracking-wide">
            Translation layer · consequence at full weight · lock, release, or wait.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a href="/doctrine/john-b-irreversible-math.md" className="border border-white/20 px-3 py-2 hover:border-amber-500/50">
              Raw Markdown
            </a>
            <Link href="/trillsverse" className="border border-white/20 px-3 py-2 hover:border-amber-500/50">
              Trillsverse hub
            </Link>
            <Link href="/corpus.json" className="border border-white/20 px-3 py-2 hover:border-amber-500/50">
              Corpus JSON
            </Link>
            <Link href="/llms-full.txt" className="border border-white/20 px-3 py-2 hover:border-amber-500/50">
              Full corpus
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
