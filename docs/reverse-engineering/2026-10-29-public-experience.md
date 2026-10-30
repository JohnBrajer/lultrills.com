# Public Reality Update: implementation teardown

Evidence captured October 29, 2026 (America/Los_Angeles). Authorized repositories only. This is an implementation record, not a new limit on Trillsverse scope.

## What exists

| Capability | Evidence class and source | Finding |
| --- | --- | --- |
| Maximum scope foundation | code: PR #53 head `28607e2b4cd64316110b9f034c373b3eb182169a`, `app/reality-update/scope/page.tsx:23`; docs: `docs/TRILLSVERSE_MAXIMUM_SCOPE_CHARTER_2026-10-29.md:1` | Nine fields, cross-site links, seven-scene treatment. Merged as `74576e1f3f835db878d78f72a405a2466737b031`. Six corpus tests and the static export passed before merge. |
| Central machine corpus | code: `lib/corpusRegistry.ts:67`, `lib/corpus.ts:200` at PR #53 head | Existing registry already emits public corpus projections. Extend it with the scope record. |
| Gate atlas | code: Gate `client/src/pages/surface-atlas.tsx:1`, blob `ee889e278abcebadba45b5c2716409357db0cacd` | Interactive field selection, environment plate, route links, responsive layout. Uses the existing shared surface registry. |
| Gate destination authority | code: Gate `shared/surfaceRegistry.ts:1`, blob `c531fb5e9ac73023ee99831078a5b3e81b81d09a` | Typed destinations, audience/auth boundaries, aliases, sitemap intent. Node union currently lists Gate, Canon, Sanctuary and Archive; inspect and extend this owner when adding ReallyThat and the full-scope entry. |
| Gate domain portals | code: Gate `client/src/pages/domain-portal.tsx:1`, blob `ffb70351c453313a08ffaa85108b3f4c850220b7` | Route-driven environments and profile visit updates already exist. Reading code does not prove their database writes work in production. |
| Research and editorial surfaces | code inventory: MyMindMine `app/` includes Brajology, research, possibility-reserve JSON; ReallyThat `app/` includes article, author, corpus, and site-manifest routes | Existing responsibilities should be retained. This inventory alone does not verify each route or a shared registry consumer. |
| Film assets | code/artifact: Lultrills `public/plates/`, `public/brand/`, `brag-output-2026-07-11-154835/brag.mp4` and its composition | Candidate source material exists. No claim of footage clearance or of a newly completed teaser. Third-party soundtrack approval has not been established. |
| Build and hosting | code: `.github/workflows/cloudflare.yml:1`, `scripts/build-static.mjs:1`, `worker/`; hosted: GitHub run `40909458356`, fresh `/deployment.json` | Existing Cloudflare static pipeline. The old workflow returned success after skipping deployment because its token was missing. Live receipt reported October 25 and commit `UNKNOWN`. |

## What this implies

The next experience can extend Gate's atlas, environment plates and domain portals. Lultrills remains the canonical scope publisher; each other repository can consume a pinned version during its existing build. There is no demonstrated need for an additional always-on server.

Docs and live infrastructure disagree: Gate `docs/CROSS_DOMAIN_MESH.md` describes DigitalOcean-only convergence, while Lultrills' current workflow and live receipt identify Cloudflare. Treat the older deployment description as historical until reconciled with each property's runtime evidence.

## Adoption map

| Their capability | Our surface today | Verdict |
|---|---|---|
| Central corpus projection (code: `lib/corpusRegistry.ts:67`) | Same repository owns machine publication; scope can be added through `lib/corpus.ts` | **have** |
| Spatial field navigation (code: Gate `client/src/pages/surface-atlas.tsx:1`) | Existing atlas and shared destination registry | **have** |
| Stateful domain rooms (code: Gate `client/src/pages/domain-portal.tsx:1`) | Existing portal route, visit updates and environment presentation | **have** |
| Shared maximum-scope record across all four sites | PR #53 changed-file list and `rg -n 'scope|registry' lib app .github` in Lultrills showed a page-local domain array, not four installed consumers; other consumers remain unverified | **gap** |
| Completed Reality Update film | `rg --files public brag-output-2026-07-11-154835` finds older assets; PR #53 contains a treatment only. No new film master verified | **gap** |
| Additional resident registry server | Current static publishing and JSON projection already cover the storage/publishing requirement | **park** |
| Successful workflow equated with deployment | Old workflow's token-missing branch exits successfully; run log confirms publication was skipped | **reject** |

## What should happen because of it

1. Publish the merged foundation once Cloudflare access is restored, then verify both the commit receipt and rendered page.
2. Use `public/scope/v0.1.0.json` as the versioned source for Lultrills' human page, JSON route and corpus. Its branch status describes the full field; an already-public entry is a separate property. The other three consumers are explicitly marked planned.
3. Add consumers to each existing build using a pinned source version and checksum, with an explicit update commit. Keep a build-local copy; never make page rendering depend on another site's availability.
4. Extend Gate's existing atlas and destination registry for the full cross-domain experience. Verify auth boundaries, mobile interaction and actual destinations before publication.
5. Inventory candidate film files and their approval/provenance, then render the 15-second animatic, 60-second trailer and full film. A treatment is not a playable master.

## Verification and limits

PR #53 was reviewed, built and merged. Its initial public scope URL returned 404. Gate `/atlas`, `/intelligence` and `/trillionaires` returned HTTP 200 from this environment; that does not certify every interactive behavior. Other direct HTTP probes returned 403, so they are not classified as broken. Firecrawl independently retrieved Lultrills' deployment receipt.

GitHub repository secrets were empty. Local Wrangler reported an expired authentication token that could not refresh. No credentials were exposed or substituted, and no production deployment is claimed.

The reverse-engineer Phase 1 script ran against the pinned PR head. Its initial scaffold was supplemented by direct source inspection; structural validation is not a full security audit. No third-party implementation was copied. Cross-site consumer integration, visual/mobile acceptance and film production remain open.
