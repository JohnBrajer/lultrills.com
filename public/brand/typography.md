# Trillsverse Typography System

**VERSION:** 2026-07-17  
**Law:** Void `#050505` · Breach `#DC143C` · Gold `#C5A26F` · radius 0  

## Canonical stack

| Role | Font | CSS / token | Weights | Use |
|------|------|-------------|---------|-----|
| **Display / mark** | Orbitron | `--font-display` | 500–700 | H1, wordmarks, Trillaxy titles, `TRILLSVERSE` / `LULTRILLS` |
| **Body / UI** | Rajdhani | `--font-body` / `--font-sans` | 400–600 | Paragraphs, nav, cards, feed body |
| **System / machine** | JetBrains Mono | `--font-mono` | 400–500 | Kickers, labels, corpus rails, logs, doctrine codes |
| **Doctrine only** | Cinzel | `--font-serif` | 400–700 | Longform manuscripts only — **not** app chrome |

## Type scale (public shell)

| Element | Spec |
|---------|------|
| Kicker | 10px mono · tracking 0.35em · uppercase · gold or muted |
| H1 | Orbitron · clamp ~2.5–4rem · tight leading · weight 600–700 |
| H2 | Orbitron or Rajdhani 600 · ~1.5–2rem |
| Body | Rajdhani 400–500 · 16–18px · line-height ~1.5 |
| Machine facts | Mono 12–13px · muted |

## Do / Don’t

- **Do** use mono for anything that should read as system truth.  
- **Do** keep display for marks and primary titles only.  
- **Don’t** use Cinzel in Gate product UI or SiteChrome.  
- **Don’t** introduce a fourth UI font without a brand PR.  
- **Don’t** soft pill / rounded SaaS typography.

## Platforms

| Surface | Enforcement |
|---------|-------------|
| lultrills.com | `app/layout.tsx` next/font + `globals.css` |
| Gate | `index.html` Google fonts + `index.css` tokens; 3D woff for Orbitron/Rajdhani |
| IG / Canva | See `EXPORT.md` |

## 3D / self-host

Gate experience fonts: `/fonts/orbitron-bold.woff`, `/fonts/rajdhani-medium.woff`  
UI stack may load from Google; offline 3D must keep local woff.
