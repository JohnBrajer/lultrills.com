import Link from "next/link";
import { LEGAL, LEGAL_DOCS } from "@/lib/legal";

export function SiteLegalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-foot">
      <div className="site-inner foot-row">
        <span>
          {LEGAL.entity} · © {year} ·{" "}
          <a href={LEGAL.contactMailto}>{LEGAL.contactEmail}</a>
        </span>
        <nav className="foot-links" aria-label="Legal">
          {LEGAL_DOCS.map((d) => (
            <Link key={d.id} href={d.path}>
              {d.title.replace(" of Service", "").replace(" Policy", "")}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
