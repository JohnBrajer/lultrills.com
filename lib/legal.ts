/** Shared legal constants for Trillsverse LLC public policies. */

export const LEGAL = {
  entity: "Trillsverse LLC",
  contactEmail: "Contact@Trillsverse.com",
  contactMailto: "mailto:Contact@Trillsverse.com",
  gateUrl: "https://trillsverse.com",
  publicUrl: "https://www.lultrills.com",
  effectiveDate: "July 13, 2026",
  governingLaw: "the State of California, United States",
  gaId: "G-BRZ0SGVYTJ",
  cookieKey: "trillsverse_cookie_consent",
} as const;

export type CookieConsentValue = "accepted" | "essential";

export function getCookieConsent(): CookieConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = localStorage.getItem(LEGAL.cookieKey);
    if (v === "accepted" || v === "essential") return v;
  } catch {
    /* private mode */
  }
  return null;
}

export function setCookieConsent(value: CookieConsentValue) {
  try {
    localStorage.setItem(LEGAL.cookieKey, value);
  } catch {
    /* private mode */
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("trillsverse-cookie-consent", { detail: value }));
  }
}

/** Load Google Analytics only after full cookie acceptance. */
export function loadAnalyticsIfAllowed() {
  if (typeof window === "undefined") return;
  if (getCookieConsent() !== "accepted") return;
  if (document.getElementById("ga-gtag")) return;

  const w = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag(...args: unknown[]) {
    w.dataLayer!.push(args);
  };
  w.gtag("js", new Date());
  w.gtag("config", LEGAL.gaId);

  const s = document.createElement("script");
  s.id = "ga-gtag";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${LEGAL.gaId}`;
  document.head.appendChild(s);
}

export type LegalDocId = "terms" | "privacy" | "cookies" | "disclaimer" | "copyright";

export interface LegalDoc {
  id: LegalDocId;
  path: string;
  title: string;
  classification: string;
  sections: { heading: string; body: string[] }[];
}

export const LEGAL_DOCS: LegalDoc[] = [
  {
    id: "terms",
    path: "/terms",
    title: "Terms of Service",
    classification: "LEGAL-01",
    sections: [
      {
        heading: "Agreement",
        body: [
          `These Terms of Service ("Terms") govern your access to and use of websites, apps, and experiences operated by ${LEGAL.entity} ("we," "us," "our"), including ${LEGAL.gateUrl} and ${LEGAL.publicUrl} (the "Services").`,
          "By accessing or using the Services, you agree to these Terms. If you do not agree, do not use the Services.",
        ],
      },
      {
        heading: "Who we are",
        body: [
          `The Services are operated by ${LEGAL.entity}. Contact: ${LEGAL.contactEmail}.`,
        ],
      },
      {
        heading: "Eligibility",
        body: [
          "You must be able to form a binding contract under applicable law. If you are under 13, you may not use the Services. If you are under 18, you may use the Services only with a parent or guardian's permission where required.",
        ],
      },
      {
        heading: "Accounts and access",
        body: [
          "Some features may require creating a profile or session. You are responsible for activity under your access credentials and for keeping them secure. We may suspend or terminate access for abuse, fraud, security risk, or violation of these Terms.",
        ],
      },
      {
        heading: "Creative content and interactive experiences",
        body: [
          "The Services include music, lore, fiction, interactive characters, games, and world-building experiences. All of that is entertainment and creative expression. Interactive characters and story systems are fictional. They are not real people, licensed professionals, or substitutes for human judgment.",
          "You agree not to treat any output from the Services as medical, mental health, legal, financial, or other professional advice.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "You agree not to: break the law; harass, threaten, or harm others; scrape or attack the Services in a way that degrades them; reverse engineer systems beyond what law allows; upload malware; impersonate us or others; or use the Services to build competing products from our confidential materials.",
        ],
      },
      {
        heading: "Intellectual property",
        body: [
          `Music, names, characters, lore, trademarks, code, design, and other materials in the Services are owned by ${LEGAL.entity} or our licensors. You get a limited, revocable, non-exclusive license to use the Services for personal, non-commercial enjoyment unless we say otherwise in writing.`,
          "You may not copy, redistribute, or commercially exploit our content without permission, except for fair use or other rights the law already gives you.",
        ],
      },
      {
        heading: "User content",
        body: [
          "If you submit text, signals, or other content, you keep ownership of what you created, but you grant us a worldwide, royalty-free license to host, display, and operate that content as needed to run the Services. You represent that you have the rights to submit it and that it does not violate others' rights.",
        ],
      },
      {
        heading: "Third-party services",
        body: [
          "The Services may link to or integrate third parties (for example music platforms, hosting, or analytics). Their terms and privacy practices apply to those services. We are not responsible for third-party sites or outages.",
        ],
      },
      {
        heading: "Disclaimers",
        body: [
          'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT, TO THE MAXIMUM EXTENT PERMITTED BY LAW.',
          "We do not warrant that the Services will be uninterrupted, secure, or error-free.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          `TO THE MAXIMUM EXTENT PERMITTED BY LAW, ${LEGAL.entity.toUpperCase()} AND ITS OFFICERS, MEMBERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE SERVICES.`,
          "OUR TOTAL LIABILITY FOR ANY CLAIM RELATED TO THE SERVICES WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US FOR THE SERVICES IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US $100).",
        ],
      },
      {
        heading: "Indemnity",
        body: [
          `You agree to defend and indemnify ${LEGAL.entity} against claims arising from your misuse of the Services, your content, or your violation of these Terms or applicable law.`,
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may update these Terms. The Effective Date at the top will change when we do. Continued use after changes means you accept the updated Terms.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          `These Terms are governed by the laws of ${LEGAL.governingLaw}, without regard to conflict-of-law rules. Courts located in California will have exclusive jurisdiction, except where applicable law requires otherwise.`,
        ],
      },
      {
        heading: "Contact",
        body: [`Questions about these Terms: ${LEGAL.contactEmail}.`],
      },
    ],
  },
  {
    id: "privacy",
    path: "/privacy",
    title: "Privacy Policy",
    classification: "LEGAL-02",
    sections: [
      {
        heading: "Overview",
        body: [
          `This Privacy Policy explains how ${LEGAL.entity} collects, uses, and shares information when you use ${LEGAL.gateUrl}, ${LEGAL.publicUrl}, and related Services.`,
          `Contact for privacy questions: ${LEGAL.contactEmail}.`,
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "Account and profile data you provide (for example display name, preferences, quiz answers, birth data if you supply it for placement features).",
          "Technical data such as IP address, browser type, device type, pages viewed, and approximate location derived from IP.",
          "Session and cookie data needed to keep you signed in and remember settings.",
          "Communications you send us (for example email to our contact address).",
          "Analytics data if you accept analytics cookies (see Cookies Policy).",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "To operate, secure, and improve the Services.",
          "To create and maintain your profile, progress, and in-world experiences.",
          "To understand aggregate traffic and performance when analytics are enabled.",
          "To respond to requests and enforce our Terms.",
          "To comply with law and protect rights, safety, and property.",
        ],
      },
      {
        heading: "Sharing",
        body: [
          "We do not sell your personal information.",
          "We may share data with service providers who help us host, secure, or analyze the Services (for example cloud hosting and Google Analytics if you accept analytics cookies). They may only process data for us under appropriate terms.",
          "We may disclose information if required by law, legal process, or to protect rights and safety.",
          "If we reorganize or transfer the business, information may transfer as part of that transaction under continued protection commitments where required.",
        ],
      },
      {
        heading: "Cookies and similar tech",
        body: [
          "We use cookies and local storage for essential operation and, if you accept, analytics. See our Cookies Policy for details and choices.",
        ],
      },
      {
        heading: "Retention",
        body: [
          "We keep information as long as needed to provide the Services, comply with law, resolve disputes, and enforce agreements. You may request deletion where applicable by emailing us.",
        ],
      },
      {
        heading: "Security",
        body: [
          "We use reasonable technical and organizational measures to protect information. No method of transmission or storage is 100% secure.",
        ],
      },
      {
        heading: "Children",
        body: [
          "The Services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have, contact us and we will delete it.",
        ],
      },
      {
        heading: "Your choices",
        body: [
          "You can accept or limit cookies via our cookie banner and browser settings.",
          "You can request access, correction, or deletion of personal information we hold about you by emailing us, subject to legal exceptions.",
          "Depending on where you live, you may have additional rights under local law (for example CCPA for California residents).",
        ],
      },
      {
        heading: "International users",
        body: [
          "We may process information in the United States and other countries where our providers operate. By using the Services you understand that information may be transferred to those locations.",
        ],
      },
      {
        heading: "Changes",
        body: [
          "We may update this Policy. We will revise the Effective Date when we do. Continued use means you accept the updated Policy.",
        ],
      },
      {
        heading: "Contact",
        body: [`Privacy contact: ${LEGAL.contactEmail}.`],
      },
    ],
  },
  {
    id: "cookies",
    path: "/cookies",
    title: "Cookies Policy",
    classification: "LEGAL-03",
    sections: [
      {
        heading: "What this covers",
        body: [
          `This Cookies Policy explains how ${LEGAL.entity} uses cookies and similar technologies on ${LEGAL.gateUrl} and ${LEGAL.publicUrl}.`,
          "By clicking Accept cookies on our banner, you consent to the categories described below. You can choose Essential only to limit non-essential cookies.",
        ],
      },
      {
        heading: "What cookies are",
        body: [
          "Cookies are small text files stored on your device. We also use local storage and similar tools for the same purposes.",
        ],
      },
      {
        heading: "Essential cookies",
        body: [
          "Required for the Services to work: session and authentication, security, load balancing, remembering your cookie choice, and basic site function. These do not require marketing consent, but the site may not work correctly if you block them entirely in your browser.",
        ],
      },
      {
        heading: "Analytics cookies",
        body: [
          `If you accept cookies, we may use Google Analytics (measurement ID ${LEGAL.gaId}) to understand traffic, page views, and performance. Google may process data under its own terms. We load analytics only after you accept.`,
        ],
      },
      {
        heading: "Your choices",
        body: [
          "Use Accept cookies to allow essential + analytics cookies.",
          "Use Essential only to allow only what is needed to run the site (no analytics).",
          "You can clear site data in your browser to reset the choice and see the banner again.",
          "Browser settings can block cookies; some features may break.",
        ],
      },
      {
        heading: "Contact",
        body: [`Questions: ${LEGAL.contactEmail}.`],
      },
    ],
  },
  {
    id: "disclaimer",
    path: "/disclaimer",
    title: "Disclaimer",
    classification: "LEGAL-04",
    sections: [
      {
        heading: "Entertainment only",
        body: [
          `Content on Services operated by ${LEGAL.entity} is for entertainment, art, music, and creative world-building. Lore, characters, interactive systems, and story experiences are fictional or artistic. They are not statements of scientific, medical, or professional fact unless we explicitly say so in a non-fiction context (for example a press fact sheet).`,
        ],
      },
      {
        heading: "Not medical advice",
        body: [
          "NOTHING ON THE SERVICES IS MEDICAL ADVICE, DIAGNOSIS, TREATMENT, OR MENTAL HEALTH CARE.",
          "Nothing here is a substitute for advice from a licensed physician, therapist, psychologist, psychiatrist, or other qualified professional.",
          "Do not ignore professional medical advice or delay seeking it because of something you read, heard, or experienced in the Services.",
          "If you are in crisis or think you may have a medical emergency, call emergency services or a crisis line in your area immediately.",
        ],
      },
      {
        heading: "Not other professional advice",
        body: [
          "Nothing on the Services is legal, financial, tax, investment, or other professional advice. Make decisions with qualified professionals and your own judgment.",
        ],
      },
      {
        heading: "Interactive characters and systems",
        body: [
          "Interactive characters, companions, guides, and story systems are creative entertainment. They do not provide therapy, counseling, medical care, or professional services. Do not rely on them for health, safety, legal, or financial decisions.",
        ],
      },
      {
        heading: "No warranties",
        body: [
          'Content is provided "as is." We make no warranties about accuracy, completeness, or fitness for any purpose beyond entertainment.',
        ],
      },
      {
        heading: "Contact",
        body: [`${LEGAL.contactEmail}`],
      },
    ],
  },
  {
    id: "copyright",
    path: "/copyright",
    title: "Copyright & DMCA",
    classification: "LEGAL-05",
    sections: [
      {
        heading: "Ownership",
        body: [
          `Unless otherwise noted, music, text, graphics, characters, lore, code, and trademarks on the Services are owned by ${LEGAL.entity} or used under license. All rights reserved.`,
        ],
      },
      {
        heading: "Reporting infringement",
        body: [
          "If you believe material on the Services infringes your copyright, send a notice that includes:",
          "1. Your physical or electronic signature.",
          "2. Identification of the copyrighted work claimed to be infringed.",
          "3. Identification of the material that is claimed to be infringing and information reasonably sufficient to locate it (URL preferred).",
          "4. Your name, address, telephone number, and email.",
          "5. A statement that you have a good-faith belief that use of the material is not authorized by the copyright owner, its agent, or the law.",
          '6. A statement that the information in the notice is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner.',
        ],
      },
      {
        heading: "Where to send notices",
        body: [
          `Email: ${LEGAL.contactEmail}`,
          `Subject line: DMCA / Copyright Notice`,
          `Operator: ${LEGAL.entity}`,
        ],
      },
      {
        heading: "Counter-notice",
        body: [
          "If your material was removed and you believe it was a mistake or misidentification, you may send a counter-notice to the same address with the information required under applicable law (including the DMCA if you are in the United States).",
        ],
      },
      {
        heading: "Repeat infringement",
        body: [
          "We may terminate access for users who repeatedly infringe intellectual property rights.",
        ],
      },
    ],
  },
];

export function getLegalDoc(id: LegalDocId): LegalDoc {
  const doc = LEGAL_DOCS.find((d) => d.id === id);
  if (!doc) throw new Error(`Unknown legal doc: ${id}`);
  return doc;
}
