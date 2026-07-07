# Lultrills.com — DigitalOcean Droplet Deployment Ritual

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

1. Point DNS A record of `lultrills.com` (and www) to your Droplet IP
2. Once DNS propagates, add reverse proxy (Nginx/Caddy) with Let's Encrypt
3. Update `next.config.mjs` if needed for trusted proxies

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