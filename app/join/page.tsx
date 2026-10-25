import type { Metadata } from "next";
import Link from "next/link";
import { TRILLIONAIRES_ONLY as M } from "@/lib/membership";

const canonical = "https://www.lultrills.com/join";

export const metadata: Metadata = {
  title: "Join TrillionairesONLY | Trillsverse membership",
  description: `TrillionairesONLY is the paid Trillsverse membership that funds the work. $${M.priceUsd}/${M.interval}. Access, not investment.`,
  alternates: { canonical },
  openGraph: { title: "Join TrillionairesONLY", description: "Become a Trillionaire. Fund the build. Get inside first.", url: canonical, type: "website" },
};

const perks = [
  "Inside access to THE WEEN and every LIVE series after it",
  "First listen on new Lultrills music before public release",
  "Your Imprint: a permanent public record that you helped build this",
  "Council Signal: propose and vote on what the Trillsverse builds next",
  "The Open Ledger: see where membership money goes, every month",
];

export default function JoinPage() {
  const offer = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: M.name,
    price: M.priceUsd,
    priceCurrency: "USD",
    url: M.checkoutUrl,
    seller: { "@type": "Organization", name: "Trillsverse LLC" },
    availability: "https://schema.org/InStock",
  };
  return (
    <main className="min-h-screen bg-[#070708] text-zinc-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offer) }} />
      <section className="max-w-2xl mx-auto px-5 py-20 sm:py-28">
        <div className="font-mono text-[10px] tracking-[0.3em] text-[#C5A26F] mb-6">TRILLSVERSE · MEMBERSHIP</div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.02] mb-6">Become a Trillionaire.</h1>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          “Trillionaire” doesn’t mean a trillion dollars. It means you have a place in the Trillsverse and a say in what it becomes.
          TrillionairesONLY is how you claim it, and how the build gets funded.
        </p>
        <ul className="space-y-3 mb-12">
          {perks.map((p) => (
            <li key={p} className="flex gap-3 text-zinc-200"><span className="text-[#C5A26F]">◆</span>{p}</li>
          ))}
        </ul>
        <a href={M.checkoutUrl} rel="noopener"
          className="inline-block bg-[#C5A26F] text-black font-black tracking-wide px-8 py-4 text-lg hover:bg-white transition-colors">
          Join TrillionairesONLY · ${M.priceUsd}/mo →
        </a>
        <p className="text-zinc-500 text-sm mt-6 leading-relaxed">
          Cancel anytime. Membership is access, not investment: no returns, no tokens, nothing transferable.{" "}
          <Link href="/scope-facts" className="underline hover:text-[#C5A26F]">Scope facts</Link>.
        </p>
      </section>
    </main>
  );
}
