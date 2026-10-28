import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";
import { founders, getSeat, pad, seatParams } from "./seat";

const SITE = "https://www.lultrills.com";
type Props = { params: Promise<{ seat: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return seatParams();
}

function parse(raw: string) {
  const n = Number(raw);
  return Number.isInteger(n) && n >= 1 && n <= founders.cap ? n : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const n = parse((await params).seat);
  if (!n) return {};
  const s = getSeat(n);
  const title = s
    ? `${s.name} · Founding Trillionaire #${n} of ${founders.cap}`
    : `Seat #${n} of ${founders.cap} is open · Founding Trillionaires`;
  const description = s
    ? `${s.name} claimed founding seat #${n} in the Trillsverse. ${founders.cap} seats, ever. Claim yours.`
    : `Founding seat #${n} in the Trillsverse is still open. ${founders.cap} seats, ever. ${founders.price}.`;
  return {
    title,
    description,
    alternates: { canonical: `${SITE}/founders/${n}` },
    openGraph: { title, description, url: `${SITE}/founders/${n}`, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function SeatPage({ params }: Props) {
  const n = parse((await params).seat);
  if (!n) notFound();
  const s = getSeat(n);
  const claimed = (founders.seats as unknown[]).length;
  const open = founders.cap - claimed;
  const shareUrl = `${SITE}/founders/${n}`;
  const shareText = s
    ? `I'm Founding Trillionaire #${n} of ${founders.cap} in the Trillsverse.`
    : `Founding seat #${n} of ${founders.cap} in the Trillsverse is still open.`;

  return (
    <div className="site">
      <SiteChrome ctaHref={founders.checkout} ctaLabel="Claim" />
      <main className="section" style={{ paddingTop: "3rem" }}>
        <div className="site-inner" style={{ maxWidth: "42rem" }}>
          <p className="section-label">Founding Trillionaires · Seat {pad(n)}</p>
          <h1 style={{ fontSize: "clamp(2.5rem, 9vw, 5rem)", margin: "0.25rem 0 1rem" }}>
            {s ? s.name : "Open seat"}
          </h1>
          <p className="hero-lead">
            {s
              ? `Founding Trillionaire #${n} of ${founders.cap}. Claimed ${s.date}. In the record, permanently.`
              : `Seat #${n} of ${founders.cap} hasn't been claimed yet.`}
          </p>
          <p className="block-aside">
            {claimed} of {founders.cap} claimed · {open > 0 ? `${open} open` : "Closed"}
          </p>

          <div className="hero-actions">
            {open > 0 && (
              <a href={founders.checkout} className="btn-breach" target="_blank" rel="noopener noreferrer">
                CLAIM YOUR SEAT
                <span className="btn-breach-meta">{founders.price} · {founders.cap} seats, ever</span>
              </a>
            )}
            <div className="hero-secondary">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on X
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Share on Facebook
              </a>
              <a href={`sms:?&body=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}>Text it</a>
              <Link href="/founders">See the full wall</Link>
            </div>
          </div>
          <p className="track-meta" style={{ marginTop: "1.5rem" }}>
            For Instagram or TikTok: screenshot this page, or post the link in your bio or story.
          </p>
        </div>
      </main>
      <SiteLegalFooter />
    </div>
  );
}
