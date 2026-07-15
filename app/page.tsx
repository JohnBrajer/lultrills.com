import Link from "next/link";
import { PlatformLinks } from "@/components/PlatformLinks";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";
import { ARTIST, CATALOG, SYSTEM_BREACH_ALBUM } from "@/lib/musicCatalog";

const ALBUM = SYSTEM_BREACH_ALBUM.links.spotify;
const SPOTIFY = ARTIST.spotify;
const GATE = "https://trillsverse.com";
/** Local public landing (crawlable) */
const BREACH = "/system-breach";
/** Interactive Gate rite on trillsverse.com */
const GATE_RITE = "https://trillsverse.com/system-breach";
const FEED = "https://trillsverse.com/feed";
const ONE_SYSTEM = "/essays/why-everything-is-one";

const NODES = [
  {
    id: "gate",
    layer: "Runtime",
    title: "Trillsverse Gate",
    body: "Interactive universe. Initiation, throne, Trillaxy, Firstborns.",
    href: GATE,
    external: true,
    status: "OPEN",
    tone: "gold" as const,
    primary: true,
  },
  {
    id: "reality-update",
    layer: "Thesis",
    title: "Reality Update",
    body: "Flatlined. Survived. Built the Update. The system is live.",
    href: "/reality-update",
    external: false,
    status: "LIVE",
    tone: "red" as const,
    primary: true,
  },
  {
    id: "feed",
    layer: "Public layer",
    title: "Live feed",
    body: "Server-rendered transmissions. Indexable. High-authority bleed.",
    href: FEED,
    external: true,
    status: "LIVE",
    tone: "red" as const,
    primary: false,
  },
  {
    id: "doctrine",
    layer: "Doctrine",
    title: "One System",
    body: "John B, separation is a perceptual artifact. Roman concrete. Antifragile minds.",
    href: ONE_SYSTEM,
    external: false,
    status: "CANON",
    tone: "ink" as const,
    primary: false,
  },
  {
    id: "archive",
    layer: "Library",
    title: "Canon archive",
    body: "Mapping, constitutional update, FAQ, glossary, full HTML for humans and machines.",
    href: "/archive",
    external: false,
    status: "INDEX",
    tone: "ink" as const,
    primary: false,
  },
];

export default function LultrillsHome() {
  return (
    <div className="site">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere-orb atmosphere-orb--red" />
        <div className="atmosphere-orb atmosphere-orb--gold" />
        <div className="atmosphere-vignette" />
      </div>

      <header className="nav">
        <div className="nav-row">
          <div className="nav-brand">
            <span className="nav-mark">LULTRILLS</span>
            <span className="nav-pulse" aria-hidden="true" />
            <span className="nav-sys">SYSTEM ONLINE</span>
          </div>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/reality-update">Update</Link>
            <Link href={BREACH}>Breach</Link>
            <a href="#nodes">Nodes</a>
            <a href="#music">Music</a>
            <Link href="/archive">Archive</Link>
          </nav>
          <Link href={BREACH} className="nav-cta">
            Enter
          </Link>
        </div>
      </header>

      <main>
        <section className="hero site-inner">
          <div className="hero-stage">
            <div className="status-rail" aria-label="System status">
              <Link href={BREACH} className="status-chip status-chip--live">
                <span className="status-dot" />
                BREACH LIVE
              </Link>
              <a
                href={ALBUM}
                target="_blank"
                rel="noopener noreferrer"
                className="status-chip status-chip--album"
              >
                JUL 11 · ALBUM OUT
              </a>
              <a href={GATE} className="status-chip status-chip--gold">
                GATE OPEN
              </a>
            </div>

            <p className="hero-kicker">Trillsverse · Public entry</p>
            <h1>LULTRILLS</h1>
            <p className="hero-lead">
              Not a website.
              <br />
              An ecosystem with doors.
            </p>
            <p className="hero-sub">
              Music as documentation. Gate as runtime. Canon as memory. Pick a
              node, everything else is the map.
            </p>

            <div className="hero-actions">
              <Link href={BREACH} className="portal portal--breach">
                <span className="portal-layer" aria-hidden="true" />
                <span className="portal-inner">
                  <span className="portal-label">Primary node</span>
                  <span className="portal-title">SYSTEM BREACH</span>
                  <span className="portal-meta">Landing · Album · Gate</span>
                </span>
                <span className="portal-arrow" aria-hidden="true">
                  →
                </span>
              </Link>

              <div className="hero-secondary">
                <a href={GATE} className="chip chip--gold">
                  <span className="chip-glow" aria-hidden="true" />
                  Enter Gate
                </a>
                <a
                  href={ALBUM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chip chip--ghost"
                >
                  Stream album
                </a>
                <a href={FEED} className="chip chip--ghost">
                  Live feed
                </a>
              </div>
            </div>
          </div>

          <aside className="hero-panel" aria-label="System brief">
            <div className="panel-glass">
              <div className="panel-head">
                <span className="panel-id">TV · CORE</span>
                <span className="panel-state">ACTIVE</span>
              </div>
              <p className="panel-quote">
                The Gate is open. The album is the record of what broke and what
                got rebuilt.
              </p>
              <dl className="panel-stats">
                <div>
                  <dt>Layers</dt>
                  <dd>4</dd>
                </div>
                <div>
                  <dt>Canon</dt>
                  <dd>HTML</dd>
                </div>
                <div>
                  <dt>Feed</dt>
                  <dd>SSR</dd>
                </div>
              </dl>
              <div className="panel-foot">
                <span>Architect of the Trillsverse</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="breach" className="section breach-band">
          <div className="site-inner breach-inner">
            <div className="breach-copy">
              <p className="breach-tag">Critical path</p>
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
              <Link href={BREACH} className="portal portal--void">
                <span className="portal-layer" aria-hidden="true" />
                <span className="portal-inner">
                  <span className="portal-label">Open</span>
                  <span className="portal-title">Breach landing</span>
                </span>
                <span className="portal-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <a href={GATE_RITE} className="chip chip--on-red">
                Gate rite
              </a>
              <a href={FEED} className="chip chip--on-red">
                Live feed
              </a>
              <Link href={ONE_SYSTEM} className="chip chip--on-red">
                John B · One System
              </Link>
            </div>
          </div>
        </section>

        <section id="nodes" className="section nodes-section">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">Topology</p>
                <h2>Ecosystem nodes</h2>
              </div>
              <p className="block-aside">
                Four live surfaces. Same system. Different depth.
              </p>
            </div>

            <div className="node-grid">
              {NODES.map((node) => {
                const className = [
                  "node",
                  `node--${node.tone}`,
                  node.primary ? "node--primary" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                const body = (
                  <>
                    <div className="node-top">
                      <span className="node-layer">{node.layer}</span>
                      <span className="node-status">{node.status}</span>
                    </div>
                    <h3 className="node-title">{node.title}</h3>
                    <p className="node-body">{node.body}</p>
                    <span className="node-go">
                      Open node <span aria-hidden="true">→</span>
                    </span>
                  </>
                );

                if (node.external) {
                  return (
                    <a key={node.id} href={node.href} className={className}>
                      {body}
                    </a>
                  );
                }

                return (
                  <Link key={node.id} href={node.href} className={className}>
                    {body}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="music" className="section block">
          <div className="site-inner music-wrap music-wrap--wide">
            <div className="block-head">
              <div>
                <p className="section-label">Catalog</p>
                <h2>Music</h2>
              </div>
              <Link href={BREACH} className="block-link">
                SYSTEM BREACH album →
              </Link>
            </div>

            <div className="album-feature">
              <div className="album-feature-copy">
                <span className="album-feature-badge">Album · Out now</span>
                <h3 className="album-feature-title">SYSTEM BREACH</h3>
                <p className="album-feature-meta">
                  12 tracks in order · July 11, 2026
                </p>
                <Link href={BREACH} className="chip chip--gold">
                  Open album page
                </Link>
              </div>
              <PlatformLinks links={SYSTEM_BREACH_ALBUM.links} size="md" />
            </div>

            <div className="tracks tracks--catalog">
              {CATALOG.map((t, i) => (
                <div key={t.id} className="track track--platforms">
                  <span className="track-n">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="track-info">
                    {t.pageHref ? (
                      <Link href={t.pageHref} className="track-title">
                        {t.title}
                      </Link>
                    ) : (
                      <span className="track-title">{t.title}</span>
                    )}
                    <span className="track-meta">{t.meta}</span>
                  </div>
                  <PlatformLinks links={t.links} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section block links-section">
          <div className="site-inner">
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
              <a href={ALBUM} target="_blank" rel="noopener noreferrer">
                SYSTEM BREACH
              </a>
              <a href={SPOTIFY} target="_blank" rel="noopener noreferrer">
                Artist
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteLegalFooter />
    </div>
  );
}
