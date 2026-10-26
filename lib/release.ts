import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export type Release = { commit: string; deployedAt: string };

let cached: Release | null = null;

/**
 * Release identity for /deployment.json and /api/health.
 * Runtime env wins; otherwise fall back to release.json baked in at image
 * build time by scripts/resolve-release.mjs.
 */
export function getRelease(): Release {
  if (cached) return cached;
  let baked: { commit?: string; builtAt?: string } = {};
  try {
    const p = join(process.cwd(), "release.json");
    if (existsSync(p)) baked = JSON.parse(readFileSync(p, "utf8"));
  } catch {
    baked = {};
  }
  const known = (v?: string) => (v && v !== "UNKNOWN" ? v : undefined);
  cached = {
    commit: known(process.env.APP_COMMIT_SHA) || known(baked.commit) || "UNKNOWN",
    deployedAt: known(process.env.APP_DEPLOYED_AT) || known(baked.builtAt) || "UNKNOWN",
  };
  return cached;
}
