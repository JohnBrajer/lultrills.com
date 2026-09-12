# Brajer Recursive Mechanism-Function Analysis (BRMFA)

**Author:** John Brajer  
**Original formalization:** August 28, 2026  
**Public record:** September 12, 2026  
**Version:** 0.1  
**Record type:** Research method / systems-analysis specification

## Abstract

Brajer Recursive Mechanism-Function Analysis (BRMFA) is a systems-analysis method for explaining phenomena as organized mechanisms that operate within larger mechanisms across multiple scales. It separates labels from mechanisms, local operation from system function, and observation from inference. The method proceeds through seven operations — **Identify → Bound → Decompose → Mechanize → Functionalize → Integrate → Recurse** — while requiring evidence, perspective comparison, explicit stopping conditions, and versioned interpretation.

The method was formalized by John Brajer on August 28, 2026 from a broader recursive mechanism-function principle: the same object may be analyzed as a whole at one resolution and as a component of a larger mechanism at another. BRMFA converts that principle into a repeatable analytical procedure.

## 1. The principle

> Every phenomenon can be analyzed as mechanisms structured to function inside larger mechanisms, recursively across scales.

To understand a phenomenon, identify the underlying mechanisms; analyze how each operates within a selected analyzable region; determine how the mechanisms interact; determine what function they perform within a larger mechanism; and recurse inward or outward only while doing so improves the explanation.

This is not merely a claim that systems are connected. It is a procedure for moving between:

- an event and the mechanism producing it;
- a mechanism and the mechanisms constituting it;
- local operation and higher-order function;
- participant and observer models;
- current state and intervention-relevant future states.

A mechanism is therefore both an analyzable unit and a participant in a higher-order mechanism.

## 2. The BRMFA sequence

```text
Identify → Bound → Decompose → Mechanize → Functionalize → Integrate → Recurse
```

### Identify
Define the phenomenon, question, event, system behavior, or state requiring explanation.

### Bound
Choose the **analyzable region**: the causal boundary, resolution, time window, and perspective relevant to the current question. The selected boundary is an analytical boundary, not a claim about reality's ultimate boundary.

### Decompose
Break the phenomenon into relevant components, activities, conditions, inputs, outputs, interactions, constraints, and state changes.

### Mechanize
Represent the causal processes connecting those elements. Labels such as *stress*, *conflict*, *motivation*, or *failure* are not sufficient explanations by themselves; the analysis must identify what produces the observed behavior.

### Functionalize
For each mechanism, distinguish:

1. **Intrinsic operation** — how it operates internally.
2. **Local function** — what it produces inside the selected analyzable region.
3. **System function** — what contribution it makes to the larger mechanism.
4. **Collective or emergent function** — what arises through organized interaction.
5. **Side effects and constraints** — what it restricts, consumes, destabilizes, or preserves.

### Integrate
Map horizontal relations among neighboring mechanisms and vertical relations across scales.

### Recurse
Move inward into constituent mechanisms or outward into larger mechanisms. Stop when further recursion does not improve the explanation, evidence becomes insufficient, or the question is resolved at the relevant scale.

## 3. Analytical unit

A BRMFA mechanism can be represented as:

```text
M = <components, activities, organization, boundary, interactions,
     inputs, outputs, states, conditions, functions, evidence>
```

A valid mechanism record should identify:

- distinct operation;
- analyzable boundary;
- activation and failure conditions;
- inputs and outputs or state changes;
- participation in a larger mechanism;
- relevant intervention points;
- evidence status.

BRMFA distinguishes an **aggregate** from an **organized mechanism**. Components alone do not explain the behavior of the whole; organization, coupling, sequence, timing, and feedback can materially change system behavior.

## 4. Perspective Expansion requirement

BRMFA rejects single-view explanations when the phenomenon materially depends on multiple perspectives. A serious analysis should test, where applicable:

- **Intrinsic:** how the mechanism operates internally;
- **Component:** what smaller mechanisms constitute it;
- **System:** what larger mechanism contains it and what function it performs there;
- **Participant:** how involved actors experience or act within it;
- **Observer:** what is visible, hidden, or misread from outside;
- **Temporal:** what preceded it and what it produces later;
- **Counterfactual:** what changes if a component, condition, or relation changes.

Different perspectives are not assumed to be equally valid. Each claim remains evidence-bearing and should carry an epistemic status.

This requirement connects BRMFA to John Brajer's **Perspective Expansion** method: change the model of the situation before selecting an explanation or action so that previously invisible but valid possibilities can become available.

## 5. Evidence and epistemic status

BRMFA requires claims to distinguish at least:

```text
observed | inferred | hypothesized | contested | unknown
```

A mechanism map should not silently convert narrative coherence into evidence. Relations between mechanisms should identify source, target, scale, direction, relevant time window, evidence, and confidence when those fields can be established.

Core relation types may include:

```text
constituted_by
operates_within
couples_with
depends_on
enables
constrains
produces
maintains
disrupts
transforms
reactivates
fails_under
functions_for
```

## 6. Required output contract

A complete BRMFA analysis should return:

1. **Phenomenon** — what is being explained?
2. **Analyzable region** — what boundary, scale, time window, and perspective were selected?
3. **Mechanism map** — what mechanisms were identified?
4. **Local operation** — how does each mechanism operate?
5. **System function** — what does each mechanism do inside the larger system?
6. **Interactions** — how do mechanisms enable, constrain, maintain, or disrupt one another?
7. **Perspective comparison** — how does interpretation change across relevant viewpoints?
8. **Evidence status** — what is observed, inferred, hypothesized, contested, or unknown?
9. **Leverage points** — where could intervention change the system?
10. **Trajectory effect** — what state shifts or future possibilities may follow?
11. **Archive record** — what should be preserved for continuity and later reanalysis?

## 7. Failure controls

BRMFA should reject or flag analyses that:

- treat labels as mechanisms;
- collapse multiple scales into one explanation;
- treat one participant's view as the entire system;
- confuse correlation with mechanism;
- present hypotheses as facts;
- use recursion without a stopping condition;
- produce elegant narratives without evidence;
- silently overwrite prior interpretations;
- convert analysis into consequential action without authorization.

## 8. Validation benchmark

The method is intended to be tested across materially different scales rather than validated by one attractive example. Candidate benchmark classes include:

- cognitive or behavioral stuck states;
- organizational workflows;
- software features and dependencies;
- product funnels;
- media rollouts;
- information or intelligence lifecycles;
- state-reconciliation cases;
- possibility reactivation cases.

Success is measured by whether the method:

- identifies mechanisms instead of labels;
- preserves relevant perspectives;
- distinguishes evidence from inference;
- finds useful leverage points;
- improves state-change prediction;
- preserves continuity across later updates;
- expands the available possibility space when justified by the model.

## 9. Relationship to Trillsverse systems

The August 28 source record connects BRMFA to Helios, Intelligence Injections, OMIP, Possibility Reserve, the trajectory engine, Perspective Expansion, Semantic Gravity, MyMindMine, Choseverse, Gate, and other Trillsverse research architecture.

Those connections should not be confused with implementation status.

### Established in the August 28 record

- the recursive mechanism-function principle;
- the BRMFA name and seven-step sequence;
- the analyzable-region concept;
- the mechanism representation;
- the perspective requirement;
- the evidence-status requirement;
- the output contract;
- the failure controls;
- a validation benchmark;
- a proposed mechanism ontology and relation vocabulary.

### Proposed or implementation-dependent

- BRMFA as a native Helios runtime capability;
- automatic mechanism-graph generation;
- schema-enforced Intelligence Injection packaging;
- trajectory and Possibility Reserve bridges;
- persistent machine-readable analysis archives;
- Gate or MyMindMine interfaces for BRMFA execution.

The public method therefore does **not** claim that these runtime integrations are complete.

## 10. Source trail and version history

**August 28, 2026 — source formalization.** John Brajer formalized the recursive mechanism-function principle and BRMFA in the record *Trillsverse / Helios Synthesis — Brajer Recursive Mechanism-Function Principle*, version 0.1.

**September 3, 2026 — later synthesis context.** A broader Trillsverse systems-research brief incorporated recursive mechanism analysis among several established and proposed architectures. That later synthesis is contextual evidence of reuse, not the originating source.

**September 12, 2026 — public publication package.** This public edition extracts the general research method from implementation-specific and private context. It preserves the original date, authorship, method, terminology, and distinction between established specification and proposed runtime integration.

Future revisions should receive new version numbers rather than silently replacing this record.

## Canonical citation

Brajer, John. **“Brajer Recursive Mechanism-Function Analysis (BRMFA).”** Version 0.1. Formalized August 28, 2026; public record September 12, 2026. Lultrills / Trillsverse Research.

## Short description

BRMFA is John Brajer's recursive systems-analysis method for decomposing phenomena into mechanisms, identifying their local and higher-order functions, comparing perspectives across scales, and preserving evidence status throughout the analysis.

## Reusable abstract

**BRMFA analyzes a phenomenon by selecting an analyzable region, decomposing it into organized mechanisms, explaining causal operation and system function, integrating relations across scales, and recursively moving inward or outward only while the evidence and decision value justify further analysis.**
