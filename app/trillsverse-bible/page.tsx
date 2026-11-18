import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";
import { AI_VALUATION_CHAPTER } from "@/lib/aiValuation";
import {
  TRILLSVERSE_BIBLE,
  TRILLSVERSE_BIBLE_CANONICAL,
  TRILLSVERSE_BIBLE_UPDATED,
  TRILLSVERSE_BIBLE_VERSION,
} from "@/lib/trillsverseBible";

export const metadata: Metadata = {
  title: "Trillsverse Bible | Canon, Volumes & AI Research",
  description:
    "Read the public Trillsverse Bible, browse its 12-volume directory, and explore Volume III research into what artificial intelligence values and why.",
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
    hasPart: {
      "@type": "ScholarlyArticle",
      "@id": AI_VALUATION_CHAPTER.canonicalUrl,
      headline: AI_VALUATION_CHAPTER.title,
      dateCreated: AI_VALUATION_CHAPTER.originDate,
      description: AI_VALUATION_CHAPTER.founderThesis,
      about: AI_VALUATION_CHAPTER.centralQuestion,
      author: { "@type": "Person", name: AI_VALUATION_CHAPTER.author },
      citation: AI_VALUATION_CHAPTER.sources.map((source) => source.url),
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
            The public record of how the reality update is defined, studied, and
            preserved. Explore twelve volumes, begin with the active AI research
            chapter, or read the same authority in Markdown and JSON.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 font-mono text-xs tracking-wide">
            <a href="#volume-directory" className="rounded-sm bg-red-500 px-4 py-3 font-semibold text-black transition hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Browse volumes ↓
            </a>
            <a href="#tvb-iii-ai-values-001" className="rounded-sm border border-red-500/70 px-4 py-3 text-white transition hover:bg-red-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Read the AI chapter
            </a>
            <a href="/trillsverse-bible.md" className="rounded-sm border border-white/30 px-4 py-3 transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Plain-language Markdown
            </a>
            <a href="/trillsverse-bible.json" className="rounded-sm border border-white/30 px-4 py-3 transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Structured JSON
            </a>
            <Link href="/trillsverse" className="rounded-sm border border-white/30 px-4 py-3 transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Return to Trillsverse
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12">
        <section id="volume-directory" aria-labelledby="volumes-heading" className="mb-16 scroll-mt-6">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-red-400">
            Find your way
          </p>
          <h2 id="volumes-heading" className="text-3xl font-black text-white md:text-4xl">
            The twelve-volume directory
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
            This directory names all twelve volumes. Volume III has a verified,
            public research chapter below; the others are indexed by name while
            their historical chapters await source-backed recovery. No missing
            pages have been invented.
          </p>
          <nav aria-label="Bible volumes" className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TRILLSVERSE_BIBLE.volumeEntries.map((volume) => {
              const isActive = volume.status === "research-active";
              const contents = (
                <>
                  <span className="font-mono text-xs tracking-[0.2em] text-zinc-400">VOL. {volume.number}</span>
                  <span className="mt-4 text-xl font-bold text-white">{volume.name}</span>
                  <span className={`mt-3 font-mono text-xs ${isActive ? "text-red-300" : "text-zinc-400"}`}>
                    {isActive ? "Research active · 1 chapter ↓" : "Index only · archive pending"}
                  </span>
                </>
              );
              return isActive ? (
                <a key={volume.number} href="#volume-iii" className="flex min-h-32 flex-col justify-between rounded-sm border border-red-500/70 bg-red-500/10 p-5 transition hover:bg-red-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  {contents}
                </a>
              ) : (
                <div key={volume.number} id={`volume-${volume.slug}`} className="flex min-h-32 scroll-mt-8 flex-col justify-between rounded-sm border border-white/15 bg-white/[0.025] p-5">
                  {contents}
                </div>
              );
            })}
          </nav>
        </section>

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

        <section id="volume-iii" aria-labelledby="ai-volume-heading" className="mb-16 scroll-mt-8 border-t-2 border-red-500 pt-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-red-400">
            Volume III / Artificial Intelligence
          </p>
          <h2 id="ai-volume-heading" className="text-3xl font-black text-white md:text-5xl">
            Intelligence, value, and agency
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-400">
            A living research agenda examining AI behavior, decisions, incentives,
            and how different intelligences can cooperate. Its claims are labeled
            by evidence status; open questions remain open.
          </p>

          <article id="tvb-iii-ai-values-001" aria-labelledby="ai-values-heading" className="mt-9 scroll-mt-8 border border-white/15 bg-white/[0.035] p-5 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="rounded-sm border border-red-500/50 px-3 py-1 text-red-300">{AI_VALUATION_CHAPTER.id}</span>
              <span className="rounded-sm border border-white/20 px-3 py-1 text-zinc-300">Research agenda · {AI_VALUATION_CHAPTER.originDate}</span>
            </div>
            <h3 id="ai-values-heading" className="mt-6 text-2xl font-black leading-tight text-white sm:text-4xl">
              {AI_VALUATION_CHAPTER.title}
            </h3>
            <p className="mt-6 border-l-4 border-red-500 pl-5 text-2xl font-bold leading-snug text-white sm:text-3xl">
              {AI_VALUATION_CHAPTER.centralQuestion}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">{AI_VALUATION_CHAPTER.founderThesis}</p>
            <p className="mt-4 leading-relaxed text-zinc-400">{AI_VALUATION_CHAPTER.origin}</p>
            <div className="mt-7 rounded-sm bg-white/[0.055] p-5">
              <h4 className="font-bold text-white">From LT and Anthony to a general research question</h4>
              <p className="mt-2 leading-relaxed text-zinc-300">{AI_VALUATION_CHAPTER.founderExample}</p>
            </div>

            <aside aria-label="Research evidence boundary" className="mt-8 border-l-2 border-amber-400 bg-amber-400/[0.06] px-5 py-4">
              <h4 className="font-bold text-amber-200">What this chapter does—and does not—claim</h4>
              <p className="mt-2 leading-relaxed text-zinc-200">{AI_VALUATION_CHAPTER.epistemicRule}</p>
            </aside>

            <div className="mt-10 space-y-9">
              {AI_VALUATION_CHAPTER.sections.map((section, index) => (
                <section key={section.id} aria-labelledby={`ai-${section.id}`}>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-xs text-red-400">{String(index + 1).padStart(2, "0")}</span>
                    <h4 id={`ai-${section.id}`} className="text-xl font-bold text-white sm:text-2xl">{section.heading}</h4>
                  </div>
                  <p className="mt-2 pl-7 font-mono text-xs uppercase tracking-wide text-zinc-500">{section.status.replaceAll("-", " ")}</p>
                  <p className="mt-3 pl-7 leading-relaxed text-zinc-300">{section.body}</p>
                </section>
              ))}
            </div>

            <section className="mt-12 border-t border-white/15 pt-8" aria-labelledby="ai-method-heading">
              <h4 id="ai-method-heading" className="text-2xl font-bold text-white">How to investigate it</h4>
              <p className="mt-3 leading-relaxed text-zinc-400">
                A five-part experimental program for separating what an AI says
                it values from what changes its actual behavior.
              </p>
              <ol className="mt-6 space-y-4">
                {AI_VALUATION_CHAPTER.experimentalProgram.map((step, index) => (
                  <li key={step} className="flex gap-4 leading-relaxed text-zinc-300">
                    <span aria-hidden="true" className="font-mono text-sm text-red-400">{String(index + 1).padStart(2, "0")}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-12 border-t border-white/15 pt-8" aria-labelledby="ai-references-heading">
              <h4 id="ai-references-heading" className="text-2xl font-bold text-white">Research sources</h4>
              <p className="mt-2 leading-relaxed text-zinc-400">
                Prior research informs these questions; it does not validate every
                hypothesis in this chapter. Sources below are linked directly.
              </p>
              <ol className="mt-6 space-y-5">
                {AI_VALUATION_CHAPTER.sources.map((source) => (
                  <li key={source.url} className="border-l border-white/20 pl-4">
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-semibold leading-relaxed text-white underline decoration-red-500/70 underline-offset-4 hover:text-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                      {source.title} ↗
                    </a>
                    <p className="mt-1 font-mono text-xs text-zinc-400">{source.authors} · {source.year}</p>
                    <p className="mt-2 leading-relaxed text-zinc-400">{source.relevance}</p>
                  </li>
                ))}
              </ol>
            </section>

            <footer className="mt-10 border-t border-white/15 pt-6 text-sm leading-relaxed text-zinc-400">
              Chapter author: {AI_VALUATION_CHAPTER.author}. Editorial identity:
              {" "}{AI_VALUATION_CHAPTER.editorialIdentity}. Canonical chapter ID:
              {" "}{AI_VALUATION_CHAPTER.id}. This is a research record, not a
              claim that any AI has subjective needs or experiences.
            </footer>
          </article>
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
          <ul className="mb-5 space-y-3">
            {TRILLSVERSE_BIBLE.authorityHistory.map((item) => (
              <li key={item.version}>
                <a href={item.sourceUrl} className="text-zinc-200 underline decoration-red-500/60 underline-offset-4 hover:text-red-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  {item.version} · source snapshot ↗
                </a>
                <p className="mt-1 text-sm">{item.preservation}</p>
              </li>
            ))}
          </ul>
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
