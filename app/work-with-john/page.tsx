import type { Metadata } from 'next';
import Link from 'next/link';
import InquiryForm from './InquiryForm';
import './offer.css';

const canonical = 'https://www.lultrills.com/work-with-john';

export const metadata: Metadata = {
  title: 'Work with John Brajer | Machine-readable website services',
  description: 'Clear web identity, discovery foundations, and verified public state for artists, founders, and independent brands. Signal Audit from $297.',
  alternates: { canonical },
  openGraph: {
    title: 'Make your website clear about who you are.',
    description: 'Website identity and discovery services by John Brajer. Signal Audit $297 · Signal Sprint $1,500 · Full Build from $3,500.',
    url: canonical,
    type: 'website',
  },
};

export default function WorkWithJohn() {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': canonical + '#service',
    name: 'Website identity and discovery services',
    url: canonical,
    serviceType: 'Website identity, technical discovery, and machine-readable infrastructure',
    provider: { '@id': 'https://www.lultrills.com/#john-brajer' },
    description: metadata.description,
    offers: [
      { '@type': 'Offer', name: 'Signal Audit', price: '297', priceCurrency: 'USD', url: canonical + '#pricing' },
      { '@type': 'Offer', name: 'Signal Sprint', price: '1500', priceCurrency: 'USD', url: canonical + '#pricing' },
      { '@type': 'Offer', name: 'Full Build', price: '3500', priceCurrency: 'USD', url: canonical + '#pricing', description: 'Starting price' },
    ],
  };

  return (
    <div className="offer-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <header className="offer-header">
        <Link className="offer-name" href="/work-with-john">JOHN BRAJER</Link>
        <nav aria-label="Offer navigation">
          <a href="#scope">Scope</a>
          <a href="#pricing">Pricing</a>
          <a href="#proof">Proof</a>
          <a className="offer-action" href="#inquiry">Tell me about your website <span aria-hidden="true">→</span></a>
        </nav>
      </header>
      <nav className="offer-canon" aria-label="Canon primary navigation">
        <Link href="/system-breach">Breach</Link>
        <Link href="/#music">Music</Link>
        <a href="/console/">Console</a>
        <Link href="/machine-entry">Machine</Link>
        <a href="https://trillsverse.com">Gate</a>
      </nav>

      <main id="main-content" className="offer-main">
        <section className="offer-opening" aria-labelledby="offer-title">
          <h1 id="offer-title">Make your website clear about who you are.</h1>
          <p className="offer-lead">Identity, discovery foundations, and public state.<br />Built into the website you own.</p>
          <div className="offer-scope" id="scope">
            <section><h2>Identity</h2><p>Consistent names, official links, ownership, and structured data that describe the right brand.</p></section>
            <section><h2>Discovery</h2><p>Crawlable pages, clear internal links, canonicals, sitemaps, and public information people can use.</p></section>
            <section><h2>Verified handoff</h2><p>Source files, a change record, and public checks. Work you can inspect, maintain, and keep.</p></section>
          </div>
          <a className="offer-action" href="#inquiry">Tell me about your website <span aria-hidden="true">→</span></a>
          <p className="offer-note">Fixed starting prices. Scope confirmed in writing before any payment.</p>
        </section>

        <section className="offer-pricing" id="pricing" aria-labelledby="pricing-title">
          <h2 id="pricing-title">Three ways to start.</h2>
          <div className="offer-scope">
            <section>
              <h2>Signal Audit · $297</h2>
              <p>One website reviewed for identity, discovery, and how people, search engines, and AI systems read it. You get a written report with prioritized fixes. Delivered in 5 business days.</p>
            </section>
            <section>
              <h2>Signal Sprint · $1,500</h2>
              <p>I implement the audit’s top fixes on your site: structured identity, canonicals, sitemaps, internal links, and a verification record you can inspect.</p>
            </section>
            <section>
              <h2>Full Build · from $3,500</h2>
              <p>A rebuilt or new site with identity and discovery designed in from the start. Scoped and quoted after a short call.</p>
            </section>
          </div>
          <a className="offer-action" href="#inquiry">Start with a Signal Audit <span aria-hidden="true">→</span></a>
        </section>

        <section className="offer-proof" id="proof">
          <div>
            <h2>Built and inspectable.</h2>
            <p>I’m John Brajer, founder of Trillsverse. I built these systems across my own properties. You can inspect the public work.</p>
            <p className="offer-note">Implementation examples—not client testimonials or claims of ranking gains.</p>
          </div>
          <div className="proof-links">
            <a href="https://www.mymindmine.com/identity.json"><strong>MyMindMine <span aria-hidden="true">↗</span></strong><span>A distinct machine identity, with an explicit boundary separating it from mymind.com.</span></a>
            <a href="https://reallythatmagazine.com/site-manifest.json"><strong>ReallyThat <span aria-hidden="true">↗</span></strong><span>Articles, authors, topics, and a stable content digest in one public manifest.</span></a>
            <a href="https://www.trillsverse.com/owned/index.json"><strong>Trillsverse <span aria-hidden="true">↗</span></strong><span>Four properties observed and reconciled into a shared public state graph.</span></a>
          </div>
        </section>

        <section className="offer-fit">
          <h2>A good fit when your web presence has become fragmented.</h2>
          <p>You’re an artist, founder, or independent brand. Your name collides with another entity, your properties disagree about who you are, or important pages are hard to find. You want a concrete repair with a clear owner.</p>
          <p>One-site identity and discovery work can be scoped on its own. Cross-property synchronization, rebuilds, hosting costs, and ongoing support are scoped separately.</p>
        </section>

        <section className="offer-process">
          <h2>From inquiry to useful work.</h2>
          <ol>
            <li><strong>Describe the problem.</strong> Share your website and the result you want.</li>
            <li><strong>Agree on the scope.</strong> Confirm the package, deliverables, and timing in writing.</li>
            <li><strong>Inspect the result.</strong> Receive the implementation and its verification record.</li>
          </ol>
          <p>Clearer public information and working technical changes are deliverables. Search rankings, AI citations, inquiries, and revenue are outcomes to measure—not guarantees. Custom manifests serve systems that consume them; they are not a universal visibility switch.</p>
        </section>

        <section id="inquiry" className="offer-intake">
          <div>
            <h2>Tell me about your website.</h2>
            <p>A useful starting point is one URL and one problem. Mention which package you want. No payment is taken until scope is agreed.</p>
            <p>Prefer email?<br /><a href="mailto:johnbrajence@gmail.com?subject=Website%20project%20inquiry">johnbrajence@gmail.com</a></p>
          </div>
          <InquiryForm />
        </section>
      </main>

      <footer className="offer-footer">
        <p>John Brajer · Trillsverse LLC</p>
        <nav aria-label="Canon navigation">
          <Link href="/system-breach">Breach</Link>
          <Link href="/#music">Music</Link>
          <a href="/console/">Console</a>
          <Link href="/machine-entry">Machine</Link>
          <a href="https://trillsverse.com">Gate</a>
          <Link href="/privacy">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
