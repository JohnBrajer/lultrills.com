#!/usr/bin/env node
// Bake release identity (commit SHA) into the image at build time.
//
// Production builds on the droplet run `docker compose up --build` from a git
// checkout, but nothing guaranteed APP_COMMIT_SHA was exported, so
// /deployment.json and /api/health reported commit "UNKNOWN". This script
// resolves the SHA from (1) APP_COMMIT_SHA / GITHUB_SHA, else (2) the minimal
// .git metadata (HEAD, refs, packed-refs) that .dockerignore lets through, and
// writes release.json for the runtime to read. No git binary required.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const SHA = /^[0-9a-f]{40}$/;

function fromEnv() {
  for (const key of ["APP_COMMIT_SHA", "GITHUB_SHA"]) {
    const v = (process.env[key] || "").trim();
    if (SHA.test(v)) return { commit: v, source: `env:${key}` };
  }
  return null;
}

function fromGit() {
  const gitDir = join(root, ".git");
  const headPath = join(gitDir, "HEAD");
  if (!existsSync(headPath)) return null;
  const head = readFileSync(headPath, "utf8").trim();
  if (SHA.test(head)) return { commit: head, source: "git:detached-HEAD" };
  const m = head.match(/^ref:\s*(.+)$/);
  if (!m) return null;
  const ref = m[1].trim();
  const loose = join(gitDir, ref);
  if (existsSync(loose)) {
    const v = readFileSync(loose, "utf8").trim();
    if (SHA.test(v)) return { commit: v, source: `git:${ref}` };
  }
  const packed = join(gitDir, "packed-refs");
  if (existsSync(packed)) {
    for (const line of readFileSync(packed, "utf8").split("\n")) {
      const [sha, name] = line.trim().split(/\s+/);
      if (name === ref && SHA.test(sha)) return { commit: sha, source: `git:packed:${ref}` };
    }
  }
  return null;
}

const resolved = fromEnv() || fromGit() || { commit: "UNKNOWN", source: "unresolved" };
const envAt = (process.env.APP_DEPLOYED_AT || "").trim();
const release = {
  commit: resolved.commit,
  commitSource: resolved.source,
  builtAt: envAt && envAt !== "UNKNOWN" ? envAt : new Date().toISOString(),
};
writeFileSync(join(root, "release.json"), JSON.stringify(release, null, 2) + "\n");
console.log(`[release] commit=${release.commit} (${release.commitSource}) builtAt=${release.builtAt}`);
