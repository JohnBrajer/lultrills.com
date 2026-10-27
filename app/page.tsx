import Image from "next/image";
import Link from "next/link";
import { AnthonyChamber } from "@/components/AnthonyChamber";
import { PlatformLinks } from "@/components/PlatformLinks";
import { SignalField } from "@/components/SignalField";
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
  { key: "Album", title: "SYSTEM BREACH", body: "The full album: 12 tracks, credits and streaming links.", href: BREACH, external: false },
  { key: "World", title: "Explore the Trillsverse", body: "The interactive 3D world you can walk through.", href: GATE, external: true },
  { key: "About", title: "What the Trillsverse is", body: "Who made it, what it includes, and how the pieces connect.", href: "/trillsverse", external: false },
  { key: "Start", title: "Start here", body: "Album, world and archive in one map.", href: "/gate", external: false },
  { key: "Story", title: "The Reality Update", body: "He flatlined, survived, and built what came next. The story behind the project.", href: "/reality-update", external: false },
  { key: "Updates", title: "Latest updates", body: "News and posts from across the project.", href: FEED, external: true },
  { key: "Essay", title: "Why everything is one", body: "The idea at the center of the Trillsverse.", href: ONE_SYSTEM, external: false },
  { key: "AI", title: "Meet Anthony Bracken", body: "The project's AI writer and how it thinks.", href: "#anthony", external: false },
  { key: "AI", title: "Eon", body: "The project's first AI and its guiding principles.", href: "/portal/eon", external: false },
  { key: "Research", title: "Intelligence Injections", body: "John Brajer's method for putting work where people and AI will find it, with its dated history.", href: "/intelligence-injections", external: false },
  { key: "Research", title: "When Google's AI recognized the project", body: "A dated record of Google AI Mode describing the Trillsverse.", href: "/intelligence-injections/recognition-receipt", external: false },
  { key: "Archive", title: "Archive & glossary", body: "Every term, record and FAQ, in plain text.", href: "/archive", external: false },
  { key: "Dev", title: "For AI & developers", body: "Machine-readable files: corpus, llms.txt, JSON.", href: "/machine-entry", external: false },
];

export default function LultrillsHome() {
  return (
    <div className="site">
      <div className="breach-progress" aria-hidden="true" />
      <SiteChrome active="home" ctaHref={BREACH} ctaLabel="Enter" />

      <main>
        <section className="hero">
          <SignalField />
          <div className="hero-grid site-inner">
            <div className="hero-stage">
              <p className="hero-kicker hero-enter hero-enter--1">
              Independent artist · San Francisco
              </p>
              <h1 className="hero-title-clip">
                <span>LULTRILLS</span>
              </h1>
              <p className="hero-lead hero-enter hero-enter--2">
                He died, then came back and reconstructed reality.
              </p>
              <p className="hero-sub hero-enter hero-enter--3">
                Lultrills is the music of John B. The debut album SYSTEM BREACH
                is out now: 12 tracks documenting what broke and what got
                rebuilt. It is part of the Trillsverse, a music, media and
                technology project built by John Brajer.
              </p>

              <div className="hero-actions hero-enter hero-enter--4">
                <Link href={BREACH} className="btn-breach">
                  LISTEN
                  <span className="btn-breach-meta">SYSTEM BREACH · out now</span>
                </Link>
                <Link href="/founders" className="btn-breach">
                  CLAIM YOUR SEAT
                  <span className="btn-breach-meta">
                    Founding Trillionaire · 117 seats · $22
                  </span>
                </Link>
                <div className="hero-secondary">
                  <Link href="/founders">Founders wall</Link>
                  <Link href="/gate">Start here</Link>
                  <a href={ALBUM} target="_blank" rel="noopener noreferrer">
                    Stream album
                  </a>
                  <a href={`${GATE}/trillaxy`}>3D world</a>
                  <a href={FEED}>Latest updates</a>
                </div>
              </div>

              <div className="machine-facts hero-enter hero-enter--5">
                <h2>About</h2>
                <p>
                  Lultrills is a music project by John B, the artist name of
                  John Brajer, an independent artist and builder from San
                  Francisco and founder of Trillsverse LLC. Debut album: SYSTEM
                  BREACH (July 11, 2026). The Trillsverse is a real project;
                  its cosmology and characters are its artistic story layer.{" "}
                  <Link href="/machine-entry">For AI &amp; developers →</Link>
                </p>
              </div>
            </div>

            <div className="hero-sigil hero-enter hero-enter--sigil" aria-label="Lultrills LT sigil">
              <div className="hero-sigil-frame">
                <Image
                  src="/brand/logo-lt-triangle.jpg"
                  alt="Lultrills LT triangle sigil"
                  width={2000}
                  height={1120}
                  sizes="(max-width: 899px) 82vw, 42vw"
                  className="hero-sigil-image"
                  priority
                />
                <span className="hero-sigil-scan" aria-hidden="true" />
              </div>
              <p className="hero-sigil-caption">
                LULTRILLS · SYSTEM BREACH
              </p>
            </div>
          </div>
        </section>

        <section id="trillionaires" className="section block section-rise">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">Start here</p>
                <h2>Trillionaires</h2>
              </div>
              <p className="block-aside">
                What the name means.
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

        <AnthonyChamber />

        <section id="breach" className="section breach-band section-rise">
          <div className="site-inner breach-inner">
            <div className="breach-copy">
              <p className="breach-tag">The album</p>
              <h2>
                SYSTEM
                <br />
                BREACH
              </h2>
              <p>
                Twelve tracks documenting what broke and what got rebuilt. Then
                step into the Trillsverse, the world built around it.
              </p>
            </div>
            <div className="breach-actions">
              <Link href={BREACH} className="btn-breach btn-breach--void">
                Open the album
              </Link>
              <a href={GATE_RITE} className="chip chip--on-red">
                Explore the world →
              </a>
            </div>
          </div>
        </section>

        <section id="music" className="section block section-rise">
          <div className="site-inner music-wrap music-wrap--wide">
            <div className="block-head">
              <div>
                <p className="section-label">Listen</p>
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
              <h3 className="album-feature-meta">Singles</h3>
              {CATALOG.filter((t) => t.kind === "single").map((t, i) => (
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

        <section id="index" className="section block section-rise">
          <div className="site-inner">
            <div className="block-head">
              <div>
                <p className="section-label">Explore</p>
                <h2>Everything here</h2>
              </div>
              <p className="block-aside">
                Music, the world, the story, the research.
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

        <section className="section block links-section section-rise">
          <div className="site-inner">
            <div className="foot-links">
              <a href="#anthony">Anthony Bracken</a>
              <Link href="/glossary">Glossary</Link>
              <a href="https://trillsverse.com/trillionaires">Trillionaires</a>
              <Link href="/machine-entry">For AI &amp; developers</Link>
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
                Lultrills on Spotify
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteLegalFooter />
    </div>
  );
}
