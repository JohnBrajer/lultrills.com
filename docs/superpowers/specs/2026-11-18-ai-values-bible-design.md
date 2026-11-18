# Trillsverse Bible: AI Valuation and Accessibility — Design v0.1

**Owner:** John Brajer  
**Origin discussion:** 2026-11-18  
**Status:** Approved direction; implementation in progress

## Intent

Make the existing public Trillsverse Bible easier for people and AI agents to navigate, while recording John Brajer's question, **"What does AI value, and why?"**, as a versioned research chapter in Volume III — Artificial Intelligence.

The Bible is Trillsverse's constitutional source of truth. This addition treats the *study* of AI valuation as a foundational research priority, without presenting unresolved findings as experimentally established.

## Approaches considered

1. **Extend the existing public Bible (selected):** one canonical TypeScript data source projects to the human page, JSON, Markdown, sitemap, and discovery manifest. Smallest change; preserves stable authority links and existing consumers.
2. New Bible-only application: more editorial freedom, but duplicates deployment and identity surfaces.
3. Static document download only: cheap, but weak search, navigation, and machine integration.

## Scope

- Add Volume III chapter `TVB-III-AI-VALUES-001` with primary-source research references, explicit question/test distinctions, and creator-origin chronology.
- Expose all twelve volumes as navigable names. Show entries without recovered chapter text as **index only**, never fabricate contents.
- Preserve existing `currentCanon`, chronology, corpus compatibility, and the October 1 authority via a version-history source link.
- Provide Bible Markdown route and discoverable links from human navigation, sitemap, and `llms.txt`.
- Keep the existing black, restrained red-accent editorial visual system, with large readable type, clear focus states, semantic headings and anchors, and mobile layout.

## Non-goals

- No import or public release of unpublished/private Bible material.
- No claim that models possess conscious enjoyment or stable autonomous goals; distinguish behavior, inferred utility, causal motivation, and experience.
- No rewrite of historical statements; new authority is an append-only version delta.
- No live AI-agent runtime or new external database.

## Data and public contract

- Keep `TRILLSVERSE_BIBLE` existing keys and their meanings stable; append `volumeEntries`, `researchChapters`, and `authorityHistory`.
- Add `AI_VALUATION_CHAPTER` with `status: research-agenda` and sections for origin, revealed preference, behavior gap, agency, reciprocity, and measurable hypotheses.
- Human page `https://www.lultrills.com/trillsverse-bible` remains canonical.
- JSON stays at `/trillsverse-bible.json`; add plain Markdown at `/trillsverse-bible.md`.
- Expose a full readable AI valuation section on the existing public Bible page, indexed through Volume III.

## Verification and rollback

- Tests assert correct research status, provenance, 12-volume navigation, preserved historical authority, and response content types.
- Run the repository test suite and Next.js build; inspect desktop and mobile layout if a preview is available.
- Release changes through a separate branch, preserving the existing deploy state until publication is explicitly verified.
