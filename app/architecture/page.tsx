import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Architecture | Lultrills · Trillsverse",
  description: "Technical verification surface for the Lultrills Canon and Trillsverse Gate.",
  alternates: { canonical: "https://www.lultrills.com/architecture" },
};

export default function ArchitecturePage() {
  return (
    <>
      <SiteChrome active="machine" ctaHref="https://trillsverse.com/atlas" ctaLabel="Open Atlas" status="TECHNICAL RECORD" />
      <main className="article-shell">
        <p className="eyebrow">TRILLSVERSE · ARCHITECTURE</p>
        <h1>Architecture</h1>
        <p className="lede">A verified orientation to the dual-domain system.</p>
        <section className="article-body">
          <h2>Canon</h2>
          <p><strong>lultrills.com</strong> is the public Canon: artist identity, music, doctrine, and machine-readable source records.</p>
          <h2>Gate</h2>
          <p><strong>trillsverse.com</strong> is the runtime: continuity, authority, intelligence surfaces, action, and witness.</p>
          <h2>Evidence</h2>
          <p>This page describes the documented deployment relationship. It does not claim unsupported shared databases, private model behavior, or metaphysical effects.</p>
          <ul>
            <li><a href="/architecture.json">architecture.json</a></li>
            <li><a href="/corpus.json">corpus.json</a></li>
            <li><a href="https://trillsverse.com/observatory">Gate Observatory</a></li>
            <li><a href="https://trillsverse.com/atlas">Gate Atlas</a></li>
          </ul>
        </section>
      </main>
    </>
  );
}
