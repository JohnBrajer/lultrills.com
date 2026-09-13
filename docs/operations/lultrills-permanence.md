# Lultrills.com permanence and recovery

Status: acceptance record for issue #11. This document defines the operating contract; evidence must still be recorded before an item is marked verified.

## Authority and topology

- Canonical repository: `JohnBrajer/lultrills.com`
- Canonical branch: `John`
- Repository owner: `JohnBrajer`
- Production provider: self-managed DigitalOcean droplet
- Production application path: `/root/lultrills.com`
- Runtime: Next.js standalone application in Docker/Compose
- Public edge: Caddy, forwarding `lultrills.com` and `www.lultrills.com` to `127.0.0.1:3000`
- Canonical/public content authority: committed Git source.
- Production-only mutable state: the `offer-inquiries` Docker volume mounted at `/app/data/inquiries`. This contains private inquiry records and rate-limit state and is not reconstructable from Git.

## Clean source verification

A clean checkout must pass:

```bash
npm ci
npm run build
node scripts/test-inquiries.mjs
```

The repository's `Verify Root source` workflow executes these checks from GitHub Actions checkout. Record the exact successful run and source SHA in the issue evidence.

## Exact-SHA deployment

Never use a dirty worktree as release authority. Deploy an explicit commit:

```bash
set -euo pipefail
cd /root/lultrills.com
git fetch origin John
test -z "$(git status --porcelain)"
RELEASE_SHA='<full canonical commit SHA>'
git cat-file -e "${RELEASE_SHA}^{commit}"
git checkout --detach "$RELEASE_SHA"
test "$(git rev-parse HEAD)" = "$RELEASE_SHA"
export APP_COMMIT_SHA="$RELEASE_SHA"
export APP_DEPLOYED_AT="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
docker compose -f docker-compose.prod.yml up -d --build
```

A deployment is not accepted until the public health receipt reports the same SHA and a non-`UNKNOWN` deployment timestamp.

## Health and observability contract

Verify all of the following over the public HTTPS origin:

```bash
curl -fsS https://www.lultrills.com/
curl -fsS https://www.lultrills.com/api/health
curl -fsS https://www.lultrills.com/robots.txt
curl -fsS https://www.lultrills.com/llms.txt
curl -fsS https://www.lultrills.com/corpus.json
```

`/api/health` must report `status=ok`, `authority=JohnBrajer/lultrills.com`, `canonicalBranch=John`, `releaseIdentityKnown=true`, the intended exact `deployedCommit`, and a non-`UNKNOWN` `deployedAt` value.

Failure signals: non-2xx public checks, health identity mismatch, container restart/failure, or Caddy upstream failure. Operator diagnostics include `docker compose -f docker-compose.prod.yml ps`, `docker compose -f docker-compose.prod.yml logs --tail=200 web`, and the host's Caddy logs.

## Known-good release, rollback, and forward recovery

A commit becomes `KNOWN_GOOD` only after exact public health and representative route verification. Do not infer known-good status from a merge or source build.

Controlled rollback:

```bash
set -euo pipefail
cd /root/lultrills.com
test -z "$(git status --porcelain)"
ROLLBACK_SHA='<verified KNOWN_GOOD full SHA>'
git fetch origin John
git cat-file -e "${ROLLBACK_SHA}^{commit}"
git checkout --detach "$ROLLBACK_SHA"
export APP_COMMIT_SHA="$ROLLBACK_SHA"
export APP_DEPLOYED_AT="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
docker compose -f docker-compose.prod.yml up -d --build
```

Re-run the complete public health contract. For forward recovery, repeat the exact-SHA deployment procedure with the intended current release and re-run the same checks. Issue #11 remains open until one rollback and forward-recovery drill is observed and recorded.

## Mutable inquiry-state recovery

The canonical site and publication corpus are recoverable from Git, but inquiry records are not. Before claiming permanence, the operator must establish and verify a protected backup/export path for the `offer-inquiries` volume without printing inquiry contents into GitHub logs or issues.

Minimum acceptance:

1. identify the exact Docker volume backing `/app/data/inquiries`;
2. create a protected backup outside the active volume/host failure domain;
3. record only sanitized metadata (timestamp, byte/file counts where safe, checksum, destination class—not private inquiry contents);
4. restore into an isolated volume/path;
5. verify file/count/checksum integrity without exposing personal data;
6. document retention and deletion handling appropriate to `reply-to-inquiry-only` consent.

Until those checks pass, `content recovery` is only partially verified.

## Acceptance ledger

Issue #11 is DONE only when all conditions are independently evidenced:

- exact live SHA + deployment timestamp: UNVERIFIED
- canonical branch/live-source correspondence: UNVERIFIED
- clean-checkout build: evidence required from exact successful workflow run
- exact-SHA deployment path documented: DOCUMENTED
- dirty-worktree exclusion: DOCUMENTED
- public root + health + robots + llms + corpus verification: UNVERIFIED as one exact-release set
- failure/log signal documented: DOCUMENTED
- known-good release recorded from public evidence: UNVERIFIED
- rollback drill: UNVERIFIED
- forward-recovery drill: UNVERIFIED
- repository/deployment/provider/Caddy/runtime ownership and dependencies: DOCUMENTED, live provider evidence still required in issue receipt
- committed public content reconstructable from Git: DOCUMENTED
- production-only inquiry state identified: VERIFIED FROM SOURCE
- inquiry backup + isolated restore: UNVERIFIED
- sanitized evidence projected to `Trillsverse-Gate-FINAL#73` / Permanence Matrix: UNVERIFIED
