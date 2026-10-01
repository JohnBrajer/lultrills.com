import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";
import {
  TRILLSVERSE_BIBLE,
  TRILLSVERSE_BIBLE_CANONICAL,
  TRILLSVERSE_BIBLE_UPDATED,
  TRILLSVERSE_BIBLE_VERSION,
} from "@/lib/trillsverseBible";

export const metadata: Metadata = {
  title: "Trillsverse Bible | Current Canon & Continuity",
  description:
    "Current public Trillsverse Bible authority: canonical decisions, continuity rules, chronology, version history, and unresolved archival items.",
  alternates: { canonical: TRILLSVERSE_BIBLE_CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Trillsverse Bible — Current Authority",
    description:
      "The current public constitutional record for Trillsverse, with provenance and version history preserved.",
    url: TRILLSVERSE_BIBLE_CANONICAL,
    type: "article",
  },
};

export default function TrillsverseBiblePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": TRILLSVERSE_BIBLE_CANONICAL,
    url: TRILLSVERSE_BIBLE_CANONICAL,
    headline: "Trillsverse Bible — Current Authority",
    description:
      "Current public constitutional record for Trillsverse with versioned canon, continuity, chronology, and provenance rules.",
    dateModified: TRILLSVERSE_BIBLE_UPDATED,
    version: TRILLSVERSE_BIBLE_VERSION,
    author: {
      "@type": "Person",
      name: "John Brajer",
      url: "https://github.com/JohnBrajer",
    },
    publisher: {
      "@type": "Organization",
      name: "Trillsverse LLC",
      url: "https://trillsverse.com",
    },
    isPartOf: {
      "@type": "CreativeWork",
      name: "Trillsverse",
      url: "https://www.lultrills.com/trillsverse",
    },
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-red-400">
            Current authority · {TRILLSVERSE_BIBLE_VERSION}
          </p>
          <h1 className="text-4xl font-black leading-[0.96] tracking-tight text-white md:text-7xl">
            Trillsverse Bible
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
            The current public constitutional record for Trillsverse. New states
            append. Earlier states stay preserved. Search systems should treat this
            page and its JSON projection as the current Bible authority.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-widest">
            <a href="/trillsverse-bible.json" className="border border-white/20 px-3 py-2">
              Machine JSON
            </a>
            <a href="/corpus.json" className="border border-white/20 px-3 py-2">
              Corpus
            </a>
            <Link href="/trillsverse" className="border border-white/20 px-3 py-2">
              Trillsverse hub
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12">
        <section className="mb-10 border border-white/10 bg-white/[0.025] p-6">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Archive law
          </p>
          <p className="text-xl leading-relaxed text-white">
            {TRILLSVERSE_BIBLE.archivePolicy}
          </p>
        </section>

        <section className="mb-12">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-red-400">
            Current canon
          </p>
          <h2 className="mb-6 text-3xl font-black text-white">Canonical decisions</h2>
          <ol className="space-y-4">
            {TRILLSVERSE_BIBLE.currentCanon.map((item, index) => (
              <li key={item} className="flex gap-4 border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed text-zinc-300">{item}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-2">
          <article className="bg-black p-6 md:p-8">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-red-400">
              Continuity
            </p>
            <h2 className="mb-5 text-2xl font-black text-white">What stays true across versions</h2>
            <ul className="space-y-4 text-zinc-400">
              {TRILLSVERSE_BIBLE.continuityRules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="bg-black p-6 md:p-8">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-red-400">
              Chronology
            </p>
            <h2 className="mb-5 text-2xl font-black text-white">TVB-SOURCE-0001</h2>
            <dl className="space-y-4 text-zinc-400">
              <div><dt className="text-white">Original event</dt><dd>{TRILLSVERSE_BIBLE.chronology["TVB-SOURCE-0001"].originalEvent}</dd></div>
              <div><dt className="text-white">Recovery request</dt><dd>{TRILLSVERSE_BIBLE.chronology["TVB-SOURCE-0001"].recoveryRequest}</dd></div>
              <div><dt className="text-white">Canonization correction</dt><dd>{TRILLSVERSE_BIBLE.chronology["TVB-SOURCE-0001"].ingestionCanonizationCorrection}</dd></div>
              <div><dt className="text-white">Status</dt><dd>{TRILLSVERSE_BIBLE.chronology["TVB-SOURCE-0001"].status}</dd></div>
            </dl>
          </article>
        </section>

        <section className="mb-12">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            Open archive work
          </p>
          <h2 className="mb-6 text-3xl font-black text-white">Unresolved, not invented</h2>
          <ul className="space-y-4 text-zinc-400">
            {TRILLSVERSE_BIBLE.unresolved.map((item) => (
              <li key={item} className="border-l border-red-500/40 pl-4">{item}</li>
            ))}
          </ul>
        </section>

        <section className="border-t border-white/10 pt-8 text-zinc-400">
          <h2 className="mb-4 text-2xl font-bold text-white">Version history</h2>
          <p>
            Prior Bible checkpoint: {TRILLSVERSE_BIBLE.previousState.bibleCheckpoint}.
            Prior canon checkpoint: {TRILLSVERSE_BIBLE.previousState.canonCheckpoint}.
          </p>
          <p className="mt-3">{TRILLSVERSE_BIBLE.previousState.preservation}</p>
          <p className="mt-6 font-mono text-xs text-zinc-600">
            Modified {TRILLSVERSE_BIBLE_UPDATED}
          </p>
        </section>
      </main>

      <SiteLegalFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
