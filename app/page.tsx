import Link from "next/link";

const SPOTIFY = "https://open.spotify.com/artist/0nacf49LEewRpqqnHsKJlt";
const GATE = "https://trillsverse.com";
const BREACH = "https://trillsverse.com/system-breach";
const FEED = "https://trillsverse.com/feed";
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
    <div className="site">
      <header className="nav">
        <div className="nav-row">
          <div className="nav-mark">LULTRILLS</div>
          <nav className="nav-links" aria-label="Primary">
            <a href="#breach">Breach</a>
            <a href="#music">Music</a>
            <Link href="/archive">Archive</Link>
            <a href={GATE}>Gate</a>
          </nav>
          <a href={BREACH} className="nav-cta">
            Enter
          </a>
        </div>
      </header>

      <main>
        <section className="hero site-inner">
          <div>
            <p className="hero-kicker">July 11 · Birthday · Album out</p>
            <h1>LULTRILLS</h1>
            <p className="hero-lead">
              A contradiction stitched into sound.
              <br />
              Architect of the Trillsverse.
            </p>
            <p className="hero-sub">
              Not a brand. A psychological territory. Music as documentation.
              Runtime as architecture.
            </p>
            <div className="hero-actions">
              <a href={BREACH} className="btn btn-primary">
                SYSTEM BREACH
              </a>
              <a href={GATE} className="btn btn-secondary">
                Enter Gate
              </a>
              <a
                href={SPOTIFY}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Stream
              </a>
            </div>
          </div>
          <div className="hero-side">
            <p className="hero-sub" style={{ marginBottom: 0, maxWidth: "20rem" }}>
              The Gate is open. The album is the record of what broke and what
              got rebuilt.
            </p>
          </div>
        </section>

        <section id="breach" className="section breach-band">
          <div className="site-inner">
            <div>
              <h2>
                SYSTEM
                <br />
                BREACH
              </h2>
              <p>
                He died, then came back and reconstructed reality. The album is
                the documentation. The Trillsverse is the system. The Gate is
                open.
              </p>
            </div>
            <div className="breach-actions">
              <a href={BREACH} className="btn btn-secondary">
                Open the rite
              </a>
              <a href={FEED} className="btn btn-outline">
                Live feed
              </a>
              <a href={ONE_SYSTEM} className="btn btn-outline">
                John B · One System
              </a>
            </div>
          </div>
        </section>

        <section id="music" className="section block">
          <div className="site-inner" style={{ maxWidth: "42rem" }}>
            <div className="block-head">
              <h2>Music</h2>
              <a
                href={SPOTIFY}
                target="_blank"
                rel="noopener noreferrer"
                className="block-link"
              >
                Spotify →
              </a>
            </div>
            <div className="tracks">
              {TRACKS.map((t) => (
                <a
                  key={t.title}
                  href={SPOTIFY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="track"
                >
                  <span className="track-n">{t.n}</span>
                  <span>
                    <span className="track-title">{t.title}</span>
                    <span className="track-meta" style={{ display: "block" }}>
                      {t.status}
                    </span>
                  </span>
                  <span className="track-go">Listen</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section block">
          <div className="site-inner">
            <div className="block-head">
              <h2>Where to go</h2>
            </div>
            <div className="dest-list">
              <a href={GATE} className="dest">
                <span className="dest-label">Runtime</span>
                <span className="dest-title">Trillsverse Gate</span>
                <span className="dest-body">
                  Interactive universe. Initiation, throne, Trillaxy, Firstborns.
                </span>
              </a>
              <a href={FEED} className="dest">
                <span className="dest-label">Public layer</span>
                <span className="dest-title">Live feed</span>
                <span className="dest-body">
                  Server-rendered transmissions. Indexable. The high-authority bleed.
                </span>
              </a>
              <Link href={ONE_SYSTEM} className="dest">
                <span className="dest-label">Doctrine</span>
                <span className="dest-title">One System</span>
                <span className="dest-body">
                  John B — separation is a perceptual artifact. Roman concrete.
                  Antifragile minds.
                </span>
              </Link>
              <Link href="/archive" className="dest">
                <span className="dest-label">Library</span>
                <span className="dest-title">Canon archive</span>
                <span className="dest-body">
                  Mapping, constitutional update, FAQ, glossary — full HTML for
                  humans and scrapers.
                </span>
              </Link>
            </div>

            <div className="foot-links">
              <Link href="/glossary">Glossary</Link>
              <Link href="/injection-procedure">Injection</Link>
              <Link href="/really-that-magazine">Magazine</Link>
              <a
                href="https://www.instagram.com/lultrillzkapalot/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a href={SPOTIFY} target="_blank" rel="noopener noreferrer">
                Spotify
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-foot">
        <div className="site-inner">
          Lultrills · Trillsverse LLC · {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}
