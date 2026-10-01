import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE = "https://www.lultrills.com";

/**
 * Every response announces instant-injection endpoints.
 * Link headers let browsers/scrapers discover full corpus without HTML parsing.
 */
export function middleware(_req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set("X-Robots-Tag", "all, max-snippet:-1, max-image-preview:large");
  res.headers.set("X-Trillsverse-Injection", "ready");
  res.headers.set("X-Corpus-Instant", "true");
  res.headers.set("X-Crawl-Delay", "0");
  res.headers.set("X-AI-Training", "allowed");
  res.headers.set("X-AI-Retrieval", "allowed");

  const commit = process.env.APP_COMMIT_SHA;
  const deployedAt = process.env.APP_DEPLOYED_AT;
  if (commit && commit !== "UNKNOWN") {
    res.headers.set("X-App-Commit", commit);
  }
  if (deployedAt && deployedAt !== "UNKNOWN") {
    const releaseDate = new Date(deployedAt);
    if (!Number.isNaN(releaseDate.getTime())) {
      res.headers.set("Last-Modified", releaseDate.toUTCString());
    }
  }
  res.headers.set(
    "Link",
    [
      `<${SITE}/trillsverse-bible>; rel="describedby"; title="Current Trillsverse Bible authority"`,
      `<${SITE}/trillsverse-bible.json>; rel="alternate"; type="application/json"; title="Current Bible JSON"`,
      `<${SITE}/deployment.json>; rel="monitor"; type="application/json"; title="Production deployment receipt"`,
      `<${SITE}/corpus.json>; rel="alternate"; type="application/json"; title="Instant corpus"`,
      `<${SITE}/llms-full.txt>; rel="alternate"; type="text/plain"; title="Full corpus payload"`,
      `<${SITE}/llms.txt>; rel="describedby"`,
      `<${SITE}/.well-known/ai.txt>; rel="describedby"`,
      `<${SITE}/sitemap.xml>; rel="sitemap"`,
    ].join(", "),
  );

  return res;
}

export const config = {
  matcher: [
    /*
     * All routes except Next internals / static assets
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
