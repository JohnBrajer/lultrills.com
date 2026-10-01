#!/usr/bin/env bash
set -Eeuo pipefail

REPO_URL="${LULTRILLS_REPO_URL:-https://github.com/JohnBrajer/lultrills.com.git}"
BRANCH="${LULTRILLS_BRANCH:-John}"
STATE_ROOT="${LULTRILLS_DEPLOY_STATE:-/var/lib/lultrills-autodeploy}"
MIRROR="${STATE_ROOT}/repo.git"
RELEASES="${STATE_ROOT}/releases"
LOCK_FILE="/run/lock/lultrills-autodeploy.lock"
BASE_URL="${LULTRILLS_BASE_URL:-http://127.0.0.1:3000}"
IMAGE_REPO="${LULTRILLS_IMAGE_REPO:-lultrills-web}"
FORCE="${LULTRILLS_FORCE_DEPLOY:-0}"

mkdir -p "$STATE_ROOT" "$RELEASES" "$(dirname "$LOCK_FILE")"
exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  echo "[autodeploy] another deployment is already running"
  exit 0
fi

log() {
  printf '[%s] [autodeploy] %s\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$*"
}

compose() {
  if docker compose version >/dev/null 2>&1; then
    docker compose "$@"
  else
    docker-compose "$@"
  fi
}

find_current_container() {
  docker ps --filter publish=3000 --format '{{.ID}}' | head -n 1
}

detect_project() {
  local container
  container="$(find_current_container)"
  if [[ -n "$container" ]]; then
    docker inspect -f '{{ index .Config.Labels "com.docker.compose.project" }}' "$container" 2>/dev/null || true
  fi
}

cleanup_old_releases() {
  find "$RELEASES" -mindepth 1 -maxdepth 1 -type d -mtime +14 -print0 2>/dev/null | xargs -0r rm -rf
}

if [[ ! -d "$MIRROR" ]]; then
  log "initializing canonical Git mirror"
  git clone --mirror "$REPO_URL" "$MIRROR"
fi

log "fetching origin/$BRANCH"
git --git-dir="$MIRROR" fetch --prune origin "+refs/heads/*:refs/heads/*"
REMOTE_SHA="$(git --git-dir="$MIRROR" rev-parse "refs/heads/$BRANCH")"
LAST_SUCCESS="$(cat "$STATE_ROOT/last-success.sha" 2>/dev/null || true)"

if [[ "$REMOTE_SHA" == "$LAST_SUCCESS" && "$FORCE" != "1" ]]; then
  log "already current at $REMOTE_SHA"
  cleanup_old_releases
  exit 0
fi

SHORT_SHA="${REMOTE_SHA:0:12}"
RELEASE_DIR="$RELEASES/$REMOTE_SHA"
DEPLOYED_AT="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
PROJECT="${LULTRILLS_COMPOSE_PROJECT:-$(detect_project)}"
PROJECT="${PROJECT:-lultrillscom}"
CANDIDATE_IMAGE="$IMAGE_REPO:$REMOTE_SHA"
CURRENT_IMAGE="$IMAGE_REPO:current"

rm -rf "$RELEASE_DIR"
mkdir -p "$RELEASE_DIR"
git --git-dir="$MIRROR" archive "$REMOTE_SHA" | tar -x -C "$RELEASE_DIR"

CURRENT_CONTAINER="$(find_current_container)"
OLD_IMAGE=""
OLD_COMMIT="$LAST_SUCCESS"
OLD_DEPLOYED_AT="$(cat "$STATE_ROOT/last-success.deployed-at" 2>/dev/null || true)"
if [[ -n "$CURRENT_CONTAINER" ]]; then
  OLD_IMAGE="$(docker inspect -f '{{.Image}}' "$CURRENT_CONTAINER" 2>/dev/null || true)"
fi

log "building candidate $SHORT_SHA"
docker build   --label "org.opencontainers.image.revision=$REMOTE_SHA"   --label "org.opencontainers.image.source=$REPO_URL"   --label "trillsverse.deploy.timestamp=$DEPLOYED_AT"   -t "$CANDIDATE_IMAGE"   "$RELEASE_DIR"

docker tag "$CANDIDATE_IMAGE" "$CURRENT_IMAGE"

log "switching production container using compose project $PROJECT"
(
  cd "$RELEASE_DIR"
  APP_COMMIT_SHA="$REMOTE_SHA"   APP_DEPLOYED_AT="$DEPLOYED_AT"   compose -p "$PROJECT" -f docker-compose.prod.yml up -d --no-build --force-recreate web
)

check_url() {
  local path="$1"
  curl --fail --silent --show-error --max-time 8 "$BASE_URL$path" >/dev/null
}

healthy=0
for attempt in $(seq 1 30); do
  if check_url "/"     && check_url "/deployment.json"     && check_url "/trillsverse-bible"     && check_url "/trillsverse-bible.json"     && check_url "/corpus.json"     && check_url "/llms.txt"     && check_url "/sitemap.xml"     && curl --fail --silent --max-time 8 "$BASE_URL/deployment.json" | grep -Fq "$REMOTE_SHA"; then
    healthy=1
    break
  fi
  log "health check $attempt/30 not ready"
  sleep 2
done

if [[ "$healthy" != "1" ]]; then
  log "candidate failed health verification; rolling back"
  if [[ -n "$OLD_IMAGE" ]]; then
    docker tag "$OLD_IMAGE" "$CURRENT_IMAGE"
    (
      cd "$RELEASE_DIR"
      APP_COMMIT_SHA="${OLD_COMMIT:-UNKNOWN}"       APP_DEPLOYED_AT="${OLD_DEPLOYED_AT:-UNKNOWN}"       compose -p "$PROJECT" -f docker-compose.prod.yml up -d --no-build --force-recreate web
    )
    log "rollback container recreated from previous image"
  else
    log "no previous image was available for rollback"
  fi
  exit 1
fi

ln -sfn "$RELEASE_DIR" "$STATE_ROOT/current"
printf '%s\n' "$REMOTE_SHA" > "$STATE_ROOT/last-success.sha"
printf '%s\n' "$DEPLOYED_AT" > "$STATE_ROOT/last-success.deployed-at"
printf '%s\n' "$PROJECT" > "$STATE_ROOT/compose-project"

log "production verified at $REMOTE_SHA"

KEY_FILE="$RELEASE_DIR/public/55592b66f56c2cbf76f7f2a9bccda90c.txt"
if [[ -f "$KEY_FILE" ]]; then
  KEY="$(tr -d '\r\n' < "$KEY_FILE")"
  KEY_LOCATION="https://www.lultrills.com/55592b66f56c2cbf76f7f2a9bccda90c.txt"
  for path in \
    "/trillsverse-bible" \
    "/trillsverse-bible.json" \
    "/trillsverse" \
    "/identity-architecture" \
    "/identity-architecture.json" \
    "/corpus.json" \
    "/llms.txt" \
    "/llms-full.txt" \
    "/sitemap.xml"; do
    curl --silent --show-error --max-time 10 --get \
      --data-urlencode "url=https://www.lultrills.com$path" \
      --data-urlencode "key=$KEY" \
      --data-urlencode "keyLocation=$KEY_LOCATION" \
      "https://api.indexnow.org/indexnow" >/dev/null || true
  done
  log "IndexNow notifications sent"
fi

cleanup_old_releases

while read -r image_ref; do
  [[ -z "$image_ref" ]] && continue
  if [[ "$image_ref" != "$CURRENT_IMAGE" && "$image_ref" != "$CANDIDATE_IMAGE" ]]; then
    docker image rm "$image_ref" >/dev/null 2>&1 || true
  fi
done < <(docker image ls "$IMAGE_REPO" --format '{{.Repository}}:{{.Tag}}')

docker image prune -f --filter "until=336h" >/dev/null 2>&1 || true
log "deployment complete"
