import Image from "next/image";
import Link from "next/link";

type Props = {
  /** Active path hint for nav weight */
  active?: "home" | "breach" | "archive" | "music" | "gate";
  /** Nav CTA target */
  ctaHref?: string;
  ctaLabel?: string;
  /** Mono status under brand */
  status?: string;
};

/**
 * Shared public shell: ceremonial LT mark + primary links + single CTA.
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
          <Image
            src="/brand/logo-lt-mark.jpg"
            alt=""
            width={44}
            height={44}
            className="nav-symbol"
            aria-hidden="true"
            priority
          />
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
            href="/inject"
            className={active === "archive" ? "is-active" : undefined}
          >
            Machine
          </Link>
          <Link
            href="/gate"
            className={active === "gate" ? "is-active" : undefined}
          >
            Gate
          </Link>
        </nav>
        <Link href={ctaHref} className="nav-cta">
          {ctaLabel}
        </Link>
      </div>
    </header>
  );
}
