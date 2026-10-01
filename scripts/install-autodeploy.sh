#!/usr/bin/env bash
set -Eeuo pipefail

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run this installer as root." >&2
  exit 1
fi

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

install -d -m 0755 /usr/local/sbin
install -d -m 0755 /var/lib/lultrills-autodeploy
install -d -m 0700 /var/lib/lultrills-autodeploy/docker
install -m 0755 "$ROOT/scripts/lultrills-autodeploy.sh" /usr/local/sbin/lultrills-autodeploy
install -m 0644 "$ROOT/deploy/systemd/lultrills-autodeploy.service" /etc/systemd/system/lultrills-autodeploy.service
install -m 0644 "$ROOT/deploy/systemd/lultrills-autodeploy.timer" /etc/systemd/system/lultrills-autodeploy.timer

if [[ ! -f /etc/lultrills-autodeploy.conf ]]; then
  cat >/etc/lultrills-autodeploy.conf <<'EOF'
LULTRILLS_REPO_URL=https://github.com/JohnBrajer/lultrills.com.git
LULTRILLS_BRANCH=John
LULTRILLS_BASE_URL=http://127.0.0.1:3000
LULTRILLS_DEPLOY_STATE=/var/lib/lultrills-autodeploy
LULTRILLS_IMAGE_REPO=lultrills-web
EOF
  chmod 0644 /etc/lultrills-autodeploy.conf
fi

systemctl daemon-reload
systemctl enable --now lultrills-autodeploy.timer
systemctl start lultrills-autodeploy.service

echo
echo "lultrills.com autonomous deployer installed."
systemctl --no-pager --full status lultrills-autodeploy.timer || true
