import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/doctrine/grouping-algorithm`;

export const metadata: Metadata = {
  title: "The Grouping Algorithm Thesis | Trillsverse Doctrine",
  description:
    "If systems group people for extraction, build a new grouping optimized for recognition, connection, coordination, circulation, and collective function.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "The Grouping Algorithm Thesis | Trillsverse",
    description:
      "Same human nature. Different grouping. Different circulation. Different outcome.",
    url: CANONICAL,
    type: "article",
  },
};

function loadDoc(): string {
  for (const p of [
    join(process.cwd(), "content", "doctrine", "grouping-algorithm-thesis.md"),
    join(process.cwd(), "public", "doctrine", "grouping-algorithm-thesis.md"),
  ]) {
    if (existsSync(p)) return readFileSync(p, "utf8");
  }
  return "# Document unavailable";
}

export default function GroupingAlgorithmPage() {
  const md = loadDoc();

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-2">
            Doctrine · Grouping Algorithm Thesis · 2026-09-05
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
              The Grouping Algorithm Thesis
            </h1>
          </div>
          <p className="text-sm text-zinc-400 mb-4 font-mono tracking-wide">
            Same human nature. Different grouping. Different circulation. Different outcome.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
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
