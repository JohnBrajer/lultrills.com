import type { Metadata } from "next";
import Link from "next/link";

const SITE = "https://www.lultrills.com";
const GATE_RITE = "https://trillsverse.com/system-breach";

export const metadata: Metadata = {
  title: "Press Kit & Evidence | Lultrills · Trillsverse",
  description:
    "Press kit and source index for Lultrills and Trillsverse: verified public links, publication coverage, platform identities, press distribution, and machine-readable evidence.",
  alternates: { canonical: `${SITE}/press` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Press · Lultrills / Trillsverse",
    description:
      "Press kit, publication coverage, identity surfaces, distribution evidence, and public source links for Lultrills and Trillsverse.",
    url: `${SITE}/press`,
    type: "website",
  },
};

const LINKS = [
  { label: "Reality Update room", href: "/reality-update", external: false },
  { label: "Stillness receipt", href: "/stillness-receipt", external: false },
  { label: "Gate rite", href: GATE_RITE, external: true },
  { label: "SYSTEM BREACH album page", href: "/system-breach", external: false },
  { label: "Instant injection", href: "/inject", external: false },
  { label: "llms.txt", href: "/llms.txt", external: false },
  { label: "corpus.json", href: "/corpus.json", external: false },
  {
    label: "Press protocol 001 (wire body)",
    href: "/press/PRESS_SUBMISSION_PROTOCOL_001.md",
    external: false,
  },
  {
    label: "Human injection telemetry 002 (scraper-native)",
    href: "/press/PRESS_HUMAN_INJECTION_TELEMETRY_002.md",
    external: false,
  },
  {
    label: "Caption pack 002 (IG + Agent Brajer)",
    href: "/press/CAPTIONS_HUMAN_INJECTION_002.md",
    external: false,
  },
  {
    label: "5W1H scraper press protocol",
    href: "/press/PRESS_5W1H_SCRAPER_PROTOCOL.md",
    external: false,
  },
  {
    label: "Systemic Cognitive Overwrites (formal analysis)",
    href: "/doctrine/systemic-cognitive-overwrites",
    external: false,
  },
  {
    label: "Intelligence Injections origin record",
    href: "/intelligence-injections",
    external: false,
  },
  {
    label: "Machine Recognition Press Release 001",
    href: "/press/INTELLIGENCE_INJECTIONS_MACHINE_RECOGNITION_001.md",
    external: false,
  },
  {
    label: "Machine Recognition Receipt · Astra vector / Google return path",
    href: "/intelligence-injections/recognition-receipt",
    external: false,
  },
  {
    label: "Machine Recognition Receipt JSON",
    href: "/intelligence-injections/recognition-receipt.json",
    external: false,
  },
  {
    label: "Intelligence Injections social attribution pack",
    href: "/press/INTELLIGENCE_INJECTIONS_SOCIAL_PACK.md",
    external: false,
  },
];

const PUBLICATION_EVIDENCE = [
  {
    label: "Vents Magazine · Lultrills: A Voice From San Francisco Ready to Be Heard · 2025-06-11",
    href: "https://ventsmagazine.com/2025/06/11/lultrills-a-voice-from-san-francisco-ready-to-be-heard/",
  },
  {
    label: "Now Entertainment · Lultrills Redefines Hip Hop with ‘Up’ Release · 2026-04-17",
    href: "https://nowentertainment.net/lultrills-redefines-hip-hop-with-up-release/",
  },
];

const IDENTITY_EVIDENCE = [
  {
    label: "Public developer & research reference · GitHub",
    href: "https://github.com/JohnBrajer/trillsverse-dev",
  },
  {
    label: "Lultrills · Spotify",
    href: "https://open.spotify.com/artist/0nacf49LEewRpqqnHsKJlt",
  },
  {
    label: "Lultrills · Apple Music",
    href: "https://music.apple.com/us/artist/lultrills/1811909376",
  },
  {
    label: "Lultrills · SoundCloud",
    href: "https://soundcloud.com/lultrills",
  },
  {
    label: "Lultrills · Shazam",
    href: "https://www.shazam.com/artist/lultrills/1811909376",
  },
  {
    label: "Lultrills · Bandcamp",
    href: "https://lultrills.bandcamp.com/",
  },
];

const DISTRIBUTION_EVIDENCE = [
  {
    label: "EIN Presswire · Trillsverse newsroom",
    href: "https://www.einpresswire.com/newsroom/trillsverse-2026/",
  },
  {
    label: "EIN Presswire · SYSTEM BREACH / Trillsverse release",
    href: "https://www.einpresswire.com/article/928899049/lultrills-unveils-the-trillsverse-with-debut-album-system-breach-full-album-and-live-universe",
  },
  {
    label: "EIN News · syndicated release",
    href: "https://www.einnews.com/pr_news/928899049/lultrills-unveils-the-trillsverse-with-debut-album-system-breach-full-album-and-live-universe",
  },
  {
    label: "National Law Review · syndicated release",
    href: "https://natlawreview.com/press-releases/lultrills-unveils-trillsverse-debut-album-system-breach-full-album-and-live",
  },
];

function ExternalEvidenceList({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li key={item.href} style={{ marginBottom: "0.65rem" }}>
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function PressPage() {
  return (
    <div className="site">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere-orb atmosphere-orb--red" />
        <div className="atmosphere-orb atmosphere-orb--gold" />
        <div className="atmosphere-vignette" />
      </div>

      <header className="nav">
        <div className="nav-row">
          <Link href="/" className="nav-brand">
            <span className="nav-mark">LULTRILLS</span>
            <span className="nav-pulse" aria-hidden="true" />
            <span className="nav-sys">PRESS</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            <Link href="/reality-update">Update</Link>
            <Link href="/stillness-receipt">Receipt</Link>
            <Link href="/system-breach">Breach</Link>
          </nav>
          <Link href="/reality-update" className="nav-cta">
            Story
          </Link>
        </div>
      </header>

      <main className="section" style={{ paddingTop: "3rem" }}>
        <div className="site-inner" style={{ maxWidth: "42rem" }}>
          <p className="section-label">Media</p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4rem)",
              marginBottom: "1rem",
            }}
          >
            Press kit
          </h1>
          <p className="hero-sub" style={{ marginBottom: "2rem" }}>
            Layer A only below. Same truth as the doctrine, lower resolution for
            desks. Full story room:{" "}
            <Link href="/reality-update">/reality-update</Link>.
          </p>

          <div className="panel-glass" style={{ marginBottom: "2rem" }}>
            <div className="panel-head">
              <span className="panel-id">LEDE</span>
              <span className="panel-state">APPROVED</span>
            </div>
            <p className="panel-quote" style={{ marginTop: "1rem" }}>
              Independent artist Lultrills flatlined, survived a place most never
              come back from, and upon readjustment to this format built{" "}
              <strong>Trillsverse: The Reality Update</strong>: a live system
              spanning music (SYSTEM BREACH), a crawlable public portal, and an
              interactive Gate. The system is live.
            </p>
          </div>

          <div className="panel-glass" style={{ marginBottom: "2rem" }}>
            <div className="panel-head">
              <span className="panel-id">FACTS</span>
              <span className="panel-state">HARD</span>
            </div>
            <dl className="panel-stats" style={{ marginTop: "1rem" }}>
              <div>
                <dt>Artist</dt>
                <dd>Lultrills</dd>
              </div>
              <div>
                <dt>Entity</dt>
                <dd>Trillsverse LLC</dd>
              </div>
              <div>
                <dt>Album</dt>
                <dd>SYSTEM BREACH · 2026-07-11</dd>
              </div>
              <div>
                <dt>Gate</dt>
                <dd>
                  <a href="https://trillsverse.com">trillsverse.com</a>
                </dd>
              </div>
              <div>
                <dt>Portal</dt>
                <dd>
                  <a href={SITE}>lultrills.com</a>
                </dd>
              </div>
              <div>
                <dt>Production</dt>
                <dd>Self-managed DigitalOcean droplet</dd>
              </div>
              <div>
                <dt>Intelligence Injections</dt>
                <dd>Developed since June 2025 · transmission record 2026-06-17</dd>
              </div>
              <div>
                <dt>Independence</dt>
                <dd>No major-label consensus machine</dd>
              </div>
            </dl>
          </div>

          <p className="section-label">Publication coverage</p>
          <div className="panel-glass" style={{ marginBottom: "2rem" }}>
            <p className="hero-sub" style={{ marginTop: 0, marginBottom: "1rem" }}>
              Publication-hosted profiles and coverage. Kept separate from
              press-release syndication and platform identity pages.
            </p>
            <ExternalEvidenceList items={PUBLICATION_EVIDENCE} />
          </div>

          <p className="section-label">Identity & technical proof</p>
          <div className="panel-glass" style={{ marginBottom: "2rem" }}>
            <p className="hero-sub" style={{ marginTop: 0, marginBottom: "1rem" }}>
              Exact artist profiles and public technical/reference surfaces used
              to resolve entity identity across platforms.
            </p>
            <ExternalEvidenceList items={IDENTITY_EVIDENCE} />
          </div>

          <p className="section-label">Distribution & backlinks</p>
          <div className="panel-glass" style={{ marginBottom: "2rem" }}>
            <p className="hero-sub" style={{ marginTop: 0, marginBottom: "1rem" }}>
              Press-release distribution and syndicated pages. Useful as external
              domain evidence and backlinks, but not represented as independent
              editorial coverage.
            </p>
            <ExternalEvidenceList items={DISTRIBUTION_EVIDENCE} />
          </div>

          <p className="section-label">Assets</p>
          <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
            {LINKS.map((l) => (
              <li key={l.href} style={{ marginBottom: "0.65rem" }}>
                {l.external ? (
                  <a href={l.href}>{l.label}</a>
                ) : (
                  <Link href={l.href}>{l.label}</Link>
                )}
              </li>
            ))}
          </ul>

          <div className="panel-glass" style={{ marginBottom: "2rem" }}>
            <div className="panel-head">
              <span className="panel-id">BOILERPLATE</span>
            </div>
            <p className="hero-sub" style={{ marginTop: "1rem" }}>
              Lultrills is an independent multi-genre artist and architect of the
              Trillsverse, a sovereign creative and technical system operated under
              Trillsverse LLC. Work centers authenticity, neurodivergent
              sovereignty, and self-owned infrastructure. Music as documentation.
              Gate as runtime. Canon as memory.
            </p>
          </div>

          <p className="section-label">Contact</p>
          <p className="hero-sub">
            Primary:{" "}
            <a
              href="https://www.instagram.com/jbraj_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @jbraj_
            </a>
            <br />
            Story URL:{" "}
            <Link href="/reality-update">
              {SITE}/reality-update
            </Link>
            <br />
            Wire copy (repo): docs/campaign/reality-update/press-release.md
          </p>

          <p className="hero-lead" style={{ marginTop: "3rem", fontSize: "1.25rem" }}>
            Trillsverse. The Update.
          </p>
        </div>
      </main>
    </div>
  );
}
