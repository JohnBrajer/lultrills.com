import type { Metadata } from "next";
import Link from "next/link";
import { SiteLegalFooter } from "@/components/SiteLegalFooter";

export const metadata: Metadata = {
  title: "Receipt substrate-002 | Sovereignty manuscript live",
  description:
    "Public substrate receipt: sovereignty working paper published to zero-crawl endpoints, corpus pointers, press protocol, Signal Archive scaffold.",
  robots: { index: true, follow: true },
};

export default function Substrate002Page() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 px-5 py-12">
      <div className="max-w-2xl mx-auto">
        <p className="font-mono text-[10px] tracking-[0.35em] uppercase text-zinc-500 mb-3">
          Receipt · substrate-002 · 2026-07-15
        </p>
        <h1 className="text-2xl font-bold text-white mb-6">
          Sovereignty manuscript + magnet stack
        </h1>
        <ul className="space-y-3 font-mono text-xs text-zinc-400 leading-relaxed">
          <li>
            · Manuscript:{" "}
            <Link
              className="text-amber-400/90 underline"
              href="/doctrine/sovereignty-as-invariance-constraint"
            >
              /doctrine/sovereignty-as-invariance-constraint
            </Link>
          </li>
          <li>
            · Markdown:{" "}
            <a
              className="text-amber-400/90 underline"
              href="/doctrine/sovereignty-as-invariance-constraint.md"
            >
              .md
            </a>
          </li>
          <li>
            · Gate:{" "}
            <a
              className="text-amber-400/90 underline"
              href="https://trillsverse.com/doctrine/sovereignty-as-invariance-constraint"
            >
              trillsverse.com mirror
            </a>
          </li>
          <li>
            · SHA-256:{" "}
            <code className="text-zinc-300 break-all">
              13cd5f5aedef3d39a2251ce40dd37320205f32834abcff603c9f55184ad03ba0
            </code>
          </li>
          <li>· Press protocol: truth-clean, wire capital optional</li>
          <li>· Signal Archive (iroh-blobs) scaffold published under Gate services/</li>
        </ul>
        <div className="mt-10 flex gap-4 font-mono text-[10px] tracking-widest uppercase">
          <Link href="/reality-update/receipts" className="border border-white/20 px-3 py-2">
            All receipts
          </Link>
          <Link href="/corpus.json" className="border border-white/20 px-3 py-2">
            Corpus
          </Link>
        </div>
      </div>
      <SiteLegalFooter />
    </div>
  );
}
