import Link from "next/link";
import fs from "fs";
import path from "path";

export function loadDoctrineMarkdown(filename: string): string {
  const fp = path.join(process.cwd(), "content/doctrine", filename);
  return fs.readFileSync(fp, "utf8");
}

export function MarkdownArticle({
  title,
  kicker,
  md,
}: {
  title: string;
  kicker: string;
  md: string;
}) {
  // strip first H1 if duplicates title
  let body = md.replace(/^#[^\n]+\n+/, "");
  const blocks = body.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);

  return (
    <main className="min-h-screen bg-[#070708] text-zinc-100">
      <header className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
          <Link href="/archive" className="font-mono text-[10px] tracking-[0.3em] text-zinc-500 hover:text-[#C5A26F]">
            ← ARCHIVE
          </Link>
          <div className="font-mono text-[9px] tracking-[0.25em] text-[#C5A26F]">{kicker}</div>
          <a href="https://trillsverse.com" className="font-mono text-[10px] tracking-[0.2em] text-zinc-500 hover:text-red-400">
            GATE
          </a>
        </div>
      </header>
      <article className="max-w-3xl mx-auto px-5 py-14 sm:py-20">
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-10 leading-[1.08]">{title}</h1>
        <div className="space-y-4">
          {blocks.map((block, i) => {
            if (block.startsWith("### "))
              return (
                <h3 key={i} className="text-lg font-semibold text-white pt-4">
                  {block.slice(4)}
                </h3>
              );
            if (block.startsWith("## "))
              return (
                <h2 key={i} className="text-2xl font-bold text-white pt-6">
                  {block.slice(3)}
                </h2>
              );
            if (block.startsWith("# "))
              return (
                <h2 key={i} className="text-2xl font-bold text-white pt-6">
                  {block.slice(2)}
                </h2>
              );
            if (block.startsWith("> "))
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-[#C5A26F]/40 pl-4 text-zinc-400 italic leading-relaxed"
                >
                  {block.replace(/^>\s?/gm, "")}
                </blockquote>
              );
            if (block.startsWith("|") || block.startsWith("---"))
              return (
                <pre
                  key={i}
                  className="text-xs font-mono text-zinc-500 overflow-x-auto whitespace-pre-wrap border border-white/10 p-3"
                >
                  {block}
                </pre>
              );
            return (
              <p key={i} className="text-zinc-400 text-[15px] leading-[1.75] whitespace-pre-wrap">
                {block}
              </p>
            );
          })}
        </div>
      </article>
    </main>
  );
}
