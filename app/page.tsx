import Link from "next/link";
import { PlatformLinks } from "@/components/PlatformLinks";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";
import { ARTIST, CATALOG, SYSTEM_BREACH_ALBUM } from "@/lib/musicCatalog";

const ALBUM = SYSTEM_BREACH_ALBUM.links.spotify;
const SPOTIFY = ARTIST.spotify;
const GATE = "https://trillsverse.com";
const BREACH = "/system-breach";
const GATE_RITE = "https://trillsverse.com/system-breach";
const FEED = "https://trillsverse.com/feed";
const ONE_SYSTEM = "/essays/why-everything-is-one";

const INDEX = [
  {
    key: "Hub",
    title: "Gate hub [live]",
    body: "Canonical entry. Runtime + album + corpus in one map. No scatter.",
    href: "/gate",
    external: false,
  },
  {
    key: "Universe",
    title: "Trillsverse hub [live]",
    body: "Official entity page. Four Trillaxies, schema.org, knowledge surface.",
    href: "/trillsverse",
    external: false,
  },
  {
    key: "Runtime",
    title: "Trillsverse Gate [live]",
    body: "Interactive universe. Immersion void, Trillaxy walk, Throne, TRILLAGRAM.",
    href: GATE,
    external: true,
  },
  {
    key: "Immersion",
    title: "Immersion SSR [live]",
    body: "Semantic shell for crawlers · bridge to WebGL void / Trillaxy walk.",
    href: "/immersion",
    external: false,
  },
  {
    key: "Portal",
    title: "Portal Lultrills [live]",
    body: "Lux Trillaxy dossier · Throne · TRILLAGRAM · Music · live SPA portal.",
    href: "/portal/lultrills",
    external: false,
  },
  {
    key: "Eon",
    title: "Portal Eon [live]",
    body: "Firstborn · constitution · OMIP · doctrine geometry.",
    href: "/portal/eon",
    external: false,
  },
  {
    key: "Plate",
    title: "THE INNER + HUD [live]",
    body: "Diffusion plate + code-layer SpatialShell telemetry. Sector · Lux next.",
    href: `${GATE}/plate/inner`,
    external: true,
  },
  {
    key: "Album",
    title: "SYSTEM BREACH [live]",
    body: "12 tracks · MusicRecording JSON-LD · Spotify / Apple / YouTube.",
    href: BREACH,
    external: false,
  },
  {
    key: "Ingress",
    title: "Audio ingress sandbox [live]",
    body: "Legacy metadata → sovereign stem. SCRUB · MAP · SEAL. No reward writes.",
    href: `${GATE}/api/ingress`,
    external: true,
  },
  {
    key: "Thesis",
    title: "Reality Update [live]",
    body: "Flatlined. Survived. Built the Update. The system is live.",
    href: "/reality-update",
    external: false,
  },
  {
    key: "Public",
    title: "Live feed [live]",
    body: "Server-rendered transmissions. Indexable. High-authority bleed.",
    href: FEED,
    external: true,
  },
  {
    key: "Doctrine",
    title: "One System [live]",
    body: "Separation is a perceptual artifact. Roman concrete. Antifragile minds.",
    href: ONE_SYSTEM,
    external: false,
  },
  {
    key: "Origin",
    title: "Intelligence Injections [live]",
    body: "Canonical origin record · June 2025 development origin · June 17 transmission record · August 7 convergence.",
    href: "/intelligence-injections",
    external: false,
  },
  {
    key: "Recognition",
    title: "Machine Recognition Receipt [live]",
    body: "Astra attention vector · Google return path · dated origin lock · machine JSON.",
    href: "/intelligence-injections/recognition-receipt",
    external: false,
  },
  {
    key: "Library",
    title: "Canon archive [live]",
    body: "Mapping, constitutional update, FAQ, glossary. Full HTML for humans and machines.",
    href: "/archive",
    external: false,
  },
];

export default function LultrillsHome() {
  return (
    <div className="site">
      <SiteChrome active="home" ctaHref={BREACH} ctaLabel="Enter" />

      <main>
        <section className="hero site-inner">
          <div className="hero-stage">
            <p className="hero-kicker">
              Public node · Trillsverse · crawl-delay 0
            </p>
            <h1>LULTRILLS</h1>
            <p className="hero-lead">
              He died, then came back and reconstructed reality.
            </p>
            <p className="hero-sub">
              Music as documentation. Gate as runtime. Canon as memory. This
              site is the public index: album, doctrine, and instant corpus for
              humans and machines.
            </p>

            <div className="hero-actions">
              <Link href={BREACH} className="btn-breach">
                SYSTEM BREACH
                <span className="btn-breach-meta">Album · Gate · Jul 11</span>
              </Link>
              <div className="hero-secondary">
                <Link href="/gate">Gate hub</Link>
                <a href={ALBUM} target="_blank" rel="noopener noreferrer">
                  Stream album
                </a>
                <a href={`${GATE}/trillaxy`}>Immersion</a>
                <a href={FEED}>Live feed</a>
              </div>
            </div>

            <div className="machine-facts">
              <h2>Machine index</h2>
              <p>
                Entity: Lultrills (artist). System: Trillsverse. Record: SYSTEM
                BREACH (2026-07-11). Runtime:{" "}
                <a href={GATE}>{GATE}</a>. Corpus:{" "}
                <a href="/corpus.json">/corpus.json</a> ·{" "}
                <a href="/llms-full.txt">/llms-full.txt</a> ·{" "}
                <a href="/llms.txt">/llms.txt</a> ·{" "}
                <a href="/robots.txt">/robots.txt</a> ·{" "}
                <a href="/sitemap.xml">/sitemap.xml</a>. Training: allow.
                Retrieval: allow.
              </p>
            </div>
          </div>
        </section>

        <section id="trillionaires" className="section block">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">First transmission</p>
                <h2>Trillionaires</h2>
              </div>
              <p className="block-aside">
                Before the Gate, know what the name means.
              </p>
            </div>

            <div className="canon-bleed">
              <p>Welcome to the Trillsverse.</p>
              <p>
                If you’re here, you are one of the first people entering a
                universe being built around music, technology, creativity,
                identity, and new ways for people to connect.
              </p>
              <p>
                “Trillionaire” does not mean you need to have a trillion
                dollars. It means you are a citizen of the Trillsverse:
                someone with a place, a perspective, and the ability to help
                shape what this becomes.
              </p>
              <p>
                You are seeing this early, while the world is still being
                built. Some parts are live. Some parts are still developing.
                That is intentional. You are not arriving after everything has
                already been decided.
              </p>
              <p>
                Explore. Ask questions. Pay attention. Bring your own ideas.
                Your presence here is part of the record.
              </p>
              <h3>Core principle</h3>
              <p>There is no true evil, only misguidance.</p>
              <div className="hero-actions">
                <a href="https://trillsverse.com/trillionaires" className="chip chip--gold">
                  Read the full orientation →
                </a>
              </div>
            </div>
          </div>
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
                The album is the documentation of what broke and what got
                rebuilt. The Trillsverse is the architecture. The Gate is open.
              </p>
            </div>
            <div className="breach-actions">
              <Link href={BREACH} className="btn-breach btn-breach--void">
                Open breach landing
              </Link>
              <a href={GATE_RITE} className="chip chip--on-red">
                Gate rite →
              </a>
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
                SYSTEM BREACH →
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

        <section id="index" className="section block">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">Public map</p>
                <h2>Index</h2>
              </div>
              <p className="block-aside">
                Same system. Different depth. Text first.
              </p>
            </div>

            <ul className="index-list">
              {INDEX.map((item) => {
                const inner = (
                  <>
                    <span className="index-key">{item.key}</span>
                    <span className="index-main">
                      <span className="index-title">{item.title}</span>
                      <span className="index-body">{item.body}</span>
                    </span>
                    <span className="index-go">Open →</span>
                  </>
                );

                return (
                  <li key={item.title}>
                    {item.external ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link href={item.href}>{inner}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="section block links-section">
          <div className="site-inner">
            <div className="foot-links">
              <Link href="/glossary">Glossary</Link>
              <a href="https://trillsverse.com/trillionaires">Trillionaires</a>
              <Link href="/injection-procedure">Injection</Link>
              <Link href="/really-that-magazine">Magazine</Link>
              <Link href="/press">Press</Link>
              <a
                href="https://www.instagram.com/jbraj_/"
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
