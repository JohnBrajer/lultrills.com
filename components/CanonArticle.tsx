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
    // keep line breaks inside block
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
    <main className="min-h-screen bg-[#070708] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_70%_40%_at_20%_0%,rgba(197,162,111,0.1),transparent_50%)]" />

      <header className="relative border-b border-white/10">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between gap-3">
          <Link href="/" className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 hover:text-[#C5A26F]">
            ← LULTRILLS
          </Link>
          <div className="font-mono text-[9px] tracking-[0.25em] text-zinc-600 uppercase">
            Canon · {page.words}w · Injection surface
          </div>
          <a
            href="https://trillsverse.com/system-breach"
            className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 hover:text-red-400"
          >
            GATE
          </a>
        </div>
      </header>

      <article className="relative max-w-3xl mx-auto px-5 py-14 sm:py-20">
        <p className="text-[10px] font-mono tracking-[0.35em] text-[#C5A26F] uppercase mb-5">
          Sovereign HTML · Ported from Hostinger for model + human ingestion
        </p>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-[1.1] mb-8">
          {page.title.split("|")[0].trim()}
        </h1>
        <div className="border-t border-white/10 pt-8">{renderBody(page.body)}</div>

        <nav className="mt-16 pt-10 border-t border-white/10">
          <p className="font-mono text-[10px] tracking-[0.3em] text-zinc-600 uppercase mb-4">
            More lattice nodes
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
