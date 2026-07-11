#!/bin/bash
# Deploy lultrills.com (Next.js) to the Trillsverse DigitalOcean droplet.
# Same host as the Gate — not Vercel.
#
#   ./scripts/push-to-droplet.sh
#
set -euo pipefail

HOST="${DROPLET_HOST:-trillsverse-droplet}"
REMOTE_DIR="/root/lultrills.com"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "[check] SSH to $HOST..."
ssh -o ConnectTimeout=10 "$HOST" 'echo ok; uname -a'

echo "[1/3] Rsync code..."
rsync -az --delete \
  --exclude node_modules \
  --exclude .git \
  --exclude .next \
  --exclude '*.log' \
  "$ROOT/" "$HOST:$REMOTE_DIR/"

echo "[2/3] Docker build & start..."
ssh "$HOST" "cd $REMOTE_DIR && docker compose -f docker-compose.prod.yml up -d --build"

echo "[3/3] Health..."
sleep 6
ssh "$HOST" 'curl -sf -o /dev/null -w "home %{http_code}\n" http://127.0.0.1:3000/ && curl -sf -o /dev/null -w "essay %{http_code}\n" http://127.0.0.1:3000/essays/why-everything-is-one && docker ps --filter name=lultrills --format "{{.Names}} {{.Status}}"'

echo
echo "============================================"
echo "  lultrills.com app is on the droplet at"
echo "  http://138.197.145.142:3000"
echo
echo "  Public https://www.lultrills.com only works"
echo "  after DNS A records point to 138.197.145.142"
echo "  (currently Hostinger CDN — not this app)."
echo "  Caddy is ready for lultrills.com / www."
echo "============================================"
