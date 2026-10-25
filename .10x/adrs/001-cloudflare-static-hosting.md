# ADR-001: Move lultrills.com from DigitalOcean droplet to Cloudflare Workers static assets

**Status:** Accepted
**Date:** 2026-10-25
**Feature:** sovereign-hosting
**Author:** 10x-Team (Architect + Staff Engineer)

## Context
All four public sites run on one $48/month DigitalOcean droplet. A missed payment takes everything offline, and deploys are manual SSH rebuilds. Founder requirement: no recurring hosting bill that can shut the sites off.

## Decision
Build lultrills.com as a fully static Next.js export (`scripts/build-static.mjs`, `STATIC_EXPORT=1`) and serve it from Cloudflare Workers static assets (free, no card). A ~150-line worker (`worker/index.js`) owns only `/api/*`: `/api/health` and `/api/inquiries` (stored in KV `lultrills-inquiries`). Middleware headers and redirects become `out/_headers` and `out/_redirects`; `/deployment.json` is generated at build time. GitHub Actions deploys on every push to `John` and daily.

The droplet build path (`output: standalone`, middleware, API routes) is unchanged, so the droplet keeps working until DNS cuts over.

## Alternatives Considered
| Alternative | Pros | Cons | Why Not |
|---|---|---|---|
| OpenNext on Workers (full SSR) | Keeps middleware/ISR as-is | Worker bundle near 3 MiB free limit; runtime `fs` reads; more moving parts | Every page is already static; SSR buys nothing |
| Keep droplet, prepay | No code change | Still a bill; still manual deploys | Fails the requirement |
| GitHub Pages only | Free, zero infra | No API (inquiry form), no custom headers | Kept as a possible static mirror of `out/` |

## Consequences
- Positive: $0 hosting, auto deploys, global CDN, static `out/` can be mirrored anywhere.
- Negative: `revalidate: 300` routes refresh on deploy/daily rebuild instead of every 5 min. Inquiries move from droplet disk to KV (old records stay on the droplet volume — export before decommissioning).
- Risks: Cloudflare free tier is still a third party (no bill, but ToS-governed). Mitigation: `out/` is portable.

## Dependencies
- `CLOUDFLARE_API_TOKEN` (+ optional `CLOUDFLARE_ACCOUNT_ID`) repo secrets.
- Custom domain requires lultrills.com DNS on Cloudflare (currently Hostinger `dns-parking.com`).
