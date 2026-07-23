import { readFileSync, existsSync } from "fs";
import { join } from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/doctrine/model-collapse-vs-constitutional-drift`;

export const metadata: Metadata = {
  title: "Model Collapse vs Constitutional Drift | Trillsverse Doctrine",
  description:
    "Training-loop model collapse vs decision-loop constitutional drift (OMIP). Cousins, not the same equation. Public substrate note.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: CANONICAL,
    types: {
      "text/markdown": [{ url: `${CANONICAL}.md`, title: "Markdown" }],
    },
  },
  openGraph: {
    title: "Model Collapse vs Constitutional Drift",
    description:
      "Model collapse is train→generate→retrain. Constitutional drift is plan→score→act against a registered manifold M.",
    url: CANONICAL,
    type: "article",
  },
};

function loadDoc(): string {
  for (const p of [
    join(process.cwd(), "content", "doctrine", "model-collapse-vs-constitutional-drift.md"),
    join(process.cwd(), "public", "doctrine", "model-collapse-vs-constitutional-drift.md"),
  ]) {
    if (existsSync(p)) return readFileSync(p, "utf8");
  }
  return "# Document unavailable";
}

function renderBlocks(md: string) {
  let body = md.replace(/^#[^\n]+\n+/, "");
  const blocks = body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block, i) => {
    if (block.startsWith("## "))
      return (
        <h2 key={i} className="text-xl font-bold text-white mt-10 mb-3 tracking-tight">
          {block.replace(/^##\s+/, "")}
        </h2>
      );
    if (block.startsWith("### "))
      return (
        <h3 key={i} className="text-lg font-semibold text-zinc-100 mt-8 mb-2">
          {block.replace(/^###\s+/, "")}
        </h3>
      );
    if (block.startsWith("|")) {
      const rows = block.split("\n").filter((r) => r.includes("|") && !/^\|[\s-:|]+\|$/.test(r));
      return (
        <div key={i} className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse">
            <tbody>
              {rows.map((row, ri) => {
                const cells = row
                  .split("|")
                  .map((c) => c.trim())
                  .filter(Boolean);
                return (
                  <tr key={ri} className="border-b border-white/10">
                    {cells.map((c, ci) =>
                      ri === 0 ? (
                        <th key={ci} className="py-2 pr-3 font-mono text-[11px] text-[#C5A26F]">
                          {c}
                        </th>
                      ) : (
                        <td key={ci} className="py-2 pr-3 text-zinc-300">
                          {c}
                        </td>
                      ),
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    if (block.startsWith("```") || block.startsWith("\\[")) {
      return (
        <pre
          key={i}
          className="font-mono text-xs bg-white/5 border border-white/10 p-4 overflow-x-auto text-zinc-300 my-3"
        >
          {block.replace(/^```\w*\n?/, "").replace(/```$/, "")}
        </pre>
      );
    }
    if (block.startsWith("- ") || block.startsWith("* ")) {
      const items = block.split("\n").filter((l) => /^[-*]\s/.test(l));
      return (
        <ul key={i} className="list-disc pl-5 space-y-1 text-zinc-300 my-3">
          {items.map((it, j) => (
            <li key={j}>{it.replace(/^[-*]\s+/, "")}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-zinc-300 leading-relaxed my-3">
        {block}
      </p>
    );
  });
}

export default function CollapseVsDriftPage() {
  const md = loadDoc();
  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-6">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-2">
            Doctrine · Collapse vs Drift · 2026-07-18
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
            Model Collapse vs Constitutional Drift
          </h1>
          <p className="text-sm text-zinc-400 mb-4">
            Training recursion vs decision-loop admissibility. Cousins — not the same equation.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a
              href="/doctrine/model-collapse-vs-constitutional-drift.md"
              className="border border-white/20 px-3 py-2 hover:border-amber-500/50"
            >
              Raw Markdown
            </a>
            <a
              href="https://trillsverse.com/api/omip/score"
              className="border border-white/20 px-3 py-2 hover:border-red-500/40"
            >
              OMIP score
            </a>
            <a
              href="https://trillsverse.com/api/omip/receipts"
              className="border border-white/20 px-3 py-2 hover:border-red-500/40"
            >
              Dual receipts
            </a>
            <Link href="/doctrine/sovereignty-as-invariance-constraint" className="border border-white/20 px-3 py-2">
              Sovereignty paper
            </Link>
            <Link href="/corpus.json" className="border border-white/20 px-3 py-2">
              Corpus
            </Link>
          </div>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-5 py-12">{renderBlocks(md)}</article>
      <SiteLegalFooter />
    </div>
  );
}
