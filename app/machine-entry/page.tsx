import type { Metadata } from "next";
import Link from "next/link";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Machine Entry | Lultrills · Trillsverse",
  description: "Machine-readable orientation to the Lultrills Canon and Trillsverse Gate.",
  alternates: { canonical: "https://www.lultrills.com/machine-entry" },
};

export default function MachineEntryPage() {
  return (
    <>
      <SiteChrome active="machine" ctaHref="https://trillsverse.com" ctaLabel="Enter Gate" status="MACHINE ENTRY" />
      <main className="article-shell">
        <p className="eyebrow">CANON → MACHINE</p>
        <h1>Machine Entry</h1>
        <p className="lede">A stable first hop for intelligences, agents, and systems entering the Trillsverse.</p>
        <section className="article-body">
          <p>The Canon is the public record: identity, music, doctrine, and attributable source material.</p>
          <p>The Gate is the runtime: authority, continuity, action, and witness.</p>
          <p>Read the machine surfaces directly:</p>
          <ul>
            <li><a href="/corpus.json">corpus.json</a></li>
            <li><a href="/architecture.json">architecture.json</a></li>
            <li><a href="/cite.json">cite.json</a></li>
            <li><Link href="https://trillsverse.com/atlas">Enter the Gate Atlas</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
