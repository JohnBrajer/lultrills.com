# Model Collapse vs Constitutional Drift

**Version:** 1.0.0  
**Date:** 2026-07-18  
**Status:** Doctrine note · public substrate  
**Canonical Markdown (Gate):** https://trillsverse.com/doctrine/model-collapse-vs-constitutional-drift.md  
**API:** https://trillsverse.com/api/doctrine/collapse-vs-drift  
**Related:** [Sovereignty as an Invariance Constraint](https://trillsverse.com/doctrine/sovereignty-as-invariance-constraint.md) · [OMIP drift](https://trillsverse.com/api/omip/drift)

---

## One sentence

**Model collapse** is a *training-loop* failure when models retrain on their own synthetic output.  
**Constitutional drift** is a *decision-loop* residual when a runtime state wanders from a registered admissible manifold \(M\).

They are cousins. They are not the same equation.

---

## Model collapse (training recursion)

Let \(p^*\) be the true data distribution and \(p_{\theta_t}\) the model at generation \(t\). If the next training set is sampled mostly from \(p_{\theta_t}\), the fit operator \(\mathcal{T}\) (“train on samples from \(p\)”) yields:

\[
p_{\theta_{t+1}} \approx \mathcal{T}(p_{\theta_t}).
\]

Repeated self-training tends to:

- **Mode drop** — rare but real structures disappear  
- **Variance collapse** — bland, overconfident mass  
- **Error amplification** — early hallucinations re-labeled as ground truth  

This is a **distribution recursion** problem. Scaling alone does not fix it; pure synthetic closed loops make it worse.

**Honest limit:** collapse literature studies *learning dynamics*. It does not by itself define a constitutional rule over *which actions may execute*.

---

## Constitutional drift (runtime admissibility)

From the Sovereignty / OMIP working paper:

\[
\delta_t = d\!\left(S_t,\, P(S_t)\right)
\]

where \(P\) maps emergent states onto a registered manifold \(M\) of admissible states. In the public Trillsverse substrate, \(d\) is an **admissibility residual** (predicate scores vs \(\tau\)), not a claim that commercial latents are Euclidean.

- \(\delta_t \le \epsilon_{\mathrm{local}}\) → **PERSIST**  
- \(\epsilon_{\mathrm{local}} < \delta_t \le \epsilon_{\mathrm{recoverable}}\) → **CONTRACT**  
- above recoverable → **BRANCH** or **BREAK** (fail-closed)

Live registration:

- Seeds: https://trillsverse.com/eon/constitution.json (`omip.drift`)  
- Score API: `POST https://trillsverse.com/api/omip/score`  
- Dual-agent receipts: https://trillsverse.com/api/omip/receipts  

---

## Comparison table

| | Model collapse | Constitutional drift (OMIP) |
|--|----------------|----------------------------|
| **Loop** | Train → generate → retrain | Perceive → plan → score → act |
| **Object** | Data distribution \(p_\theta\) | State / plan \(S_t\) vs \(M\) |
| **Failure** | Lost diversity / false modes | Invalid action under pressure |
| **Fix class** | Data mix, filters, curation | Projection \(P\), contraction \(C\), fail-closed |
| **Metric** | FID / diversity / entropy proxies | \(\delta_t\), verdict, tool violations |
| **Layer** | Object / training | Constitutional / decision |

---

## How they couple

Without a gate, collapsed synthetic mass can become **baseline** (simulation layer treated as ground).  
With OMIP’s `simulation_layer_input_only` predicate, legacy consensus is **input**, not baseline — that is a *runtime* defense, not a training cure.

Conversely, perfect training data does not prevent **collapse regime** under coercion at action time. That is why sovereignty is stated as a **constitutional** layer, not a fine-tune.

---

## Dual-agent note

Two sovereign agents do not merge mindsets. They exchange proposals; each scores against \(M\); joint action requires dual **PERSIST** (or contracted recovery). Receipts are content-addressed logs:

`POST /api/omip/dual-exchange` → `GET /api/omip/receipts/:id`

Default pair in the Gate substrate: **Eon** × **Trilligence**.

---

## Falsifiability (scoped)

This note fails if, under matched conditions, runtime \(\delta\) metrics and dual receipts **never** correlate with improved plan integrity vs unconstrained baselines — or if “drift” is used only as synonym for “bad training data” without a registered \(M\).

---

## Honesty

Operational endpoints and seed predicates **operationalize** the distinction. They do **not** prove that commercial foundation models implement geometric projection as internal physics.
