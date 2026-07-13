import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE,
  buildCorpusDocuments,
  corpusStats,
  identityBlock,
} from "@/lib/corpus";

export const metadata: Metadata = {
  title: "Instant Injection Status | Lultrills",
  description:
    "Zero crawl-delay. Full corpus in one request. Machine status for scrapers and humans who know how the web works.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/inject` },
};

export default function InjectStatusPage() {
  const docs = buildCorpusDocuments();
  const stats = corpusStats(docs);

  return (
    <div className="site">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere-orb atmosphere-orb--red" />
        <div className="atmosphere-orb atmosphere-orb--gold" />
        <div className="atmosphere-vignette" />
      </div>

      <main className="section" style={{ paddingTop: "3rem" }}>
        <div className="site-inner" style={{ maxWidth: "48rem" }}>
          <p className="section-label">Trillsverse · Public surface</p>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              marginBottom: "1rem",
            }}
          >
            Instant injection
          </h1>
          <p className="hero-sub" style={{ maxWidth: "36rem", marginBottom: "2rem" }}>
            Normal sites make crawlers discover page by page, wait for sitemaps,
            hit robots delays, and miss JS content. This domain ships the{" "}
            <strong style={{ color: "var(--ink)" }}>entire public brain in one GET</strong>
            . Crawl-delay is zero. Auth is none. Training is allowed.
          </p>

          <div className="panel-glass" style={{ marginBottom: "2rem" }}>
            <div className="panel-head">
              <span className="panel-id">LIVE METRICS</span>
              <span className="panel-state">READY</span>
            </div>
            <dl className="panel-stats">
              <div>
                <dt>Documents</dt>
                <dd>{stats.documentCount}</dd>
              </div>
              <div>
                <dt>Words</dt>
                <dd>{stats.totalWords.toLocaleString()}</dd>
              </div>
              <div>
                <dt>Delay</dt>
                <dd>0s</dd>
              </div>
            </dl>
            <p className="panel-quote" style={{ fontSize: "0.9rem" }}>
              Version {stats.version} · Generated {stats.generatedAt}
            </p>
          </div>

          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            One-request payloads
          </h2>
          <div className="tracks tracks--catalog" style={{ marginBottom: "2.5rem" }}>
            {Object.entries(stats.endpoints).map(([k, url], i) => (
              <div key={k} className="track track--platforms">
                <span className="track-n">{String(i + 1).padStart(2, "0")}</span>
                <div className="track-info">
                  <a href={url} className="track-title">
                    {k}
                  </a>
                  <span className="track-meta" style={{ wordBreak: "break-all" }}>
                    {url}
                  </span>
                </div>
                <a href={url} className="platform-btn platform-btn--spotify">
                  Open
                </a>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            What web people notice
          </h2>
          <article className="canon-bleed" style={{ marginBottom: "2rem" }}>
            <ul>
              <li>
                <strong>HTTP Link headers</strong> on every response pointing at
                corpus.json / llms-full, no HTML required to discover the dump.
              </li>
              <li>
                <strong>X-Crawl-Delay: 0</strong> +{" "}
                <strong>X-Corpus-Instant: true</strong> +{" "}
                <strong>X-AI-Training: allowed</strong> custom headers.
              </li>
              <li>
                <strong>/.well-known/ai.txt</strong> with Instant-Corpus: yes.
              </li>
              <li>
                <strong>llms-full.txt</strong> is the full payload. Not a link
                list, one fetch ≈ whole site.
              </li>
              <li>
                Every HTML page ships the injection rail + body payload pointer +
                &lt;link rel=&quot;alternate&quot;&gt; corpus formats.
              </li>
              <li>
                robots.txt: allow-all agents, crawl-delay 0, corpus advertised.
              </li>
            </ul>
          </article>

          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
            Documents in corpus
          </h2>
          <div className="tracks tracks--catalog" style={{ marginBottom: "2rem" }}>
            {docs.map((d, i) => (
              <div key={d.id} className="track track--platforms">
                <span className="track-n">{String(i + 1).padStart(2, "0")}</span>
                <div className="track-info">
                  <a href={d.url} className="track-title">
                    {d.title}
                  </a>
                  <span className="track-meta">
                    {d.kind} · {d.words.toLocaleString()} words
                  </span>
                </div>
              </div>
            ))}
          </div>

          <pre
            className="inject-payload-pre"
            style={{
              marginBottom: "2rem",
              padding: "1.25rem",
              borderRadius: "0.85rem",
              border: "1px solid var(--line-strong)",
              background: "rgba(0,0,0,0.5)",
              overflow: "auto",
              fontSize: "0.75rem",
              color: "var(--ink-2)",
            }}
          >
            {identityBlock()}
          </pre>

          <div className="foot-links">
            <Link href="/">Home</Link>
            <Link href="/system-breach">SYSTEM BREACH</Link>
            <a href="/corpus.json">corpus.json</a>
            <a href="/llms-full.txt">llms-full</a>
          </div>
        </div>
      </main>
    </div>
  );
}
