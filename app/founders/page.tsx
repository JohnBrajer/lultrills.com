import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";
import founders from "@/content/founders.json";

const SITE = "https://www.lultrills.com";

type Seat = { seat: number; name: string; date: string };

export const metadata: Metadata = {
  title: "Founding Trillionaires · The Record | Lultrills · Trillsverse",
  description: `The permanent record of the ${founders.cap} Founding Trillionaires of the Trillsverse. Numbered seats, names in the record, in the order they were claimed.`,
  alternates: { canonical: `${SITE}/founders` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Founding Trillionaires · The Record",
    description: `${founders.cap} numbered founding seats in the Trillsverse.`,
    url: `${SITE}/founders`,
    type: "website",
  },
};

const PERKS = [
  "A numbered founding seat, yours permanently",
  "Your name on this wall, in the record, forever",
  "First listen of “Lultrills Back” before it goes public",
  "The Trillionaire University pack from all 7 nights of THE WEEN",
];

export default function FoundersPage() {
  const seats = founders.seats as Seat[];
  const bySeat = new Map(seats.map((s) => [s.seat, s]));
  const claimed = seats.length;
  const open = founders.cap - claimed;
  const soldOut = open <= 0;

  return (
    <div className="site">
      <SiteChrome ctaHref={founders.checkout} ctaLabel="Claim" />

      <main className="section" style={{ paddingTop: "3rem" }}>
        <div className="site-inner">
          <div className="block-head">
            <div>
              <p className="section-label">The record · Opened {founders.opened}</p>
              <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", margin: 0 }}>
                Founding Trillionaires
              </h1>
            </div>
            <p className="block-aside">
              {claimed} of {founders.cap} seats claimed · {soldOut ? "Closed" : `${open} open`}
            </p>
          </div>

          <div className="canon-bleed" style={{ maxWidth: "42rem" }}>
            <p>
              {founders.cap} seats. Each one is numbered in the order it was claimed, and every name
              stays in the record of the Trillsverse permanently. When the last seat is taken, the
              founding round closes.
            </p>
            <ul>
              {PERKS.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            {!soldOut && (
              <div className="hero-actions">
                <a
                  href={founders.checkout}
                  className="btn-breach"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CLAIM YOUR SEAT
                  <span className="btn-breach-meta">
                    {founders.price} · Seat {claimed + 1} is next
                  </span>
                </a>
              </div>
            )}
          </div>

          <ol
            aria-label="Founding seats"
            style={{
              listStyle: "none",
              padding: 0,
              margin: "2.5rem 0 0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(9.5rem, 1fr))",
              gap: "0.6rem",
            }}
          >
            {Array.from({ length: founders.cap }, (_, i) => {
              const n = i + 1;
              const seat = bySeat.get(n);
              return (
                <li
                  key={n}
                  style={{
                    border: "1px solid",
                    borderColor: seat ? "rgba(212,175,55,.6)" : "rgba(255,255,255,.12)",
                    borderRadius: "0.5rem",
                    padding: "0.7rem 0.8rem",
                    minHeight: "4.2rem",
                    opacity: seat ? 1 : 0.55,
                  }}
                >
                  <div className="track-meta">SEAT {String(n).padStart(3, "0")}</div>
                  <div style={{ fontWeight: 700, overflowWrap: "anywhere" }}>
                    {seat ? seat.name : "Open"}
                  </div>
                  {seat && <div className="track-meta">{seat.date}</div>}
                </li>
              );
            })}
          </ol>

          <p className="track-meta" style={{ marginTop: "2rem" }}>
            Machine record: <Link href="/founders.json">/founders.json</Link>
          </p>
        </div>
      </main>

      <SiteLegalFooter />
    </div>
  );
}
