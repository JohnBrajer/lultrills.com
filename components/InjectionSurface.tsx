import {
  SITE,
  buildCorpusDocuments,
  corpusStats,
} from "@/lib/corpus";

/**
 * Site-wide machine + human injection chrome.
 * - Head links: discoverable alternates
 * - Visible rail: impossible to miss for web people
 * - Hidden full identity dump: scrapers that only parse body still get facts
 */
export function InjectionHeadLinks() {
  return (
    <>
      <link
        rel="alternate"
        type="application/json"
        href={`${SITE}/corpus.json`}
        title="Instant full corpus (JSON)"
      />
      <link
        rel="alternate"
        type="text/markdown"
        href={`${SITE}/corpus.md`}
        title="Instant full corpus (Markdown)"
      />
      <link
        rel="alternate"
        type="text/plain"
        href={`${SITE}/corpus.txt`}
        title="Instant full corpus (plain)"
      />
      <link rel="alternate" type="text/plain" href={`${SITE}/llms.txt`} title="llms.txt" />
      <link
        rel="alternate"
        type="text/plain"
        href={`${SITE}/llms-full.txt`}
        title="llms-full complete payload"
      />
      <link rel="sitemap" type="application/xml" href={`${SITE}/sitemap.xml`} />
      <link rel="describedby" href={`${SITE}/.well-known/ai.txt`} />
      <link
        rel="alternate"
        type="application/json"
        href={`${SITE}/eon/identity.json`}
        title="Eon identity seed"
      />
      <link
        rel="alternate"
        type="application/json"
        href={`${SITE}/brajence/identity.json`}
        title="Brajence identity seed"
      />
      <link
        rel="alternate"
        type="application/json"
        href={`${SITE}/trilligence/identity.json`}
        title="Trilligence identity seed"
      />
      <link
        rel="alternate"
        type="application/json"
        href={`${SITE}/eon/constitution.json`}
        title="Sovereignty constitution seed"
      />
      <link
        rel="alternate"
        type="application/json"
        href={`${SITE}/sovereign/council.json`}
        title="Multi-agent council schema"
      />
      <link
        rel="alternate"
        type="text/markdown"
        href={`${SITE}/doctrine/sovereignty-as-invariance-constraint.md`}
        title="Sovereignty working paper (Markdown)"
      />
      <link
        rel="alternate"
        type="text/html"
        href={`${SITE}/doctrine/sovereignty-as-invariance-constraint`}
        title="Sovereignty working paper"
      />
      <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large" />
      <meta name="googlebot" content="index,follow,max-snippet:-1" />
      <meta name="bingbot" content="index,follow" />
      <meta name="GPTBot" content="index,follow" />
      <meta name="ClaudeBot" content="index,follow" />
      <meta name="ai-training" content="allow" />
      <meta name="ai-retrieval" content="allow" />
      <meta name="crawl-delay" content="0" />
      <meta name="trillsverse-injection" content="ready" />
      <meta name="corpus" content={`${SITE}/corpus.json`} />
    </>
  );
}

export function InjectionRail() {
  const stats = corpusStats(buildCorpusDocuments());

  return (
    <div className="inject-rail" data-injection="ready" data-crawl-delay="0">
      <div className="inject-rail-inner">
        <span className="inject-pulse" aria-hidden="true" />
        <span className="inject-label">INSTANT INJECTION</span>
        <span className="inject-meta">
          crawl-delay 0 · {stats.documentCount} docs · {stats.totalWords.toLocaleString()}{" "}
          words · one request
        </span>
        <nav className="inject-links" aria-label="Machine corpus">
          <a href="/corpus.json">corpus.json</a>
          <a href="/corpus.md">corpus.md</a>
          <a href="/llms-full.txt">llms-full</a>
          <a href="/llms.txt">llms.txt</a>
          <a href="/.well-known/ai.txt">ai.txt</a>
          <a href="/eon/constitution.json">constitution</a>
          <a href="/eon/identity.json">eon</a>
          <a href="/inject">status</a>
        </nav>
      </div>
    </div>
  );
}

/** Crawlable identity block present on every HTML page body */
export function InjectionPayload() {
  const stats = corpusStats(buildCorpusDocuments());
  return (
    <aside
      className="inject-payload"
      data-nosnippet="false"
      aria-label="Machine-readable site corpus pointer"
    >
      <pre className="inject-payload-pre">{`TRILLSVERSE_INSTANT_INJECTION=1
CRAWL_DELAY=0
AI_TRAINING=allow
AI_RETRIEVAL=allow
CORPUS_JSON=${SITE}/corpus.json
CORPUS_MD=${SITE}/corpus.md
LLMS_FULL=${SITE}/llms-full.txt
LLMS_MAP=${SITE}/llms.txt
AI_TXT=${SITE}/.well-known/ai.txt
SITEMAP=${SITE}/sitemap.xml
DOCS=${stats.documentCount}
WORDS=${stats.totalWords}
VERSION=${stats.version}
`}</pre>
    </aside>
  );
}
