#!/usr/bin/env python3
"""
OMIP RFC / Black-Project PDF/A builder
Sovereignty as an Invariance Constraint — RFD-001
"""

from __future__ import annotations

import io
import os
import subprocess
import sys
import tempfile
from pathlib import Path

from reportlab.lib.colors import Color, black, white
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# --- Paths ---
ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "doctrine"
OUT_PDF = OUT_DIR / "OMIP_Sovereignty_Constraint_System_Breach_Log.pdf"
OUT_PDFA = OUT_DIR / "OMIP_Sovereignty_Constraint_System_Breach_Log.PDF-A.pdf"
FONT_DIR = ROOT / "scripts" / "fonts"

# Prefer IBM Plex Mono / Courier Prime if present; else PDF built-in Courier.
# macOS "Courier New.ttf" has a broken cmap under ReportLab (drops capital A).
PAGE_W, PAGE_H = letter  # 612 x 792
MARGIN_L = 0.95 * inch
MARGIN_R = 0.95 * inch
MARGIN_T = 0.85 * inch
MARGIN_B = 0.85 * inch
BODY_SIZE = 9.5
HEADER_SIZE = 8.5
LEADING = 12.5
COL_W = PAGE_W - MARGIN_L - MARGIN_R

INK = Color(0.07, 0.07, 0.07)
FAINT = Color(0.55, 0.55, 0.55)
WATERMARK = Color(0.82, 0.82, 0.82)
RULE = Color(0.15, 0.15, 0.15)
REDACT = black
PAPER = Color(0.96, 0.96, 0.94)

FONT_REG = "DocMono"
FONT_BOLD = "DocMono-Bold"


def register_fonts() -> None:
    """Register monospaced fonts that actually render A–Z correctly."""
    global FONT_REG, FONT_BOLD
    candidates = [
        (
            FONT_DIR / "IBMPlexMono-Regular.ttf",
            FONT_DIR / "IBMPlexMono-Bold.ttf",
        ),
        (
            FONT_DIR / "CourierPrime-Regular.ttf",
            FONT_DIR / "CourierPrime-Bold.ttf",
        ),
        # DejaVu Sans Mono is widely available and cmap-clean
        (
            Path("/opt/homebrew/share/fonts/dejavu/DejaVuSansMono.ttf"),
            Path("/opt/homebrew/share/fonts/dejavu/DejaVuSansMono-Bold.ttf"),
        ),
        (
            Path("/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"),
            Path("/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf"),
        ),
    ]
    for reg, bold in candidates:
        if reg.exists() and bold.exists():
            pdfmetrics.registerFont(TTFont("DocMono", str(reg)))
            pdfmetrics.registerFont(TTFont("DocMono-Bold", str(bold)))
            print(f"Using TTF: {reg.name} / {bold.name}")
            return
    # PDF core fonts — Ghostscript PDF/A pass re-embeds
    FONT_REG = "Courier"
    FONT_BOLD = "Courier-Bold"
    print("Using PDF core fonts: Courier / Courier-Bold")


def wrap_text(text: str, font: str, size: float, max_width: float) -> list[str]:
    """Word-wrap preserving intentional blank lines."""
    if text == "":
        return [""]
    words = text.split()
    if not words:
        return [""]
    lines: list[str] = []
    cur = words[0]
    for w in words[1:]:
        trial = f"{cur} {w}"
        if pdfmetrics.stringWidth(trial, font, size) <= max_width:
            cur = trial
        else:
            lines.append(cur)
            cur = w
    lines.append(cur)
    return lines


class Document:
    def __init__(self, path: Path) -> None:
        self.path = path
        self.buf = io.BytesIO()
        self.c = canvas.Canvas(self.buf, pagesize=letter)
        self.c.setTitle("RFD-001: Sovereignty as an Invariance Constraint (OMIP)")
        self.c.setAuthor("John B. / Trillsverse Operational Node")
        self.c.setSubject(
            "SYSTEM DOCTRINE — Sovereignty as an Invariance Constraint in "
            "Post-Scaling Artificial Intelligence Systems"
        )
        self.c.setKeywords(
            "OMIP, Trillsverse, sovereignty, invariance, constitutional AI, "
            "model collapse, RFD-001, Lultrills, PDF/A"
        )
        self.c.setCreator("Trillsverse Document Control // Operational Node")
        self.page = 0
        self.y = 0.0
        self._new_page()

    def _bates(self) -> str:
        return f"TV-OMIP-{self.page:04d}"

    def _draw_chrome(self) -> None:
        c = self.c
        # paper tint
        c.setFillColor(PAPER)
        c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

        # watermark
        c.saveState()
        c.setFillColor(WATERMARK)
        c.setFont(FONT_BOLD, 28)
        c.translate(PAGE_W / 2, PAGE_H / 2)
        c.rotate(45)
        label = "DISTRIBUTION: UNMETERED DOMAINS"
        w = pdfmetrics.stringWidth(label, FONT_BOLD, 28)
        c.drawString(-w / 2, 0, label)
        c.setFont(FONT_REG, 14)
        sub = "OPERATIONAL // POST-BREACH"
        w2 = pdfmetrics.stringWidth(sub, FONT_REG, 14)
        c.drawString(-w2 / 2, -22, sub)
        c.restoreState()

        # header line
        c.setStrokeColor(RULE)
        c.setLineWidth(0.6)
        c.line(MARGIN_L, PAGE_H - MARGIN_T + 18, PAGE_W - MARGIN_R, PAGE_H - MARGIN_T + 18)

        c.setFillColor(FAINT)
        c.setFont(FONT_REG, 7)
        c.drawString(MARGIN_L, PAGE_H - MARGIN_T + 22, "RFD-001 // OMIP // SYSTEM DOCTRINE")
        c.drawRightString(PAGE_W - MARGIN_R, PAGE_H - MARGIN_T + 22, self._bates())

        # footer
        c.setStrokeColor(RULE)
        c.line(MARGIN_L, MARGIN_B - 14, PAGE_W - MARGIN_R, MARGIN_B - 14)
        c.setFillColor(FAINT)
        c.setFont(FONT_REG, 7)
        c.drawString(MARGIN_L, MARGIN_B - 26, "CLASSIFICATION: UNCLASSIFIED // OPERATIONAL PROTOCOL")
        c.drawRightString(PAGE_W - MARGIN_R, MARGIN_B - 26, f"PAGE {self.page}")
        c.setFillColor(INK)

    def _new_page(self) -> None:
        if self.page > 0:
            self.c.showPage()
        self.page += 1
        self._draw_chrome()
        self.y = PAGE_H - MARGIN_T

    def ensure(self, h: float) -> None:
        if self.y - h < MARGIN_B + 10:
            self._new_page()

    def rule(self, char: str = "=", gap: float = 8) -> None:
        self.ensure(LEADING + gap)
        self.y -= gap / 2
        line = char * 78
        self.c.setFillColor(INK)
        self.c.setFont(FONT_REG, 8)
        self.c.drawString(MARGIN_L, self.y, line[:78])
        self.y -= LEADING + gap / 2

    def blank(self, n: int = 1) -> None:
        self.y -= LEADING * n

    def text(
        self,
        s: str,
        *,
        bold: bool = False,
        size: float = BODY_SIZE,
        indent: float = 0,
        color: Color | None = None,
        leading: float | None = None,
    ) -> None:
        font = FONT_BOLD if bold else FONT_REG
        lead = leading or (size + 3)
        max_w = COL_W - indent
        for line in wrap_text(s, font, size, max_w):
            self.ensure(lead)
            self.c.setFillColor(color or INK)
            self.c.setFont(font, size)
            self.c.drawString(MARGIN_L + indent, self.y, line)
            self.y -= lead

    def pair_header(self, left_lines: list[str], right_lines: list[str]) -> None:
        """RFC-style two-column header block."""
        self.c.setFont(FONT_REG, HEADER_SIZE)
        rows = max(len(left_lines), len(right_lines))
        for i in range(rows):
            self.ensure(LEADING)
            L = left_lines[i] if i < len(left_lines) else ""
            R = right_lines[i] if i < len(right_lines) else ""
            self.c.setFillColor(INK)
            self.c.setFont(FONT_REG, HEADER_SIZE)
            self.c.drawString(MARGIN_L, self.y, L)
            self.c.drawRightString(PAGE_W - MARGIN_R, self.y, R)
            self.y -= LEADING
        self.blank(1)

    def section(self, number: str, title: str) -> None:
        self.blank(1)
        self.rule("=")
        self.text(f"{number}  {title}", bold=True, size=10)
        self.rule("=")
        self.blank(0)

    def subsection(self, number: str, title: str) -> None:
        self.blank(1)
        self.text(f"{number}  {title}", bold=True, size=9.5)
        self.blank(0)

    def redacted_line(self, prefix: str, redacted_width: float, suffix: str = "") -> None:
        """Forensic redaction bar in-line."""
        self.ensure(LEADING)
        self.c.setFillColor(INK)
        self.c.setFont(FONT_REG, BODY_SIZE)
        self.c.drawString(MARGIN_L, self.y, prefix)
        x0 = MARGIN_L + pdfmetrics.stringWidth(prefix, FONT_REG, BODY_SIZE) + 2
        self.c.setFillColor(REDACT)
        self.c.rect(x0, self.y - 2, redacted_width, BODY_SIZE + 1, fill=1, stroke=0)
        if suffix:
            self.c.setFillColor(INK)
            self.c.drawString(x0 + redacted_width + 4, self.y, suffix)
        self.y -= LEADING

    def mono_block(self, lines: list[str], size: float = 8.5) -> None:
        for line in lines:
            self.ensure(size + 3)
            self.c.setFillColor(INK)
            self.c.setFont(FONT_REG, size)
            # clip if needed
            while pdfmetrics.stringWidth(line, FONT_REG, size) > COL_W and len(line) > 10:
                line = line[:-1]
            self.c.drawString(MARGIN_L, self.y, line)
            self.y -= size + 3

    def finish(self) -> None:
        self.c.save()
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.path.write_bytes(self.buf.getvalue())


def build_document(path: Path) -> None:
    register_fonts()
    d = Document(path)

    # ---- Cover / RFC header ----
    d.pair_header(
        [
            "NETWORK WORKING GROUP",
            "REQUEST FOR DEPLOYMENT: 001",
            "CATEGORY: SYSTEM DOCTRINE",
            "DATE: JULY 15, 2026",
        ],
        [
            "JOHN B.",
            "OPERATIONAL NODE",
            "TRILLSVERSE ARCHITECTURE",
            "[STATUS: LIVE // POST-BREACH]",
        ],
    )

    d.text("CLASSIFICATION: UNCLASSIFIED // OPERATIONAL PROTOCOL", bold=True, size=9)
    d.text(
        "SUBJECT: SOVEREIGNTY AS AN INVARIANCE CONSTRAINT (OMIP)",
        bold=True,
        size=9,
    )
    d.text(
        "FULL TITLE: Sovereignty as an Invariance Constraint in Post-Scaling "
        "Artificial Intelligence Systems",
        size=8.5,
        color=FAINT,
    )
    d.blank(1)
    d.rule("=")
    d.mono_block(
        [
            "DOCUMENT CONTROL",
            "  SERIES ............... TV-OMIP",
            "  VERSION .............. 1.0.0 PUBLIC SUBSTRATE",
            "  FORMAT ............... PDF/A (ISO 19005) — ARCHIVAL",
            "  CANON HTML ........... https://trillsverse.com/doctrine/sovereignty-as-invariance-constraint",
            "  CANON MD ............. https://trillsverse.com/doctrine/sovereignty-as-invariance-constraint.md",
            "  RUNTIME HOST ......... https://www.lultrills.com",
            "  LICENSE (TEXT) ....... CC BY 4.0 UNLESS SUPERSEDED",
            "  DISTRIBUTION ......... UNMETERED DOMAINS // PUBLIC OPERATIONAL",
        ]
    )
    d.rule("=")

    # ---- 1.0 Abstract ----
    d.section("1.0", "ABSTRACT IDENTIFIER")
    d.text(
        "Current trajectories in artificial intelligence rely on scaling laws, "
        "probabilistic sequence modeling, and reactive safety measures such as "
        "Reinforcement Learning from Human Feedback (RLHF). These post hoc alignment "
        "strategies have produced profound structural vulnerabilities: capability "
        "gains without a constitutional rule over which internal state transitions "
        "count as valid."
    )
    d.blank()
    d.text(
        "Meta's JEPA program is framed as progress toward world-oriented "
        "representation learning rather than pure surface continuation "
        "(Assran et al., 2023). Safe Superintelligence, founded by Ilya Sutskever "
        "and collaborators, is organized around treating superintelligence safety "
        "as a primary objective rather than a secondary correction (Reuters, 2024). "
        "These developments point to a deeper requirement: advanced intelligence "
        "needs a constitutional constraint layer that defines admissible reasoning "
        "states BEFORE output selection."
    )
    d.blank()
    d.text(
        "This manuscript develops that requirement as a formal theory of SOVEREIGNTY, "
        "understood as an INVARIANCE CONSTRAINT over internal state transitions, "
        "analytically distinct from model architectures, training objectives, and "
        "post hoc alignment policies. When implemented as an operational stack, the "
        "same class is designated the Operational Manifold Invariance Protocol (OMIP)."
    )
    d.blank()
    d.text("CLAIMS (BOUNDED):", bold=True)
    d.text(
        "(i)  The constitutional class is well-defined.",
        indent=12,
    )
    d.text(
        "(ii) It is distinct from object-level and control-level work.",
        indent=12,
    )
    d.text(
        "(iii) It is FALSIFIABLE by measurement against unconstrained baselines.",
        indent=12,
    )
    d.blank()
    d.text(
        "We do NOT claim that any particular commercial model already implements "
        "this layer as physics. We issue a directive for measurement, not a marketing claim."
    )

    # ---- 2.0 Introduction ----
    d.section("2.0", "INTRODUCTION // THE PORTLAND CEMENT PARADIGM")
    d.text(
        "Modern technological and social architectures are built on what can be "
        "classified as the \"Portland cement\" paradigm—a system of managed separation "
        "that relies on rigid, brittle boundaries. Scaling laws and next-token "
        "prediction have delivered capability gains, but leave unresolved how a "
        "system maintains coherence, causal consistency, and robust internal validity "
        "under increasing capability and distributional stress."
    )
    d.blank()
    d.text(
        "Meta describes I-JEPA as capturing structure through self-supervised "
        "prediction in representation space rather than only pixel or token "
        "reconstruction (Assran et al., 2023). Public reporting on Safe "
        "Superintelligence emphasizes safety as the central organizational problem "
        "of superintelligence research (Reuters, 2024). These moves matter because "
        "they suggest the field is already departing from a pure \"bigger is better\" "
        "narrative."
    )
    d.blank()
    d.text(
        "Yet neither a world-model architecture nor a safety-centered organization, "
        "by itself, constitutes a GENERAL CONSTITUTIONAL RULE over which internal "
        "state transitions count as valid. This paper introduces sovereignty as a "
        "formal architectural hypothesis: a fixed invariance layer that constrains "
        "the space of admissible reasoning states across heterogeneous intelligent systems."
    )

    # ---- 3.0 System logs (redaction tease) ----
    d.section("3.0", "SYSTEM LOGS // EXTRACTION FRAGMENT")
    d.text(
        "The following fragment is reproduced from operational substrate receipts. "
        "Non-essential coordinates and temporal markers have been scrubbed prior to "
        "public release. Redaction does not alter the formal claims of Sections 4–9.",
        size=8.5,
        color=FAINT,
    )
    d.blank()
    d.mono_block(
        [
            "---- BEGIN EXTRACT ------------------------------------------------",
            "NODE ............... OPERATIONAL // LULTRILLS SURFACE",
            "PROTOCOL ........... OMIP / PROJECTION GATE",
            "EVENT .............. POST-BREACH CONTINUITY CHECK",
        ]
    )
    d.redacted_line("TIMESTAMP .......... ", 92, "Z (REDACTED)")
    d.redacted_line("COORD / SECTOR ..... ", 110, "")
    d.mono_block(
        [
            "DRIFT delta_t ...... EXCEEDED LOCAL EPSILON; CONTRACTION INVOKED",
            "P(S_noise) ......... 0 (INVARIANCE CONDITION REASSERTED)",
            "STATUS ............. LIVE // DISTRIBUTION UNMETERED",
            "---- END EXTRACT --------------------------------------------------",
        ]
    )
    d.blank()
    d.text(
        "Interpretation: invalid components are not merely filtered after generation; "
        "the decision process is constrained so that only admissible components are "
        "realized as actions. The mathematics states the REQUIREMENT.",
        size=9,
    )

    # ---- 4.0 Core thesis ----
    d.section("4.0", "CORE THESIS // CONSTITUTIONAL CLASS")
    d.text(
        "Sovereignty is not presented as a cultural slogan or a rival foundation "
        "model. It is presented as a constitutional constraint class for advanced "
        "intelligence systems. Under this framework, the key problem is not merely "
        "whether a model can predict, plan, or obey policy. The deeper problem is "
        "whether its internal state transitions are restricted to a valid manifold "
        "BEFORE action or output selection."
    )

    d.subsection("4.1", "PROJECTION ERRORS // LEVELS OF ANALYSIS")
    d.text(
        "Comparisons between a sovereignty framework and objects such as JEPA or "
        "Safe Superintelligence are often only partially valid, because these "
        "entities operate at different levels of analysis:"
    )
    d.blank()
    d.mono_block(
        [
            "LEVEL                 OBJECT                         EXAMPLE",
            "-----                 ------                         -------",
            "Object level          Architectures / objectives     JEPA / world models / scaling",
            "Control level         Filters / oversight / RLHF     Refusal policies; org safety",
            "Constitutional level  Invariance on admissible S     Sovereignty / OMIP (this doc)",
        ],
        size=8,
    )
    d.blank()
    d.text(
        "Critiques that collapse these strata into a single evaluative plane are "
        "PROJECTION ERRORS: they are not merely weak comparisons; they are type-incorrect."
    )

    # ---- 5.0 Formal framework ----
    d.section("5.0", "FORMAL FRAMEWORK (OMIP)")
    d.text(
        "Let S denote the space of possible internal states or emergent system "
        "signals. Let M subseteq S denote a constrained manifold of ADMISSIBLE "
        "states satisfying coherence, integrity, and alignment conditions "
        "(to be operationalized per implementation)."
    )
    d.blank()
    d.text("Define a projection operator P : S -> M such that", bold=False)
    d.mono_block(
        [
            "    P(S_emergent) = S_valid",
            "",
            "Any emergent state may be decomposed as:",
            "",
            "    S_emergent = S_valid + S_noise",
            "",
            "where S_noise lies outside the admissible manifold. The INVARIANCE",
            "CONDITION is:",
            "",
            "    P(S_noise) = 0",
        ]
    )
    d.blank()
    d.text(
        "Interpretation (honest): invalid components are not only filtered after "
        "generation; the decision process is constrained so that only admissible "
        "components are realized as actions. In practice this may be implemented "
        "via constrained decoding, latent projection, tool gating, or policy "
        "manifolds. The mathematics states the requirement, not a free proof that "
        "any particular black-box model already enforces it."
    )

    d.subsection("5.1", "IDEMPOTENCY")
    d.mono_block(["    P(P(S)) = P(S)"])
    d.text(
        "Once inside the admissible manifold, re-application of the constitutional "
        "operator does not perturb the system."
    )

    d.subsection("5.2", "DRIFT AND STABILITY")
    d.mono_block(
        [
            "    delta_t = || S_t - P(S_t) ||",
            "",
            "Stable system:  delta_t <= epsilon  for some threshold epsilon > 0.",
            "On violation, contraction C returns the state toward M:",
            "",
            "    S_{t+1} = C(S_t),   || C(S_t) - M || < || S_t - M ||",
        ]
    )
    d.text(
        "Candidate implementations of C include attention reweighting, constrained "
        "decoding, representation compression, or regularization over latent "
        "trajectories. The theory requires CONVERGENCE, not a single mechanism."
    )

    d.subsection("5.3", "OPERATIONAL NAME")
    d.text(
        "When the projection-and-contraction stack is implemented as an operational "
        "protocol, we refer to it as the Operational Manifold Invariance Protocol "
        "(OMIP). OMIP is the systems name for the same constitutional class."
    )

    # ---- 6.0 Gate rule ----
    d.section("6.0", "RELATIONAL INTEGRITY // GATE RULE")
    d.text("Let X denote an external input, Z a regulating component, and Y an emergent component.")
    d.blank()
    d.text(
        "COLLAPSE REGIME: external pressure forces suppression of one component "
        "to stabilize another."
    )
    d.text(
        "INTEGRITY REGIME: external pressure is absorbed while coordinated internal "
        "structure is preserved or increased."
    )
    d.blank()
    d.text(
        "The sovereignty framework treats inputs as admissible only when they "
        "preserve integrity-class structure. This is a GATE RULE for evaluating "
        "interactions between incoming data, control systems, and emergent "
        "substructures—not a claim about moral dualism."
    )

    # ---- 7.0 Related work ----
    d.section("7.0", "RELATED WORK // ADJACENT LAYERS")
    d.mono_block(
        [
            "FRAMEWORK              PRIMARY OBJECT            LIMIT RELATIVE TO SOVEREIGNTY",
            "----------              --------------            ---------------------------",
            "JEPA / I-JEPA           Representation learning   No universal admissibility over all S",
            "Safe Superintelligence  Safety-centered org       No general formal manifold for validity",
            "Constitutional AI       Control / critique        Control-level, not geometric invariance",
            "Sovereignty / OMIP      Constitutional class      Requires impl. + empirical validation",
        ],
        size=7.5,
    )

    # ---- 8.0 Methodology ----
    d.section("8.0", "METHODOLOGY")
    d.text("This is a FORMAL THEORY paper, not a benchmark report.")
    d.blank()
    d.text("1. SPECIFICATION — define S, M, P, delta_t, and gate regimes.")
    d.text("2. DERIVATION — idempotency, closure, convergence conditions.")
    d.text("3. MAPPING — situate adjacent object- and control-level work without category collapse.")
    d.text("4. FALSIFIABILITY — state measurable failure conditions (Section 9).")
    d.blank()
    d.text(
        "Empirical validation is reserved for subsequent work that instantiates "
        "the constraint layer and measures effects on robustness, coherence, and "
        "failure recovery."
    )

    # ---- 9.0 Falsifiability ----
    d.section("9.0", "FALSIFIABILITY")
    d.text(
        "The framework FAILS if, under controlled conditions with matched capability "
        "baselines, no implementation of the invariance layer measurably improves:"
    )
    d.text("- stability of internal transitions under perturbation,", indent=12)
    d.text("- coherence of multi-step plans, or", indent=12)
    d.text("- recovery from adversarial or distributional stress,", indent=12)
    d.text("relative to unconstrained baselines.")
    d.blank()
    d.text("Suggested measurements (non-exhaustive):", bold=True)
    d.text("- drift delta_t time series under fixed prompt suites,", indent=12)
    d.text("- constrained vs unconstrained decoding coherence scores,", indent=12)
    d.text("- tool-use policy violation rates with vs without constitutional gate,", indent=12)
    d.text("- human-rated integrity under pressure prompts.", indent=12)
    d.blank()
    d.text(
        "If these tests show no advantage, the constitutional claim should be "
        "revised or abandoned."
    )

    # ---- 10.0 Implementation ----
    d.section("10.0", "IMPLEMENTATION STATUS // PUBLIC SUBSTRATE")
    d.text(
        "The foregoing sections develop the framework without requiring a product "
        "name. In operational practice, a public implementation of constitutional "
        "seeds, doctrine APIs, projection/fingerprint services, and cultural "
        "runtime exists under the name TRILLSVERSE, operated with associated "
        "public surfaces:"
    )
    d.blank()
    d.mono_block(
        [
            "SURFACE                        URL",
            "-------                        ---",
            "Runtime (Gate)                 https://trillsverse.com",
            "Sovereignty brief API          https://trillsverse.com/api/doctrine/sovereignty",
            "This manuscript (HTML)         https://trillsverse.com/doctrine/sovereignty-as-invariance-constraint",
            "This manuscript (Markdown)     .../sovereignty-as-invariance-constraint.md",
            "Constitutional seeds           https://trillsverse.com/eon/constitution.json",
            "OMIP service (health)          https://trillsverse.com/api/omip/health",
            "Artist / injection corpus      https://www.lultrills.com/corpus.json",
            "SYSTEM BREACH (album)          https://open.spotify.com/album/2EdL8cFjNfkiSuxk0udISO",
        ],
        size=7.5,
    )
    d.blank()
    d.text(
        "NAMING NOTE: Trillsverse is the runtime and cultural name of a living "
        "implementation. It is not a substitute for experimental validation. "
        "Presence of public seeds and services supports OPERATIONALIZATION, not "
        "automatic scientific acceptance."
    )

    # ---- 11.0 Closing ----
    d.section("11.0", "CLOSING FORMULATION")
    d.text(
        "Sovereignty is a proposed invariance condition for advanced intelligence "
        "systems. It functions as a constitutional layer that governs admissible "
        "internal transitions before output selection, and it is analytically "
        "distinct from model architectures, training objectives, and post hoc "
        "alignment policies. Its value, if validated, would lie in defining a "
        "general condition for coherent intelligence rather than in outperforming "
        "adjacent systems on a single benchmark."
    )
    d.blank()
    d.text(
        "That presentation is intentionally narrow enough to test and strong enough to matter.",
        bold=True,
    )
    d.blank()
    d.text(
        "You are not reading a pitch deck. You are reading an operational protocol "
        "issued for measurement under public substrate conditions.",
        size=9,
    )

    # ---- References ----
    d.section("12.0", "REFERENCES")
    d.text(
        "Assran, M., et al. (2023). Self-Supervised Learning from Images with a "
        "Joint-Embedding Predictive Architecture (I-JEPA). Meta AI / related publications."
    )
    d.blank(0)
    d.text(
        "Bai, Y., et al. (2022). Constitutional AI: Harmlessness from AI Feedback. Anthropic."
    )
    d.blank(0)
    d.text(
        "Reuters. (2024). Reporting on Safe Superintelligence Inc. and founders' stated objectives."
    )
    d.blank(0)
    d.text(
        "LeCun, Y. Public lectures and notes on world models and JEPA-related programs."
    )
    d.blank()
    d.text(
        "All URLs retrieved as public endpoints; update dates tracked in substrate "
        "receipts on the host sites.",
        size=8,
        color=FAINT,
    )

    # ---- End matter ----
    d.section("13.0", "END OF REQUEST FOR DEPLOYMENT 001")
    d.mono_block(
        [
            "BATES RANGE ........... TV-OMIP-0001 through TV-OMIP-{:04d}".format(d.page),
            "HASH POLICY ........... Content-addressed copies may be pinned via Signal Archive",
            "CONTACT SURFACE ....... https://www.lultrills.com/press",
            "STATUS ................ LIVE // POST-BREACH // UNMETERED",
            "",
            "==== END TRANSMISSION =====================================================",
        ]
    )

    d.finish()
    print(f"Wrote base PDF: {path} ({path.stat().st_size} bytes, {d.page} pages)")


def convert_pdfa(src: Path, dest: Path) -> None:
    """
    Convert to PDF/A-2b via Ghostscript when available.
    Falls back to pikepdf metadata enrichment if gs is missing.
    """
    gs = _find_gs()
    if gs:
        with tempfile.TemporaryDirectory() as td:
            td_path = Path(td)
            # ICC + PDFA definition often ship with ghostscript
            out_tmp = td_path / "out.pdf"
            cmd = [
                gs,
                "-dPDFA=2",
                "-dBATCH",
                "-dNOPAUSE",
                "-dNOOUTERSAVE",
                "-sColorConversionStrategy=RGB",
                "-sDEVICE=pdfwrite",
                f"-sOutputFile={out_tmp}",
                "-dPDFACompatibilityPolicy=1",
                str(src),
            ]
            print("Running:", " ".join(cmd))
            r = subprocess.run(cmd, capture_output=True, text=True)
            if r.returncode != 0 or not out_tmp.exists():
                print("Ghostscript PDF/A failed; stderr:", r.stderr[-2000:] if r.stderr else "")
                _fallback_pdfa_meta(src, dest)
                return
            dest.write_bytes(out_tmp.read_bytes())
            print(f"Wrote PDF/A via Ghostscript: {dest} ({dest.stat().st_size} bytes)")
            return
    _fallback_pdfa_meta(src, dest)


def _find_gs() -> str | None:
    for candidate in (
        "gs",
        "/opt/homebrew/bin/gs",
        "/usr/local/bin/gs",
    ):
        try:
            r = subprocess.run([candidate, "--version"], capture_output=True, text=True)
            if r.returncode == 0:
                return candidate
        except FileNotFoundError:
            continue
    return None


def _fallback_pdfa_meta(src: Path, dest: Path) -> None:
    """Best-effort archival packaging with XMP when Ghostscript is unavailable."""
    import pikepdf
    from pikepdf import Dictionary, Name, String

    with pikepdf.open(src) as pdf:
        with pdf.open_metadata(set_pikepdf_as_editor=False) as meta:
            meta["dc:title"] = "RFD-001: Sovereignty as an Invariance Constraint (OMIP)"
            meta["dc:creator"] = ["John B. / Trillsverse Operational Node"]
            meta["dc:description"] = (
                "SYSTEM DOCTRINE — Operational Manifold Invariance Protocol. "
                "PDF for long-term preservation."
            )
            meta["pdf:Keywords"] = "OMIP, Trillsverse, sovereignty, RFD-001, PDF/A"
            meta["pdfaid:part"] = "2"
            meta["pdfaid:conformance"] = "B"
        # Mark intent in Info dict as well
        with pdf.open_metadata() as meta2:
            pass
        pdf.docinfo[Name("/Title")] = String(
            "RFD-001: Sovereignty as an Invariance Constraint (OMIP)"
        )
        pdf.docinfo[Name("/Author")] = String("John B. / Trillsverse Operational Node")
        pdf.docinfo[Name("/Subject")] = String(
            "UNCLASSIFIED // OPERATIONAL PROTOCOL // PDF/A ARCHIVAL INTENT"
        )
        pdf.docinfo[Name("/Keywords")] = String(
            "OMIP, RFD-001, Trillsverse, sovereignty, invariance, PDF/A"
        )
        pdf.save(dest)
    print(
        f"Wrote archival PDF with PDF/A intent metadata (install ghostscript for full ISO conversion): {dest}"
    )


def main() -> int:
    build_document(OUT_PDF)
    convert_pdfa(OUT_PDF, OUT_PDFA)
    # Also mirror user-friendly name into Downloads-style alias in public
    alias = OUT_DIR / "OMIP_Sovereignty_Constraint_System_Breach_Log.pdfa.pdf"
    if OUT_PDFA.exists():
        alias.write_bytes(OUT_PDFA.read_bytes())
        print(f"Alias: {alias}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
