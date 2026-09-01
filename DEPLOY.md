# Lultrills.com: DigitalOcean Droplet Deployment Ritual

**Node:** Public artist portal + SEO/scraper node  
**Stack:** Next.js (standalone) + Docker  
**Target:** DigitalOcean Droplet (Ubuntu recommended)  
**Goal:** Sovereign, reproducible, low-maintenance deployment

---

## 1. Create the Droplet

1. Log into DigitalOcean
2. Create Droplet
   - Distribution: Ubuntu 22.04 or 24.04 LTS
   - Plan: Basic → 1GB or 2GB RAM (start here)
   - Region: closest to your audience or NYC3 / SFO3
   - Authentication: SSH keys (recommended) or password
3. Name it something clear: `lultrills-com-prod`
4. Enable monitoring + IPv6 if desired
5. Create Droplet

---

## 2. Initial Server Setup (one-time)

SSH into the droplet:

```bash
ssh root@YOUR_DROPLET_IP
```

Run these commands:

```bash
# Update system
apt update && apt upgrade -y

# Install Docker + Docker Compose
apt install -y docker.io docker-compose

# Add non-root user (optional but recommended)
adduser --disabled-password --gecos "" deploy
usermod -aG docker deploy

# Allow deploy user to manage docker without sudo
```

---

## 3. Deploy the Application

As the `deploy` user (or root):

```bash
# Clone the repo
cd /home/deploy
git clone https://github.com/JohnBrajer/lultrills.com.git
cd lultrills.com

git checkout John

# Build and start with docker-compose
docker-compose up -d --build
```

Check it's running:

```bash
docker ps
docker logs -f lultrills-com
```

The site should now be available on `http://YOUR_DROPLET_IP:3000`

---

## 4. Production Hardening (recommended)

### Option A: Simple (current)
- Use a reverse proxy later (Nginx or Caddy) for custom domain + SSL
- Add firewall:

```bash
ufw allow OpenSSH
ufw allow 80
ufw allow 443
ufw enable
```

### Option B: Full Sovereign (future iteration)
- Add Nginx or Caddy as reverse proxy in docker-compose
- Use Let's Encrypt for free SSL + auto-renewal
- Set up systemd service or restart policy already handled by compose

---

## 5. Custom Domain + SSL (lultrills.com)

**Important:** If the browser shows Hostinger / Zyrosite headers (`server: hcdn`, `x-powered-by: HostingerWebsiteBuilder`), DNS is still on Hostinger. Not the DigitalOcean Next.js app.

### Live DigitalOcean setup (Trillsverse droplet)

- Droplet IP: `157.230.58.14` (SSH host: `trillsverse-droplet`)
- App path: `/root/lultrills.com`
- Container: port **3000**
- Caddy reverse proxy already includes:

```
lultrills.com, www.lultrills.com {
  encode gzip
  reverse_proxy 127.0.0.1:3000
}
```

### Point Namecheap DNS at the droplet

1. Log into Namecheap → Domain List → **lultrills.com** → Manage → **Advanced DNS**
2. Remove / disable Hostinger / parking / URL redirect records for `@` and `www` if present
3. Set:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | `@` | `157.230.58.14` | Automatic or 5 min |
| A | `www` | `157.230.58.14` | Automatic or 5 min |

4. Wait 5–60 minutes. Test:

```bash
dig +short lultrills.com
# should print: 157.230.58.14

curl -sI https://www.lultrills.com | head -5
# should NOT say HostingerWebsiteBuilder
# should show Next.js / Caddy path

curl -sI https://www.lultrills.com/essays/why-everything-is-one
# HTTP 200
```

5. Until DNS flips, the new site is already up at:

```
http://157.230.58.14:3000
http://157.230.58.14:3000/essays/why-everything-is-one
```

Caddy will auto-issue HTTPS for lultrills.com once public DNS points at the droplet.

---

## 6. Updates (zero-downtime friendly)

```bash
cd /home/deploy/lultrills.com
git pull origin John
docker-compose up -d --build
```

The container restarts with new code. For true zero-downtime, add a load balancer or blue-green later.

---

## 7. Environment Variables

Create `.env.production` (never commit secrets):

```env
# Add any runtime env vars here
```

Then mount it in docker-compose or pass via `-e`.

---

## 8. Monitoring & Maintenance

- `docker logs -f lultrills-com`
- `docker stats`
- DigitalOcean monitoring dashboard
- Set up simple healthcheck in Dockerfile if needed (already exposed on /)

---

## Security Notes

- Never run as root in container (already configured in Dockerfile)
- Keep Docker and system updated
- Use UFW or DigitalOcean firewall
- Rotate SSH keys regularly
- Consider fail2ban for SSH protection

---

## Rollback

```bash
git checkout <previous-commit>
docker-compose up -d --build
```

---

**This ritual is designed to be simple, repeatable, and sovereign.**  
No more 40+ failure loops. One clean path.

The public signal layer is now deployable on independent infrastructure.

LULTRILLS sovereign. DigitalOcean Droplet active.