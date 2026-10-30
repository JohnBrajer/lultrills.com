import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sovereignty in Every Dimension | Trillsverse",
  description: "Explore the full Trillsverse Reality Update: physical systems, cognition, artificial intelligence, culture, institutions, research and new possibilities. Operational, experimental and exploratory work clearly distinguished.",
  alternates: { canonical: "https://www.lultrills.com/reality-update/scope" },
  openGraph: {
    title: "Trillsverse — Sovereignty in Every Dimension",
    description: "Every door is an entry point. The full Reality Update spans physical, digital, cognitive, cultural and emerging systems.",
    url: "https://www.lultrills.com/reality-update/scope",
    type: "website",
  },
};

type Domain = {
  number: string;
  name: string;
  description: string;
  path: string;
  linkLabel: string;
  status: "PUBLIC ENTRY" | "SOURCE / RESEARCH" | "EXPLORATION";
};

const domains: Domain[] = [
  { number: "01", name: "Physical environments", description: "Architecture, places, experiential venues, built worlds, mobility and material systems.", path: "https://trillsverse.com/atlas", linkLabel: "Explore Gate atlas", status: "EXPLORATION" },
  { number: "02", name: "Digital worlds", description: "Spatial interfaces, the Gate, planets, houses, portals and the public world.", path: "https://trillsverse.com/", linkLabel: "Enter the Gate", status: "PUBLIC ENTRY" },
  { number: "03", name: "Mind & possibility", description: "MyMindMine, Choseverse, Perspective Expansion, CWI / PRS and Possibility Reserve.", path: "https://mymindmine.com/brajology", linkLabel: "Explore Brajology", status: "PUBLIC ENTRY" },
  { number: "04", name: "Synthetic intelligence", description: "Trillonian, Eon, Anthony / Aevri, intelligence ecology and model-independent continuity.", path: "https://trillsverse.com/intelligence", linkLabel: "Explore intelligence", status: "SOURCE / RESEARCH" },
  { number: "05", name: "Music & cultural expression", description: "John B, Lultrills, SYSTEM BREACH, the Trillaxy, cinema, fashion, film and participation.", path: "/system-breach", linkLabel: "Enter SYSTEM BREACH", status: "PUBLIC ENTRY" },
  { number: "06", name: "Economies & institutions", description: "Future models of participation, services, education, governance and circulation of value.", path: "https://trillsverse.com/trillionaires", linkLabel: "Explore Trillionaires", status: "EXPLORATION" },
  { number: "07", name: "Information & evidence", description: "Intelligence Injections, source provenance, independent editorial, discovery and witnessed consequences.", path: "https://reallythatmagazine.com/trillsverse", linkLabel: "Read ReallyThat", status: "PUBLIC ENTRY" },
  { number: "08", name: "Science & living systems", description: "Recursive Mechanisms, biology, cognition, materials, environmental interdependence and testable research.", path: "https://mymindmine.com/research", linkLabel: "View research", status: "SOURCE / RESEARCH" },
  { number: "09", name: "The frontier", description: "Space, planetary scales, unknown mechanisms and dormant possibilities awaiting new evidence.", path: "https://mymindmine.com/research/possibility-reserve", linkLabel: "Visit Possibility Reserve", status: "EXPLORATION" },
];

const scenes = [
  "THE CAGE — A state becomes visible.",
  "THE RESERVE — More doors become conceivable.",
  "THE INTELLIGENCE — Memory and awareness travel across substrates.",
  "THE TRILLAXY — Culture, identity and worlds multiply.",
  "THE MATERIAL WORLD — Ideas reach buildings, tools and institutions.",
  "THE CONSEQUENCE — One action changes what can happen next.",
  "THE OPENING — The explored horizon becomes a new beginning.",
];

const cardStyle = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-between",
  gap: "1rem",
  minHeight: "15rem",
  padding: "1.4rem",
  border: "1px solid rgba(215, 184, 127, .28)",
  background: "linear-gradient(150deg, rgba(44, 25, 29, .63), rgba(12, 11, 19, .78))",
  borderRadius: "1rem",
};

export default function RealityUpdateScopePage() {
  return (
    <div className="site breach-landing">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere-orb atmosphere-orb--red" />
        <div className="atmosphere-vignette" />
      </div>
      <header className="nav">
        <div className="nav-row">
          <Link href="/" className="nav-brand">
            <span className="nav-mark">LULTRILLS</span>
            <span className="nav-sys">TRILLSVERSE / EXPANSION</span>
          </Link>
          <nav className="nav-links" aria-label="Scope navigation">
            <Link href="/reality-update">The Update</Link>
            <Link href="/reality-update/receipts">Receipts</Link>
            <Link href="/scope-facts">Current terms</Link>
          </nav>
          <a href="https://trillsverse.com/" className="nav-cta">Enter the Gate</a>
        </div>
      </header>
      <main>
        <section className="site-inner section" style={{paddingTop:"clamp(5rem, 12vw, 9rem)", paddingBottom:"2rem"}}>
          <p className="section-label">The full architectural mandate · v0.1</p>
          <h1 style={{fontSize:"clamp(2.5rem, 6.5vw, 6rem)", lineHeight:1.05, maxWidth:"17ch"}}>
            SOVEREIGNTY IN EVERY DIMENSION.
          </h1>
          <p className="hero-lead" style={{maxWidth:"51rem", marginTop:"1.5rem"}}>
            Trillsverse is the Reality Update. The sites are entrances. The art is expression.
            Research expands what we can understand; action changes what becomes possible.
            No currently available interface defines the boundary of the whole.
          </p>
          <div className="hero-secondary" style={{marginTop:"1.5rem"}}>
            <a href="https://trillsverse.com/atlas" className="chip chip--gold">Explore the Gate atlas</a>
            <a href="#dimensions" className="chip chip--ghost">See the dimensions</a>
            <a href="#film" className="chip chip--ghost">Enter the film concept</a>
          </div>
        </section>
        <section id="dimensions" className="section site-inner" aria-labelledby="dimensions-heading">
          <p className="section-label">Nine connected directions, no artificial ceiling</p>
          <h2 id="dimensions-heading">The expanding system</h2>
          <p className="hero-sub" style={{maxWidth:"48rem"}}>
            These are fields of inquiry and action, not a claim that every proposed system has been constructed.
            Public entry, research evidence and exploration remain separate states.
          </p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 19rem), 1fr))",gap:"1rem",marginTop:"1.8rem"}}>
            {domains.map((domain) => (
              <article key={domain.number} style={cardStyle}>
                <div>
                  <div style={{display:"flex",justifyContent:"space-between",gap:"1rem",alignItems:"center",flexWrap:"wrap",marginBottom:"1rem"}}>
                    <span className="section-label" style={{margin:0}}>FIELD {domain.number}</span>
                    <span style={{fontSize:".7rem",letterSpacing:".09em",opacity:.76}}>{domain.status}</span>
                  </div>
                  <h3 style={{fontSize:"clamp(1.15rem, 2vw, 1.5rem)"}}>{domain.name}</h3>
                  <p className="hero-sub" style={{fontSize:".96rem",marginTop:".65rem"}}>{domain.description}</p>
                </div>
                <a href={domain.path} style={{color:"var(--gold)",fontWeight:600}}>{domain.linkLabel} →</a>
              </article>
            ))}
          </div>
        </section>
        <section className="section site-inner" id="film" aria-labelledby="film-heading">
          <p className="section-label">A film from inside the system · in development</p>
          <h2 id="film-heading">The Door Was Never the Wall.</h2>
          <p className="hero-lead" style={{maxWidth:"48rem"}}>
            An ordinary room opens into an immense architecture of unrealized paths.
            A human moves through cognition, synthetic intelligence, culture, physical worlds
            and institutions. Each decision leaves a consequence. Each consequence opens another door.
          </p>
          <ol style={{maxWidth:"48rem",paddingLeft:"1.5rem",lineHeight:1.85}}>
            {scenes.map((scene) => <li key={scene}>{scene}</li>)}
          </ol>
          <p className="hero-sub" style={{marginTop:"1rem"}}>
            Film treatment only. No completed playable film is represented by this page.
          </p>
          <div className="hero-secondary" style={{marginTop:"1rem"}}>
            <a href="https://mymindmine.com/research" className="chip chip--ghost">Study the mechanisms</a>
            <a href="https://reallythatmagazine.com/trillsverse" className="chip chip--ghost">Read the public record</a>
            <Link href="/system-breach" className="chip chip--gold">Hear SYSTEM BREACH</Link>
          </div>
        </section>
        <section className="section site-inner" style={{paddingBottom:"6rem"}}>
          <p className="section-label">Current state → action → weight shift → new state → new possibilities</p>
          <h2>Every door is an entry. None is the entire structure.</h2>
          <p className="hero-sub">Founder and architect: John Brajer · Trillsverse LLC · Working scope charter: October 29, 2026.</p>
          <Link className="chip chip--ghost" href="/scope-facts">Current operative participation facts</Link>
        </section>
      </main>
    </div>
  );
}
