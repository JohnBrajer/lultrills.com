import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { LEGAL } from "@/lib/legal";

export const metadata: Metadata = {
  title: `Disclaimer | ${LEGAL.entity}`,
  description:
    "Entertainment only. Nothing on these sites is medical, legal, or financial advice.",
  robots: { index: true, follow: true },
};

export default function DisclaimerPage() {
  return <LegalDocument id="disclaimer" />;
}
