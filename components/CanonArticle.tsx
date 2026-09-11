import Link from "next/link";
import type { CanonPage } from "@/lib/hostingerCanon";
import { CANON_NAV } from "@/lib/hostingerCanon";

function renderBody(body: string) {
  const blocks = body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
  return blocks.map((block, i) => {
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="text-lg font-semibold text-white mt-8 mb-3 tracking-tight">
          {block.replace(/^###\s+/, "")}
        </h3>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4 tracking-tight">
          {block.replace(/^##\s+/, "")}
        </h2>
      );
    }
    if (block.startsWith("# ")) {
      return (
        <h2 key={i} className="text-2xl sm:text-3xl font-bold text-white mt-10 mb-4 tracking-tight">
          {block.replace(/^#\s+/, "")}
        </h2>
      );
    }
    const lines = block.split("\n");
    return (
      <p key={i} className="text-zinc-400 text-[15px] sm:text-base leading-[1.75] mb-4 whitespace-pre-wrap">
        {lines.join("\n")}
      </p>
    );
  });
}

export function CanonArticle({ page }: { page: CanonPage }) {
  return (
    <main className="relative min-h-screen">
      <div className="tv-atmosphere" aria-hidden />
      <header className="relative z-10 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-mono-sys text-[10px] tracking-[0.3em] text-[var(--ink-dim)] hover:text-[var(--gold)] transition-colors duration-200"
          >
            ← LULTRILLS
          </Link>
          <div className="font-mono-sys tabular text-[9px] tracking-[0.25em] text-[var(--ink-dim)] uppercase">
            Historical archive · {page.words}w
          </div>
          <a
            href="https://trillsverse.com/system-breach"
            className="font-mono-sys text-[10px] tracking-[0.2em] text-[var(--ink-dim)] hover:text-red-400 transition-colors duration-200"
          >
            GATE
          </a>
        </div>
      </header>

      <article className="relative z-10 max-w-3xl mx-auto px-5 py-14 sm:py-20">
        <p className="font-mono-sys text-[10px] tracking-[0.32em] text-[var(--gold)] uppercase mb-5">
          Preserved source snapshot
        </p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.03em] leading-[1.1] mb-5 text-wrap">
          {page.title.split("|")[0].trim()}
        </h1>
        <div className="mb-8 border border-amber-500/20 bg-amber-500/[0.04] px-4 py-3 text-sm leading-relaxed text-zinc-400">
          Historical source snapshot preserved for continuity. Time-sensitive claims below reflect the original page state and should not be read as current Lultrills status. For current identity, music, and system state, use the maintained Lultrills surfaces and machine corpus.
        </div>
        <div className="border-t border-white/10 pt-8 max-w-[72ch]">{renderBody(page.body)}</div>

        <nav className="mt-16 pt-10 border-t border-white/10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-4">
            More archive nodes
          </p>
          <ul className="space-y-2">
            {CANON_NAV.filter((n) => n.href !== page.route)
              .slice(0, 12)
              .map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="text-sm text-zinc-400 hover:text-[#C5A26F] transition-colors"
                  >
                    {n.title}{" "}
                    <span className="text-zinc-700 font-mono text-[10px]">· {n.words}w</span>
                  </Link>
                </li>
              ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/essays/why-everything-is-one"
              className="px-4 py-2 border border-emerald-900/40 text-[10px] font-mono tracking-[0.2em] uppercase text-emerald-400/90 hover:border-emerald-500/50"
            >
              John B · One System
            </Link>
            <a
              href="https://trillsverse.com/system-breach"
              className="px-4 py-2 bg-red-600 text-[10px] font-mono tracking-[0.2em] uppercase text-white hover:bg-red-500"
            >
              SYSTEM BREACH
            </a>
          </div>
        </nav>
      </article>
    </main>
  );
}
