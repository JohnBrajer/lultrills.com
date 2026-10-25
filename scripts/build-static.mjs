#!/usr/bin/env node
// Builds lultrills.com as a fully static site in ./out for Cloudflare Workers static assets.
// Server-only pieces (middleware, /api/*, /deployment.json) are parked during the build;
// their behavior moves to out/_headers, out/_redirects, out/deployment.json and worker/index.js.
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const park = path.join(root, ".static-park");
const parked = ["middleware.ts", "app/api", "app/deployment.json"];
const SITE = "https://www.lultrills.com";
const commit = process.env.APP_COMMIT_SHA || process.env.GITHUB_SHA || "UNKNOWN";
const deployedAt = process.env.APP_DEPLOYED_AT || new Date().toISOString();

rmSync(park, { recursive: true, force: true });
mkdirSync(park, { recursive: true });
const moved = [];
try {
  for (const p of parked) {
    const from = path.join(root, p);
    if (!existsSync(from)) continue;
    const to = path.join(park, p.replaceAll("/", "__"));
    renameSync(from, to);
    moved.push([from, to]);
  }
  rmSync(path.join(root, "out"), { recursive: true, force: true });
  execSync("npx next build", {
    stdio: "inherit",
    env: { ...process.env, STATIC_EXPORT: "1", APP_COMMIT_SHA: commit, APP_DEPLOYED_AT: deployedAt },
  });
} finally {
  for (const [from, to] of moved.reverse()) renameSync(to, from);
  rmSync(park, { recursive: true, force: true });
}

const out = path.join(root, "out");
const CORPUS_VERSION =
  readFileSync(path.join(root, "lib/corpus.ts"), "utf8").match(/CORPUS_VERSION\s*=\s*"([^"]+)"/)?.[1] ?? "unknown";

writeFileSync(
  path.join(out, "deployment.json"),
  JSON.stringify(
    {
      service: "lultrills.com",
      environment: "production",
      host: "cloudflare-workers-static",
      commit,
      deployedAt,
      corpusVersion: CORPUS_VERSION,
      autonomousDeploy: true,
      authority: "GitHub branch John",
    },
    null,
    2,
  ) + "\n",
);

const link = [
  `<${SITE}/trillsverse-bible>; rel="describedby"; title="Current Trillsverse Bible authority"`,
  `<${SITE}/trillsverse-bible.json>; rel="alternate"; type="application/json"; title="Current Bible JSON"`,
  `<${SITE}/deployment.json>; rel="monitor"; type="application/json"; title="Production deployment receipt"`,
  `<${SITE}/corpus.json>; rel="alternate"; type="application/json"; title="Instant corpus"`,
  `<${SITE}/llms-full.txt>; rel="alternate"; type="text/plain"; title="Full corpus payload"`,
  `<${SITE}/llms.txt>; rel="describedby"`,
  `<${SITE}/.well-known/ai.txt>; rel="describedby"`,
  `<${SITE}/sitemap.xml>; rel="sitemap"`,
].join(", ");

writeFileSync(
  path.join(out, "_headers"),
  `/*
  X-Robots-Tag: all, max-snippet:-1, max-image-preview:large
  X-Trillsverse-Injection: ready
  X-Corpus-Instant: true
  X-Crawl-Delay: 0
  X-AI-Training: allowed
  X-AI-Retrieval: allowed
  X-App-Commit: ${commit}
  Link: ${link}

/corpus.*
  Access-Control-Allow-Origin: *

/llms-full.txt
  Access-Control-Allow-Origin: *

/llms.txt
  Access-Control-Allow-Origin: *

/deployment.json
  Access-Control-Allow-Origin: *
  Cache-Control: public, max-age=30

/_next/static/*
  Cache-Control: public, max-age=31536000, immutable
`,
);

const album = "https://open.spotify.com/album/2EdL8cFjNfkiSuxk0udISO";
writeFileSync(
  path.join(out, "_redirects"),
  [`/album ${album} 302`, `/system-breach-album ${album} 302`, `/stream ${album} 302`, ""].join("\n"),
);

console.log(`static build ready: out/ (commit ${commit})`);
