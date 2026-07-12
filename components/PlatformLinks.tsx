import type { PlatformLinks as Links } from "@/lib/musicCatalog";

type Props = {
  links: Links;
  /** compact = pill buttons for track rows */
  size?: "sm" | "md";
  className?: string;
};

const PLATFORMS: {
  key: keyof Links;
  label: string;
  short: string;
  tone: "spotify" | "apple" | "youtube";
}[] = [
  { key: "spotify", label: "Spotify", short: "Spotify", tone: "spotify" },
  { key: "apple", label: "Apple Music", short: "Apple", tone: "apple" },
  { key: "youtube", label: "YouTube", short: "YouTube", tone: "youtube" },
];

export function PlatformLinks({ links, size = "sm", className = "" }: Props) {
  return (
    <div
      className={`platform-links platform-links--${size} ${className}`.trim()}
      role="group"
      aria-label="Stream on"
    >
      {PLATFORMS.map((p) => (
        <a
          key={p.key}
          href={links[p.key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`platform-btn platform-btn--${p.tone}`}
          title={`Open on ${p.label}`}
        >
          {size === "sm" ? p.short : p.label}
        </a>
      ))}
    </div>
  );
}
