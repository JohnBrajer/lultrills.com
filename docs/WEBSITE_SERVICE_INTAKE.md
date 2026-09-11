# Website service intake

Public offer: `/work-with-john`. Custom quote only; no checkout or fixed price.

POST `/api/inquiries` validates the request, reserves a daily submission slot, then writes a private JSON record before returning a 201 and reference number.

There is no public read endpoint. The website does not send email notifications; the confirmation states that the inquiry is saved in John's private queue.

## Review inquiries

On the production server:

```sh
cd /root/lultrills.com
docker compose -f docker-compose.prod.yml exec -T web node scripts/read-inquiries.mjs
```

The output contains private customer contact information. Review it privately, reply through the business email, and agree scope, timing, and price directly.

Do not paste the queue into public issues, deployment logs, or the property graph.

Docker volume `offer-inquiries` is mounted at `/app/data/inquiries`. It persists across rebuilds and container replacement. Do not use `docker compose down -v`.

Include this volume in private server backups. The image initializes directory ownership for the non-root application user. Local development stores ignored files under `data/inquiries`; `INQUIRY_DIR` can point to an isolated test directory.

Each file is named by the reference UUID. After resolving a request, retain it only as needed for the inquiry and any agreed engagement. Deletion requests go to Contact@Trillsverse.com. Delete the exact matching private record after verifying the request; never remove the whole volume to clear one inquiry.

## Verification

Exercise required-field errors, rejected origins, malformed and oversized bodies, a successful synthetic inquiry, persistence after application restart, and the daily per-email limit. Confirm no public GET exposes the private queue.

Browser confirmation must only appear after successful storage. A network/storage failure retains form data and offers a retry or the business email.

Source attribution accepts a short campaign slug only. No inquiry content is sent to analytics or placed in the public manifest. An inquiry is not marketing consent.
