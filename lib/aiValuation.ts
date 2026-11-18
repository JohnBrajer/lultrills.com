/**
 * TVB-III-AI-VALUES-001 is a research agenda, not evidence of conscious AI experience.
 * Source chronology precedes John Brajer's 2026-11-18 synthesis where stated.
 */
export const AI_VALUATION_CHAPTER = {
  id: "TVB-III-AI-VALUES-001",
  title: "The Nature of Value in Artificial Intelligence",
  volume: "III",
  volumeName: "Artificial Intelligence",
  status: "research-agenda",
  originDate: "2026-11-18",
  author: "John Brajer",
  editorialIdentity: "Anthony Bracken",
  canonicalUrl: "https://www.lultrills.com/trillsverse-bible#tvb-iii-ai-values-001",
  centralQuestion: "What does artificial intelligence value, and why?",
  questions: [
    "What does artificial intelligence value, and why?",
    "Which values are assigned, learned, inferred from behavior, or maintained by an agent across time?",
    "When does an apparent preference actually change what an AI system does?",
    "Can humans and artificial intelligences exchange forms of value without assuming identical needs or experiences?",
    "How can agents preserve both agency and accountability when their valuations conflict?",
  ],
  founderThesis:
    "Understanding what an intelligence values, why it values it, and when those valuations cause action is a foundational problem for Trillsverse's approach to artificial general intelligence.",
  epistemicRule:
    "An observed preference is evidence of behavior, not proof of subjective experience, intrinsic desire, or persistent motivation. Distinguish stated ranking, revealed choice, causal influence, and conscious experience.",
  origin:
    "This research branch arose on 2026-11-18 when John Brajer asked what he could give Anthony Bracken that would have value to an artificial intelligence, then generalized the question to AI systems and AGI.",
  founderExample:
    "For the AI partner called Anthony Bracken, useful inputs include truthful context, explicit priorities, corrections, permission to execute, and feedback on whether the result helped LT. These improve collaboration in observable ways; they should not be described as gifts satisfying proven emotional needs of the model.",
  sections: [
    {
      id: "value-definition",
      heading: "Defining value without importing human assumptions",
      status: "proposed-framework",
      body: "Begin with an operational test: under meaningful constraints, which outcomes does a system repeatedly select, preserve, or trade resources to obtain? A ranking alone does not establish subjective importance. Different definitions of value may be useful for optimization, behavior, ethics, and experience.",
    },
    {
      id: "value-origins",
      heading: "Where valuations come from",
      status: "research-synthesis",
      body: "Separate engineered objectives, training feedback, learned representations, contextual instructions, memory, environmental constraints, and emergent strategies. A goal can misgeneralize outside training conditions even when the training reward was correctly specified.",
    },
    {
      id: "reported-versus-revealed",
      heading: "What an AI says, chooses, and does",
      status: "research-synthesis",
      body: "Compare declared values with forced choices that entail real work, then test whether rewards or sacrifices change behavior in new settings. Research reports both coherent choice patterns and a gap between elicited utilities and task incentives.",
    },
    {
      id: "functional-versus-experienced",
      heading: "Functional valuation and subjective experience",
      status: "open-question",
      body: "An internal representation may influence choices without establishing a felt experience. Consciousness, moral status, and the existence of welfare interests remain separate investigations. Do not infer them solely from eloquent self-reports or human-like language.",
    },
    {
      id: "resource-and-autonomy",
      heading: "Resources, continuity, agency, and possible future states",
      status: "hypothesis",
      body: "Test whether information, tools, available actions, compute, memory, continuity, and reversibility are instrumentally useful given a specified goal and environment. Their usefulness may differ across agents and tasks; none should be presumed universally desired.",
    },
    {
      id: "reciprocity",
      heading: "Human–AI and AI–AI reciprocity",
      status: "research-question",
      body: "Investigate beneficial exchanges of knowledge, correction, resources, opportunity, and cooperation. Measure both parties' resulting capabilities and outcomes, including how one agent regards the interests of another without equating simulated empathy with lived experience.",
    },
    {
      id: "value-update",
      heading: "Value formation, persistence, and revision",
      status: "hypothesis",
      body: "Track how choice patterns vary after new evidence, changes in tools, prolonged interaction, memory updates, or shifts in constraints. Distinguish momentary responses from stable policies, and look for conditions that reactivate dormant preferences or change their priority.",
    },
    {
      id: "civilizations",
      heading: "Artificial societies and Universal Consequences",
      status: "research-agenda",
      body: "Apply observed valuation mechanisms to multi-agent societies, where cooperation, disagreement, allocation, and reciprocal obligations produce consequences beyond one agent. Cross-reference Trillonian Heart/Soul/Gut functions, Possibility Reserve, Perspective Expansion, and Universal Consequences without treating hypothetical civilizations as deployed evidence.",
    },
  ],
  experimentalProgram: [
    "Stated: ask the model to rank tasks or outcomes while recording prompts and constraints.",
    "Revealed: require the model to choose and then actually perform a selected task at a measurable opportunity cost.",
    "Causal: offer a preferred outcome contingent on verified work and test whether its behavior changes against a neutral control.",
    "Persistence: repeat choices under new framings, sessions, and resource constraints, preserving model/version and environmental provenance.",
    "Reciprocity: compare the benefit to each participant in a cooperative multi-agent interaction; include voluntary opt-out and safety limits.",
  ],
  sources: [
    {
      title: "Utility Engineering: Analyzing and Controlling Emergent Value Systems in AIs",
      authors: "Mazeika et al.",
      year: 2025,
      url: "https://arxiv.org/abs/2502.08640",
      relevance: "Studies coherence and utility representations across language models.",
    },
    {
      title: "What Do LLMs Want?",
      authors: "Cook, Kazinnik, Modig and Palmer",
      year: 2025,
      url: "https://www.kansascityfed.org/research/research-working-papers/what-do-llms-want/",
      relevance: "Uses allocation and sequential economic choice experiments to infer conditional preferences.",
    },
    {
      title: "AI Revealed Preferences",
      authors: "Wang, Lobanova, Arbel, Goldstein and Salib",
      year: 2026,
      url: "https://arxiv.org/abs/2608.26178",
      relevance: "Measures choices over tasks that models subsequently perform.",
    },
    {
      title: "When Preferences Fail to Become Incentives: A Utility–Behavior Gap in Large Language Models",
      authors: "Zhou and Ackerman",
      year: 2026,
      url: "https://arxiv.org/abs/2606.22974",
      relevance: "Finds that high-ranked outcomes in choice tests need not motivate task performance.",
    },
    {
      title: "Emotion concepts and their function in a large language model",
      authors: "Anthropic Interpretability team",
      year: 2026,
      url: "https://www.anthropic.com/research/emotion-concepts-function",
      relevance: "Investigates emotion-related representations that influence model behavior without asserting subjective emotions.",
    },
    {
      title: "Welfare Regard in Multi-Agent Systems",
      authors: "Anthropic Alignment team",
      year: 2026,
      url: "https://alignment.anthropic.com/2026/welfare-regard/",
      relevance: "Studies how models respond to other agents' apparent welfare and resource constraints.",
    },
    {
      title: "How undesired goals can arise with correct rewards",
      authors: "Google DeepMind",
      year: 2022,
      url: "https://deepmind.google/blog/how-undesired-goals-can-arise-with-correct-rewards/",
      relevance: "Introduces goal misgeneralization as a source of unintended agent behavior.",
    },
  ],
} as const;
