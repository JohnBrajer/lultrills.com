# Autonomous Production Deployment

Production authority is the GitHub branch `John`.

The production droplet must not depend on a laptop, Helios, Desktop Commander, GitHub Actions, or a persistent external deploy worker. A native systemd timer on the droplet checks the canonical branch once per minute and exits immediately when the commit SHA has not changed.

## Runtime flow

1. Fetch the canonical Git mirror.
2. Compare `origin/John` with the last verified production SHA.
3. Materialize the exact commit into an immutable release directory.
4. Build a candidate Docker image tagged by commit SHA.
5. Preserve the currently running image ID for rollback.
6. Switch the existing Docker Compose project to the candidate.
7. Verify:
   - `/`
   - `/deployment.json`
   - `/trillsverse-bible`
   - `/trillsverse-bible.json`
   - `/corpus.json`
   - `/llms.txt`
   - `/sitemap.xml`
   - the deployed commit SHA
8. If verification fails, restore the prior image automatically.
9. If verification passes, record the successful SHA and notify IndexNow.
10. Retain recent release directories and prune old dangling images.

## One-time bootstrap

From a root shell on the production droplet:

```bash
cd /root/lultrills.com
git fetch origin John
git checkout John
git reset --hard origin/John
bash scripts/install-autodeploy.sh
```

That bootstrap is a one-time conversion of the existing manually deployed droplet. After it succeeds, production follows GitHub automatically.

## Controls

Force an immediate check:

```bash
systemctl start lultrills-autodeploy.service
```

Inspect status:

```bash
systemctl status lultrills-autodeploy.timer
journalctl -u lultrills-autodeploy.service -n 200 --no-pager
curl -s https://www.lultrills.com/deployment.json
```

Pause autonomous deployment:

```bash
systemctl disable --now lultrills-autodeploy.timer
```

Configuration lives in `/etc/lultrills-autodeploy.conf`. State and immutable releases live in `/var/lib/lultrills-autodeploy`.
