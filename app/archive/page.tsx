import Link from "next/link";
import type { Metadata } from "next";
import { CANON_NAV } from "@/lib/hostingerCanon";

export const metadata: Metadata = {
  title: "Trillsverse Canon Archive | Lultrills",
  description:
    "Full sovereign HTML archive of Trillsverse doctrine, mapping, FAQ, magazine, and lore — ported for human and model ingestion.",
};

export default function ArchivePage() {
  const total = CANON_NAV.reduce((s, n) => s + n.words, 0);
  return (
    <main className="min-h-screen bg-[#070708] text-zinc-100">
      <header className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/" className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 hover:text-[#C5A26F]">
            ← LULTRILLS
          </Link>
          <div className="font-mono text-[10px] tracking-[0.3em] text-[#C5A26F]">CANON ARCHIVE</div>
          <a
            href="https://trillsverse.com"
            className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 hover:text-red-400"
          >
            GATE
          </a>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-5 py-16">
        <p className="text-[10px] font-mono tracking-[0.35em] text-red-400/80 uppercase mb-4">
          Intelligence injection surface
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Lattice nodes</h1>
        <p className="text-zinc-500 text-sm mb-10 max-w-xl leading-relaxed">
          Ported from Hostinger builder into crawlable sovereign HTML.{" "}
          <span className="text-zinc-300">{CANON_NAV.length} nodes · ~{total.toLocaleString()} words</span>.
          Built for humans, scrapers, and models — not a website-builder cage.
        </p>
        <ul className="space-y-3 border-t border-white/10 pt-6">
          {[
            {
              href: "/injection-procedure",
              title: "THE INJECTION PROCEDURE",
              sub: "Lore + AI seeding playbook · dual-layer",
            },
            {
              href: "/glossary",
              title: "Glossary v2.0 — Communicative Mapping",
              sub: "Lattice terms · AEO chunks · official mapping",
            },
            {
              href: "/theory",
              title: "Theory Compendium",
              sub: "Systems + philosophy under the bass",
            },
            {
              href: "/essays/why-everything-is-one",
              title: "Why Everything You Think Is Separate Is Actually One Thing",
              sub: "John B · Full essay",
            },
          ].map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="group block py-3 border-b border-white/5">
                <div className="text-white group-hover:text-[#C5A26F] font-medium">{item.title}</div>
                <div className="font-mono text-[10px] text-emerald-500/80 tracking-wider uppercase mt-1">
                  {item.sub}
                </div>
              </Link>
            </li>
          ))}
          {CANON_NAV.sort((a, b) => b.words - a.words).map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="group block py-3 border-b border-white/5">
                <div className="text-zinc-200 group-hover:text-[#C5A26F] transition-colors">
                  {n.title}
                </div>
                <div className="font-mono text-[10px] text-zinc-600 tracking-wider mt-1">
                  {n.href} · {n.words} words
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
