# Status — sovereign-hosting (lultrills.com)

- Phase: Delivery pending credential
- Done: static export build, edge worker (/api/health, /api/inquiries→KV), _headers/_redirects, CI workflow, KV namespace created (1756a4f6f4fd46579053b0f4000ccea4), local workerd smoke test passed (home, CLAIM YOUR SEAT button, /system-breach, /album 302, /corpus.json, /console, 404, headers, health, inquiry 201, bad origin 403)
- Blocked on: CLOUDFLARE_API_TOKEN repo secret; DNS move from Hostinger to Cloudflare; custom domain routes in wrangler.jsonc after zone is active
- Before droplet shutdown: export droplet volume `offer-inquiries` (data/inquiries)
