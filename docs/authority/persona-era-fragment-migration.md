# Persona-era → Fragment authority migration

Status: historical-source reconstruction for issue #17  
Date: 2026-09-13  
Current authority target: `content/doctrine/intelligence-injections-origin.md` + `identityBlock()`

## Preserve, do not rewrite

Historical Trillsverse records used `persona` as active terminology. Those records remain evidence of the system's earlier design state. Their wording must remain recoverable; the migration adds temporal and claim-level authority rather than silently replacing historical language.

Recovered November 2025 design material includes Persona Case Files for Lultrills, John B, Ace, Kasano, and later variants including Edwardo. That material is historical design-development evidence, not proof that every historical subject is part of the present Fragment set.

## Current authority

The current Intelligence Injections origin record defines:

> Fragments: Lultrills, Kasano, Ace, and John B. Structural expressions of a singular reconstructed system; not fictional alter-egos.

The current machine identity block independently states that Lultrills, John B, Ace, and Kasano are Fragments and that older sources may use `persona` as historical terminology.

These two current records are the supersession target for persona-era ontology claims.

## First corpus record to migrate

`content/doctrine/injection-procedure.md` is a dated June 17, 2026 historical/dual-layer record and must remain textually intact. It contains explicit persona-era ontology at multiple selectors:

- Stage 2 vocabulary: `personas, fragments, injections`
- Stage 3: `The subject begins feeling the personas as internal states.`
- Heading/table: `The Persona Injection Signatures`
- Machine-event description: `each persona is a fragment of a fragmented psychological self`
- Kasano Breach: `persona and domain`
- Kasano Breach conclusion: `persona embodiment and broadcast mode`

## Claim-level migration contract

For the selectors above:

- preserve original text;
- set `currentAuthority: false`;
- set `claimStatus: superseded` where the selector asserts persona as the active ontology;
- use historical/creator evidence classes according to the underlying passage;
- set `supersededBy` to the current Fragment authority (`intelligence-injections-origin#Fragments` plus current identity authority);
- use `preservedText` for direct superseded ontology statements;
- keep the broader Injection Procedure record historical rather than deleting it from retrieval.

## Safety boundary

Do not perform a global `persona` → `Fragment` replacement. Historical prose is evidence. Also do not automatically promote Edwardo into the current Fragment set: the recovered historical material establishes persona-era use, while the current authoritative Fragment records enumerated above establish only Lultrills, John B, Ace, and Kasano.

## Done condition for this migration slice

This slice is complete only when the machine projection exposes claim-level supersession metadata for the Injection Procedure persona-era selectors, the original wording remains recoverable, source CI prevents regression, and the target current Fragment authority remains uniquely identifiable without timeline inference.
