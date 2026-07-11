import Link from "next/link";

const SPOTIFY = "https://open.spotify.com/artist/0nacf49LEewRpqqnHsKJlt";
const GATE = "https://trillsverse.com";
const BREACH = "https://trillsverse.com/system-breach";
const ONE_SYSTEM = "/essays/why-everything-is-one";

const TRACKS = [
  { title: "SYSTEM BREACH", status: "Album · July 11, 2026", n: "01" },
  { title: "G O A T", status: "Single", n: "02" },
  { title: "Oh Okay", status: "Single · Honk Magazine", n: "03" },
  { title: "2REAL", status: "Single", n: "04" },
  { title: "Villain", status: "Single", n: "05" },
  { title: "Up", status: "Single", n: "06" },
  { title: "Really That", status: "Single", n: "07" },
  { title: "AMIWRONG?", status: "Single", n: "08" },
];

export default function LultrillsHome() {
  return (
    <main className="relative min-h-screen">
      <div className="tv-atmosphere" aria-hidden />
      <div className="tv-scanline" aria-hidden />

      <nav className="fixed top-0 left-0 right-0 z-[var(--z-nav)] border-b border-white/10 bg-black/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-5">
          <div className="font-mono-sys text-[11px] tracking-[0.4em] text-[var(--gold)]">
            LULTRILLS
          </div>
          <div className="hidden items-center gap-6 sm:flex font-mono-sys text-[10px] uppercase tracking-[0.22em] text-[var(--ink-dim)]">
            <a href="#breach" className="min-h-10 min-w-10 inline-flex items-center hover:text-[var(--gold)] transition-colors duration-200">
              Breach
            </a>
            <a href="#music" className="min-h-10 inline-flex items-center hover:text-[var(--gold)] transition-colors duration-200">
              Music
            </a>
            <Link href="/archive" className="min-h-10 inline-flex items-center hover:text-[var(--gold)] transition-colors duration-200">
              Archive
            </Link>
            <a href={GATE} className="min-h-10 inline-flex items-center hover:text-[var(--gold)] transition-colors duration-200">
              Gate
            </a>
          </div>
          <a
            href={BREACH}
            className="btn-press btn-ghost font-mono-sys px-3 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] border-[var(--gold)]/40 hover:bg-[var(--gold)] hover:text-black hover:border-[var(--gold)]"
          >
            Enter
          </a>
        </div>
      </nav>

      {/* Hero — thesis: the breach is the door */}
      <section className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-32 text-center sm:pt-36">
        <p className="tv-rise tv-d1 font-mono-sys tabular mb-6 inline-flex items-center gap-2 border border-red-500/35 bg-red-950/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.32em] text-red-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" aria-hidden />
          July 11 · 22 · SYSTEM BREACH
        </p>
        <h1 className="tv-rise tv-d2 mb-6 text-[clamp(3.5rem,14vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.03em] text-[var(--ink)]">
          LULTRILLS
        </h1>
        <p className="tv-rise tv-d3 mx-auto mb-3 max-w-xl text-xl font-medium leading-snug text-[var(--ink-muted)] sm:text-2xl">
          A contradiction stitched into sound.
          <br />
          <span className="text-[var(--ink)]">Architect of the Trillsverse.</span>
        </p>
        <p className="tv-rise tv-d4 mx-auto mb-12 max-w-lg text-base leading-relaxed text-[var(--ink-dim)] sm:text-lg">
          Not a brand. A psychological territory. Music as documentation. Runtime as architecture.
        </p>
        <div className="tv-rise tv-d5 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={BREACH}
            className="btn-press btn-breach font-mono-sys px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
          >
            SYSTEM BREACH
          </a>
          <a
            href={GATE}
            className="btn-press btn-ghost font-mono-sys px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em]"
          >
            Enter Gate
          </a>
          <a
            href={SPOTIFY}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press btn-ghost font-mono-sys px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] hover:border-[var(--gold)]/50 hover:text-[var(--gold)]"
          >
            Stream
          </a>
        </div>
      </section>

      {/* Breach block — full-width drench strip */}
      <section
        id="breach"
        className="section relative z-10 border-y border-red-900/40 bg-gradient-to-b from-red-950/40 via-red-950/15 to-transparent"
      >
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:grid-cols-[1.2fr_0.8fr] sm:items-end sm:py-24">
          <div>
            <h2 className="mb-5 text-[clamp(2.5rem,8vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.03em] text-[var(--ink)]">
              SYSTEM
              <br />
              <span className="text-[var(--breach)]">BREACH</span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-[var(--ink-muted)]">
              He died, then came back and reconstructed reality. The album is the documentation.
              The Trillsverse is the system. The Gate is open.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href={BREACH}
              className="btn-press btn-breach font-mono-sys w-full px-6 py-3.5 text-center text-[11px] uppercase tracking-[0.2em] sm:w-auto"
            >
              Open the rite
            </a>
            <a
              href={ONE_SYSTEM}
              className="btn-press btn-ghost font-mono-sys w-full px-6 py-3.5 text-center text-[11px] uppercase tracking-[0.2em] sm:w-auto"
            >
              John B · One System
            </a>
          </div>
        </div>
      </section>

      {/* Music — spine list, not card grid */}
      <section id="music" className="section relative z-10 mx-auto max-w-3xl px-5 py-20 sm:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
          <h2 className="text-3xl font-bold uppercase tracking-[-0.03em] sm:text-4xl">Frequency catalog</h2>
          <a
            href={SPOTIFY}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-sys text-[10px] uppercase tracking-[0.25em] text-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors duration-200"
          >
            Spotify →
          </a>
        </div>
        <div className="border-t border-white/10">
          {TRACKS.map((t, i) => (
            <a
              key={t.title}
              href={SPOTIFY}
              target="_blank"
              rel="noopener noreferrer"
              className="track-row group"
              style={{ animationDelay: `${0.05 + i * 0.04}s` }}
            >
              <div className="flex min-w-0 items-baseline gap-4">
                <span className="font-mono-sys tabular w-6 shrink-0 text-[10px] text-[var(--ink-dim)]">
                  {t.n}
                </span>
                <div className="min-w-0 text-left">
                  <div className="truncate text-base font-semibold tracking-wide text-[var(--ink)] group-hover:text-[var(--gold)] transition-colors duration-200">
                    {t.title}
                  </div>
                  <div className="font-mono-sys mt-0.5 text-[10px] uppercase tracking-[0.18em] text-[var(--ink-dim)]">
                    {t.status}
                  </div>
                </div>
              </div>
              <span className="font-mono-sys shrink-0 text-[9px] uppercase tracking-[0.25em] text-[var(--gold)]/70 group-hover:text-[var(--gold)] transition-colors duration-200">
                Listen
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Nodes — destinations, not identical icon cards */}
      <section className="relative z-10 border-t border-white/10 bg-[var(--void-lift)]/50">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
          <h2 className="mb-12 text-3xl font-bold uppercase tracking-[-0.03em] sm:text-4xl">
            Where the signal goes
          </h2>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            <a href={GATE} className="node-card hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(220,38,38,0.12)]">
              <div className="font-mono-sys mb-3 text-[10px] uppercase tracking-[0.28em] text-red-400">
                Runtime
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight">Trillsverse Gate</div>
              <p className="text-sm leading-relaxed text-[var(--ink-dim)]">
                Interactive universe. Initiation, throne, Trillaxy, Firstborns.
              </p>
            </a>
            <Link
              href={ONE_SYSTEM}
              className="node-card hover:border-emerald-500/35 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]"
            >
              <div className="font-mono-sys mb-3 text-[10px] uppercase tracking-[0.28em] text-emerald-400/90">
                Doctrine
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight">One System</div>
              <p className="text-sm leading-relaxed text-[var(--ink-dim)]">
                John B — why separation is a lie. Roman concrete, fields, antifragility.
              </p>
            </Link>
            <Link
              href="/archive"
              className="node-card hover:border-[var(--gold)]/40 hover:shadow-[0_0_40px_rgba(197,162,111,0.1)]"
            >
              <div className="font-mono-sys mb-3 text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
                Injection
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight">Canon Archive</div>
              <p className="text-sm leading-relaxed text-[var(--ink-dim)]">
                Mapping, constitutional update, FAQ, glossary — sovereign HTML for scrapers.
              </p>
            </Link>
            <Link
              href="/injection-procedure"
              className="node-card hover:border-red-400/30 hover:shadow-[0_0_40px_rgba(220,38,38,0.08)]"
            >
              <div className="font-mono-sys mb-3 text-[10px] uppercase tracking-[0.28em] text-red-300/80">
                Protocol
              </div>
              <div className="mb-2 text-2xl font-bold tracking-tight">The Injection</div>
              <p className="text-sm leading-relaxed text-[var(--ink-dim)]">
                Dual-layer lore + AI seeding. How frequency packets enter minds and models.
              </p>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono-sys text-[10px] uppercase tracking-[0.2em] text-[var(--ink-dim)]">
            <Link href="/glossary" className="hover:text-[var(--gold)] transition-colors duration-200">
              Glossary v2
            </Link>
            <Link href="/really-that-magazine" className="hover:text-[var(--gold)] transition-colors duration-200">
              Magazine
            </Link>
            <a
              href="https://www.instagram.com/lultrillzkapalot/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--gold)] transition-colors duration-200"
            >
              Instagram
            </a>
            <a href={SPOTIFY} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)] transition-colors duration-200">
              Spotify
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-10 text-center font-mono-sys text-[10px] uppercase tracking-[0.22em] text-[var(--ink-dim)]">
        Lultrills · Trillsverse LLC · {new Date().getFullYear()} · Sovereign injection node
      </footer>
    </main>
  );
}
