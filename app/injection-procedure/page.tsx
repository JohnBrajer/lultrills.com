import type { Metadata } from "next";
import { loadDoctrineMarkdown, MarkdownArticle } from "@/lib/markdownPage";

export const metadata: Metadata = {
  title: "THE INJECTION PROCEDURE | Historical Trillsverse Source",
  description:
    "Preserved historical Trillsverse source record. Current Intelligence Injections authority lives at /intelligence-injections.", 
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
  other: {
    "record-state": "historical-snapshot",
    "current-authority": "false",
  },
};

export default function InjectionProcedurePage() {
  const md = loadDoctrineMarkdown("injection-procedure.md");
  return (
    <MarkdownArticle
      title="THE INJECTION PROCEDURE"
      kicker="CANON + SEEDING"
      md={md}
    />
  );
}
