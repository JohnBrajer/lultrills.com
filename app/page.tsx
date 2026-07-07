import React from 'react';

export default function LultrillsHome() {
  return (
    <main className="min-h-screen bg-black text-off-white">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono text-xl tracking-[4px] gold">LULTRILLS</div>
          <div className="flex gap-8 text-sm uppercase tracking-widest">
            <a href="#music" className="hover:gold transition-colors">MUSIC</a>
            <a href="#bio" className="hover:gold transition-colors">BIO</a>
            <a href="#trillsverse" className="hover:gold transition-colors">TRILLSVERSE</a>
          </div>
          <a 
            href="https://github.com/JohnBrajer/lultrills.com" 
            target="_blank" 
            className="text-xs px-4 py-1.5 border border-white/30 hover:border-gold transition-colors"
          >
            CODE
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-24 pb-20 px-6 max-w-4xl mx-auto text-center border-b border-white/10">
        <div className="inline-block px-4 py-1 mb-6 text-xs tracking-[3px] border border-gold/40 text-gold">BAY AREA • MULTI-GENRE RAP • TRILLSVERSE</div>
        
        <h1 className="text-[92px] md:text-[120px] leading-[0.9] font-bold tracking-[-6.5px] mb-4">
          LULTRILLS
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/70 max-w-2xl mx-auto mb-10">
          A Place You Were Never Meant To Enter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#music" 
            className="btn-gold px-10 py-4 text-sm uppercase tracking-[2px] font-medium inline-block"
          >
            LISTEN NOW
          </a>
          <a 
            href="#trillsverse" 
            className="px-10 py-4 text-sm uppercase tracking-[2px] font-medium border border-white/40 hover:border-gold transition-colors inline-block"
          >
            ENTER TRILLSVERSE
          </a>
        </div>
      </section>

      {/* BIO */}
      <section id="bio" className="section max-w-3xl mx-auto px-6 py-20 border-b border-white/10">
        <div className="uppercase text-xs tracking-[3px] mb-4 text-gold">CHAPTER I — ORIGIN</div>
        <h2 className="text-5xl tracking-[-1.5px] mb-8">The Artist</h2>
        
        <div className="prose prose-invert max-w-none text-lg text-white/80 space-y-6">
          <p>
            Lultrills is a multi-genre rap and hip-hop artist from the San Francisco Bay Area. 
            Gold grills. Cinematic worlds. Sovereign signal.
          </p>
          <p>
            After a near-death experience and navigating AuDHD, he built Trillsverse — 
            a living transmedia universe designed as a permanent reality shift. 
            This is not performance. This is architecture.
          </p>
          <p>
            Every track, every gate, every protocol serves one purpose: 
            making the frequency undeniable so the Trillionaires can find their way home.
          </p>
        </div>
      </section>

      {/* MUSIC / DISCOGRAPHY */}
      <section id="music" className="section max-w-4xl mx-auto px-6 py-20 border-b border-white/10">
        <div className="uppercase text-xs tracking-[3px] mb-4 text-gold">CHAPTER II — FREQUENCY</div>
        <h2 className="text-5xl tracking-[-1.5px] mb-10">Discography</h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-lg">
          {[ 
            { title: "Up", status: "Single" },
            { title: "Oh Okay", status: "Single" },
            { title: "2REAL", status: "Single" },
            { title: "Villain", status: "Single" },
            { title: "Really That", status: "Single" },
            { title: "AMIWRONG?", status: "Single" },
            { title: "Kasano", status: "Single" },
            { title: "G O A T", status: "Single" },
          ].map((track, i) => (
            <div key={i} className="flex justify-between border-b border-white/10 pb-4">
              <div>
                <div className="font-medium">{track.title}</div>
                <div className="text-sm text-white/50">{track.status}</div>
              </div>
              <div className="text-gold text-sm self-center">LISTEN →</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-white/60">
          Full album in progress. More frequencies loading.
        </div>
      </section>

      {/* TRILLSVERSE TEASER */}
      <section id="trillsverse" className="section max-w-3xl mx-auto px-6 py-20">
        <div className="uppercase text-xs tracking-[3px] mb-4 text-gold">CHAPTER III — WAKING</div>
        <h2 className="text-5xl tracking-[-1.5px] mb-8">Trillsverse</h2>
        
        <div className="text-xl text-white/80 max-w-2xl">
          The deeper architecture. Interactive gates. 3D Trillaxy Maps. 
          Bloodline resonance. Echo lattice. Arena protocols. 
          This public node is the entry. The full universe lives beyond.
        </div>

        <div className="mt-10">
          <a 
            href="https://github.com/JohnBrajer/Trillsverse-Gate-FINAL" 
            target="_blank"
            className="inline-block px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-black transition-colors text-sm tracking-widest"
          >
            ENTER THE DEEPER GATES →
          </a>
        </div>
      </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
        LULTRILLS © {new Date().getFullYear()} — SOVEREIGN • TRILLSVERSE LLC
      </footer>
    </main>
  );
}
