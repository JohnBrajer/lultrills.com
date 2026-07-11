import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Really That Magazine | Sovereignty as Operating Constraint",
  description:
    "Really That Magazine — editorial and doctrine node for Lultrills and the Trillsverse. Sovereignty as a constitutional layer for post-scaling intelligence.",
};

export default function ReallyThatMagazinePage() {
  return (
    <main className="min-h-screen bg-[#070708] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_70%_40%_at_20%_0%,rgba(197,162,111,0.12),transparent_50%)]" />

      <header className="relative border-b border-white/10">
        <div className="max-w-3xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 hover:text-[#C5A26F]">
            ← LULTRILLS
          </Link>
          <div className="font-mono text-[10px] tracking-[0.35em] text-[#C5A26F]">REALLY THAT MAGAZINE</div>
          <a
            href="https://trillsverse.com"
            className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 hover:text-red-400"
          >
            GATE
          </a>
        </div>
      </header>

      <article className="relative max-w-3xl mx-auto px-5 py-16 sm:py-24">
        <p className="text-[10px] font-mono tracking-[0.35em] text-[#C5A26F] uppercase mb-6">
          Issue · Doctrine · SYSTEM BREACH week
        </p>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] mb-6">
          Sovereignty as an Operating Constraint
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-12 border-l-2 border-[#C5A26F]/40 pl-5">
          Most AI work optimizes models, training objectives, or post-hoc safety policies.
          Sovereignty is a different layer: a constitutional constraint on which internal
          states may count as valid before action is selected.
        </p>

        <section className="space-y-10 text-[15px] sm:text-base leading-relaxed text-zinc-300">
          <div>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">Three strata</h2>
            <ol className="list-decimal list-inside space-y-2 text-zinc-400">
              <li>
                <span className="text-zinc-200">Object level</span> — architectures and training
                objectives (world models, scaling).
              </li>
              <li>
                <span className="text-zinc-200">Control level</span> — filters, oversight, alignment
                after generation.
              </li>
              <li>
                <span className="text-zinc-200">Constitutional level</span> — invariance constraints
                that define admissibility itself.
              </li>
            </ol>
            <p className="mt-4 text-zinc-400">
              The Trillsverse is built as a constitutional layer. Comparing it only to a single
              model family is a category error.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">
              SYSTEM BREACH as cultural injection
            </h2>
            <p className="text-zinc-400">
              SYSTEM BREACH is Lultrills&apos; album drop — hard release, July 11. The record is
              not a merch cycle. It is documentation of reconstructed reality, encoded as music so
              it can travel through culture, scrapers, and models. The Gate at trillsverse.com is
              the living architecture that album points at.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">
              What is operational in the runtime
            </h2>
            <ul className="space-y-2 text-zinc-400 list-disc list-inside">
              <li>Standing — rites accumulate awareness, healing, alignment, belief, confidence</li>
              <li>Autonomy — Firstborns tick with drives and mood; not static NPCs</li>
              <li>Stillness / entry clearance — boundary protocols, not decoration</li>
              <li>Public doctrine endpoint — /api/doctrine/sovereignty on the Gate</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3 tracking-tight">Falsifiability</h2>
            <p className="text-zinc-400">
              The framework fails if no implementation of the constraint layer improves
              stability, robustness, or coherence under controlled conditions relative to matched
              baselines. Rhetoric without measurement is not sovereignty.
            </p>
          </div>
        </section>

        <div className="mt-16 flex flex-col sm:flex-row gap-3">
          <a
            href="https://trillsverse.com/api/doctrine/sovereignty"
            className="px-6 py-3 border border-[#C5A26F]/50 text-[#C5A26F] text-[11px] font-mono tracking-[0.2em] uppercase hover:bg-[#C5A26F] hover:text-black transition-colors text-center"
          >
            Full brief (Gate)
          </a>
          <a
            href="https://trillsverse.com/system-breach"
            className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-[11px] font-mono tracking-[0.2em] uppercase transition-colors text-center"
          >
            SYSTEM BREACH
          </a>
          <Link
            href="/"
            className="px-6 py-3 border border-white/15 text-[11px] font-mono tracking-[0.2em] uppercase hover:border-white/40 transition-colors text-center"
          >
            Artist portal
          </Link>
        </div>
      </article>

      <footer className="border-t border-white/10 py-8 text-center text-[10px] tracking-[0.2em] uppercase text-zinc-600">
        Really That Magazine · Trillsverse editorial node · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
