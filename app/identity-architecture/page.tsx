import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

const SITE = "https://www.lultrills.com";
const CANONICAL = `${SITE}/identity-architecture`;

export const metadata: Metadata = {
  title: "Identity Architecture | John Brajer · John B · John Braj · Lultrills",
  description:
    "Canonical public identity map separating John Brajer, John B, John Braj, Lultrills, Ace Brajer, and Kasano across Trillsverse.",
  alternates: { canonical: CANONICAL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Trillsverse Identity Architecture",
    description:
      "John Brajer builds authority. John B creates art. John Braj attracts attention. Lultrills is a Fragment and public music entity.",
    url: CANONICAL,
    type: "article",
  },
};

const identities = [
  {
    id: "john-brajer",
    name: "John Brajer",
    role: "Founder · Architect · Professional identity",
    body: "Capital, authority, ownership, grants, fellowships, institutional access, credentials, speaking, AI contracts, investors, and the architecture of the connected systems.",
  },
  {
    id: "john-b",
    name: "John B",
    role: "Music · Artist identity",
    body: "Catalog, songs, performance, emotion, music IP, and the artist-facing body of work. SYSTEM BREACH is a John B album released under the existing Lultrills platform credit.",
  },
  {
    id: "john-braj",
    name: "John Braj",
    role: "Personality · Media · Culture identity",
    body: "Attention, relationships, social capital, interviews, YouTube, vlogs, livestreams, podcasts, commentary, lifestyle, storytelling, and the human-facing distribution layer that can route attention into the wider system.",
  },
  {
    id: "lultrills",
    name: "Lultrills",
    role: "Fragment · Public music entity",
    body: "A distinct Fragment and public music entity inside the John B / Trillsverse architecture. Existing streaming and store credits under Lultrills are platform metadata and remain valid without making Lultrills synonymous with John B or John Brajer.",
  },
  {
    id: "ace-brajer",
    name: "Ace Brajer",
    role: "Currently known Fragment",
    body: "A distinct currently known Fragment within the wider internal architecture.",
  },
  {
    id: "kasano",
    name: "Kasano",
    role: "Currently known Fragment",
    body: "A distinct currently known Fragment within the wider internal architecture.",
  },
];

export default function IdentityArchitecturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Trillsverse Identity Architecture",
    url: CANONICAL,
    itemListElement: identities.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": item.id.startsWith("john-") ? "Person" : "DefinedTerm",
        "@id": `${CANONICAL}#${item.id}`,
        name: item.name,
        description: `${item.role}. ${item.body}`,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-black text-zinc-200">
      <header className="border-b border-white/10 px-5 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-red-400 mb-4">
            Current authority · 2026-09-20
          </p>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight text-white leading-[0.96]">
            Identity Architecture
          </h1>
          <p className="mt-6 max-w-3xl text-zinc-400 text-lg leading-relaxed">
            One human can operate through multiple public identities and internal
            Fragments without those identities becoming interchangeable.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 font-mono text-[10px] tracking-widest uppercase">
            <a href="/identity-architecture.json" className="border border-white/20 px-3 py-2">
              Machine JSON
            </a>
            <Link href="/system-breach" className="border border-white/20 px-3 py-2">
              SYSTEM BREACH
            </Link>
            <a href="https://trillsverse.com" className="border border-white/20 px-3 py-2">
              Gate
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-12">
        <section className="border border-white/10 bg-white/[0.025] p-6 mb-10">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-3">
            Compressed doctrine
          </p>
          <p className="text-xl md:text-2xl text-white leading-relaxed">
            John Brajer builds authority. John B creates art. John Braj attracts
            attention. Capital. Catalog. Culture.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {identities.map((item) => (
            <article key={item.id} id={item.id} className="bg-black p-6 md:p-8 scroll-mt-24">
              <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-red-400 mb-3">
                {item.role}
              </p>
              <h2 className="text-3xl font-black text-white mb-4">{item.name}</h2>
              <p className="text-zinc-400 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>

        <section className="mt-10 border-t border-white/10 pt-8 text-zinc-400 leading-relaxed">
          <h2 className="text-2xl font-bold text-white mb-4">Non-exhaustive internal architecture</h2>
          <p>
            Lultrills, Ace Brajer, Kasano, and John B are currently known named
            nodes/Fragments in the public record. The existence of four currently
            mapped public origin regions does not assert that the internal architecture
            contains only four nodes, Fragments, or future Trillaxies.
          </p>
        </section>
      </main>

      <SiteLegalFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
