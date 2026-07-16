import Link from "next/link";

type Props = {
  /** Active path hint for nav weight */
  active?: "home" | "breach" | "archive" | "music";
  /** Nav CTA target */
  ctaHref?: string;
  ctaLabel?: string;
  /** Mono status under brand */
  status?: string;
};

/**
 * Shared public shell: brand mark + primary links + single CTA.
 * No glass, no pulse, radius 0.
 */
export function SiteChrome({
  active,
  ctaHref = "/system-breach",
  ctaLabel = "Enter",
  status = "PUBLIC NODE",
}: Props) {
  return (
    <header className="nav">
      <div className="nav-row">
        <Link href="/" className="nav-brand">
          <span className="nav-mark">LULTRILLS</span>
          <span className="nav-sys">{status}</span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link
            href="/system-breach"
            className={active === "breach" ? "is-active" : undefined}
          >
            Breach
          </Link>
          <Link
            href="/#music"
            className={active === "music" ? "is-active" : undefined}
          >
            Music
          </Link>
          <Link
            href="/archive"
            className={active === "archive" ? "is-active" : undefined}
          >
            Archive
          </Link>
          <Link href="/reality-update">Update</Link>
        </nav>
        <Link href={ctaHref} className="nav-cta">
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
