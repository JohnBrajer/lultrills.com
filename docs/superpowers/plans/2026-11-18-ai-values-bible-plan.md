# AI Valuation Bible Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a versioned AI-valuation chapter to the existing Trillsverse Bible, and improve human and machine navigation without exposing private records.

**Architecture:** A typed research chapter and expanded Bible authority object feed existing public projections. The Bible page adds a volume directory and expanded Volume III section, while Markdown, sitemap, and discovery links expose the same source.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS, Vitest.

**Spec:** `docs/superpowers/specs/2026-11-18-ai-values-bible-design.md`

## Global Constraints

- Preserve the existing Bible schema and prior October 1 authority record, without silently rewriting historical sources.
- Research claims must cite primary sources and distinguish proposed Trillsverse principles from published evidence.
- No private Bible material or credentials enter public source.
- Keep the existing visual language and semantic navigation; avoid new dependencies.

## Review Focus

- Existing machine consumers expecting old Bible JSON keys: existing keys remain intact and present.
- Missing historical chapters: volume index labels them unpopulated, not invented.
- Empty search or direct anchor navigation: content is always visible and anchor-accessible without JavaScript.
- Research citations: research source links are full URLs, and provenance dates are explicit.
- Download content type: Markdown route returns UTF-8 plain Markdown with public caching.

---

### Task 1: Versioned Research Data

**Files:**
- Create: `lib/aiValuation.ts`
- Modify: `lib/trillsverseBible.ts`
- Test: `lib/trillsverseBible.test.ts`

**Interfaces:**
- Produces: `AI_VALUATION_CHAPTER` and `TRILLSVERSE_BIBLE.researchChapters`, `volumeEntries`, `authorityHistory`.
- Consumed by: Bible human page, JSON endpoint, Markdown projection.

- [ ] Write a failing Vitest contract for a Volume III chapter with `research-agenda` status, source dates, twelve indexed volumes, intact prior authority, and Markdown inclusion.
- [ ] Run `npx vitest run lib/trillsverseBible.test.ts` and observe expected missing-feature failures.
- [ ] Implement `AI_VALUATION_CHAPTER` and append its projections into `TRILLSVERSE_BIBLE` and `TRILLSVERSE_BIBLE_TEXT`.
- [ ] Re-run `npx vitest run lib/trillsverseBible.test.ts`, expecting all tests to pass.
- [ ] Commit `feat(bible): add AI valuation research chapter`.

### Task 2: Human and Machine Reading Surfaces

**Files:**
- Modify: `app/trillsverse-bible/page.tsx`
- Create: `app/trillsverse-bible.md/route.ts`
- Modify: `app/llms.txt/route.ts`, `app/sitemap.ts`
- Test: `lib/trillsverseBibleRoutes.test.ts`

**Interfaces:**
- Consumes: `TRILLSVERSE_BIBLE`, `TRILLSVERSE_BIBLE_TEXT`, `AI_VALUATION_CHAPTER` from Task 1.
- Produces: accessible volume anchors, expanded Volume III, plain Markdown route, discovery links.

- [ ] Write failing route tests for Markdown content type, archive metadata, source links, and readable canonical article anchor markup.
- [ ] Run `npx vitest run lib/trillsverseBibleRoutes.test.ts`, expecting missing route/anchor failures.
- [ ] Implement server-rendered volume directory and article, Markdown route, sitemap and discovery links without new dependencies.
- [ ] Re-run route tests and `npx vitest run lib/trillsverseBible.test.ts`, expecting all tests to pass.
- [ ] Commit `feat(bible): expose accessible volume navigation and Markdown`.

### Task 3: Repository Verification

**Files:** No new production files expected.

**Interfaces:** Verifies Tasks 1 and 2 together.

- [ ] Run `npm run prebuild`, expect exit 0.
- [ ] Run `npm run build`, expect exit 0; report any unrelated baseline failures separately.
- [ ] Run a route smoke check against the Next.js server when available; verify JSON and Markdown response headers.
- [ ] Inspect diff, untracked files, and historical provenance claims.
- [ ] Commit any necessary test-backed corrections, then prepare the branch for review/publication.
