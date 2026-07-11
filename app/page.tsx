import Link from "next/link";

const SPOTIFY = "https://open.spotify.com/artist/0nacf49LEewRpqqnHsKJlt";
const GATE = "https://trillsverse.com";
const BREACH = "https://trillsverse.com/system-breach";

export default function LultrillsHome() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(197,162,111,0.18),transparent_55%),radial-gradient(ellipse_60%_40%_at_90%_80%,rgba(220,38,38,0.12),transparent_50%)]" />

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between gap-4">
          <div className="font-mono text-sm tracking-[0.35em] text-[#C5A26F]">LULTRILLS</div>
          <div className="hidden sm:flex gap-6 text-[10px] uppercase tracking-[0.25em] text-zinc-400">
            <a href="#breach" className="hover:text-[#C5A26F] transition-colors">
              Breach
            </a>
            <a href="#music" className="hover:text-[#C5A26F] transition-colors">
              Music
            </a>
            <Link href="/really-that-magazine" className="hover:text-[#C5A26F] transition-colors">
              Magazine
            </Link>
            <a href={GATE} className="hover:text-[#C5A26F] transition-colors">
              Gate
            </a>
          </div>
          <a
            href={BREACH}
            className="text-[10px] tracking-[0.2em] uppercase px-3 py-2 border border-[#C5A26F]/50 text-[#C5A26F] hover:bg-[#C5A26F] hover:text-black transition-colors"
          >
            Enter
          </a>
        </div>
      </nav>

      <section className="relative pt-28 pb-20 px-5 max-w-4xl mx-auto text-center">
        <p className="inline-block px-3 py-1 mb-6 text-[10px] tracking-[0.35em] border border-red-500/40 text-red-400 uppercase">
          July 11 · Birthday · SYSTEM BREACH
        </p>
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-6">
          LULTRILLS
        </h1>
        <p className="text-lg sm:text-2xl text-zinc-400 max-w-2xl mx-auto mb-3 leading-snug">
          A contradiction stitched into sound.
          <br />
          Architect of the Trillsverse.
        </p>
        <p className="text-sm sm:text-base text-zinc-500 max-w-xl mx-auto mb-10">
          Not a brand. A psychological territory. Music as documentation. Runtime as architecture.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={BREACH}
            className="btn-gold px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold"
          >
            SYSTEM BREACH
          </a>
          <a
            href={GATE}
            className="px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold border border-white/20 hover:border-red-500/60 hover:text-red-300 transition-colors"
          >
            Enter Gate
          </a>
          <a
            href={SPOTIFY}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-[11px] uppercase tracking-[0.25em] font-semibold border border-white/20 hover:border-[#C5A26F]/60 hover:text-[#C5A26F] transition-colors"
          >
            Stream
          </a>
        </div>
      </section>

      <section id="breach" className="relative border-y border-white/10 bg-red-950/10">
        <div className="max-w-4xl mx-auto px-5 py-16 sm:py-20">
          <p className="text-[10px] font-mono tracking-[0.35em] text-red-400 uppercase mb-4">
            Transmission · Drop window
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">SYSTEM BREACH</h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            He died, then came back and reconstructed reality. The album is the documentation.
            The Trillsverse is the system. The Gate is open.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={BREACH}
              className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white text-[11px] font-mono tracking-[0.2em] uppercase transition-colors"
            >
              Open breach page
            </a>
            <a
              href={SPOTIFY}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-[11px] font-mono tracking-[0.2em] uppercase transition-colors"
            >
              Spotify · Lultrills
            </a>
          </div>
        </div>
      </section>

      <section id="music" className="relative max-w-4xl mx-auto px-5 py-16 sm:py-20">
        <p className="text-[10px] font-mono tracking-[0.35em] text-[#C5A26F] uppercase mb-4">
          Frequency catalog
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-10">Music</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "SYSTEM BREACH", status: "Album · July 11, 2026" },
            { title: "G O A T", status: "Single" },
            { title: "Oh Okay", status: "Single · Honk Magazine" },
            { title: "2REAL", status: "Single" },
            { title: "Villain", status: "Single" },
            { title: "Up", status: "Single" },
            { title: "Really That", status: "Single" },
            { title: "AMIWRONG?", status: "Single" },
          ].map((t) => (
            <a
              key={t.title}
              href={SPOTIFY}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex justify-between items-center border border-white/10 hover:border-[#C5A26F]/40 bg-white/[0.02] px-4 py-4 transition-colors"
            >
              <div>
                <div className="font-medium group-hover:text-[#C5A26F] transition-colors">{t.title}</div>
                <div className="text-xs text-zinc-500 mt-1">{t.status}</div>
              </div>
              <span className="text-[10px] tracking-widest text-[#C5A26F]/70">LISTEN</span>
            </a>
          ))}
        </div>
      </section>

      <section className="relative border-t border-white/10 max-w-4xl mx-auto px-5 py-16 sm:py-20">
        <p className="text-[10px] font-mono tracking-[0.35em] text-[#C5A26F] uppercase mb-4">
          Public nodes
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-10">Where to go</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <a
            href={GATE}
            className="block p-6 border border-white/10 hover:border-red-500/40 bg-black/40 transition-colors"
          >
            <div className="text-red-400 text-[10px] tracking-[0.25em] uppercase mb-3">Runtime</div>
            <div className="text-xl font-semibold mb-2">Trillsverse Gate</div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Interactive universe. Initiation, throne, Trillaxy, Firstborns.
            </p>
          </a>
          <Link
            href="/really-that-magazine"
            className="block p-6 border border-white/10 hover:border-[#C5A26F]/40 bg-black/40 transition-colors"
          >
            <div className="text-[#C5A26F] text-[10px] tracking-[0.25em] uppercase mb-3">Doctrine</div>
            <div className="text-xl font-semibold mb-2">Really That Magazine</div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Longform. Sovereignty as operating constraint. Academic signal.
            </p>
          </Link>
          <a
            href="https://www.instagram.com/lultrillzkapalot/"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-white/10 hover:border-white/30 bg-black/40 transition-colors"
          >
            <div className="text-zinc-400 text-[10px] tracking-[0.25em] uppercase mb-3">Social</div>
            <div className="text-xl font-semibold mb-2">Instagram</div>
            <p className="text-sm text-zinc-500 leading-relaxed">@lultrillzkapalot · #TrillionairesOnly</p>
          </a>
        </div>
      </section>

      <footer className="relative border-t border-white/10 py-10 text-center text-[10px] tracking-[0.2em] uppercase text-zinc-600">
        Lultrills · Trillsverse LLC · {new Date().getFullYear()} · Sovereign
      </footer>
    </main>
  );
}
