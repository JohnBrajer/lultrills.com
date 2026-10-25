// lultrills.com edge worker (Cloudflare Workers free tier).
// Static site is served from ./out via the ASSETS binding; this worker only owns /api/*.
// Inquiries are stored in the INQUIRIES KV namespace (replaces the droplet's disk volume).

const ORIGINS = new Set(["https://www.lultrills.com", "https://lultrills.com"]);
const CONTACT = "johnbrajence@gmail.com";

const reply = (body, status) =>
  Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store", "X-Robots-Tag": "noindex" },
  });

async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function inquiry(request, env) {
  const origin = request.headers.get("origin");
  if (!origin || !ORIGINS.has(origin)) return reply({ error: "Please submit from the offer page." }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return reply({ error: "Use the website inquiry form." }, 415);
  }
  const raw = await request.text();
  if (raw.length > 12000) return reply({ error: "Please keep your inquiry under 6,000 characters." }, 413);

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return reply({ error: "The form could not be read. Please try again." }, 400);
  }
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return reply({ error: "Please complete the inquiry form." }, 400);
  }
  if (data.companyFax) return reply({ error: `Please email ${CONTACT} if you cannot submit.` }, 400);

  const read = (k, max) => (typeof data[k] === "string" ? data[k].trim().slice(0, max) : "");
  const name = read("name", 120);
  const email = read("email", 254);
  const website = read("website", 1000);
  const problem = read("problem", 3000);
  const outcome = read("outcome", 1000);

  let url;
  try {
    url = new URL(website);
  } catch {
    return reply({ error: "Enter your full website address, starting with https://." }, 400);
  }
  if (
    !name ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !["https:", "http:"].includes(url.protocol) ||
    url.username ||
    url.password ||
    problem.length < 10 ||
    outcome.length < 5 ||
    data.consent !== true
  ) {
    return reply({ error: "Complete all required fields and allow a reply about this inquiry." }, 400);
  }

  if (!env.INQUIRIES) {
    return reply({ error: `Your inquiry was not saved. Please retry or email ${CONTACT}.` }, 503);
  }

  const day = new Date().toISOString().slice(0, 10);
  const limitKey = `limit:${await sha256(email.toLowerCase() + day)}`;
  const used = Number((await env.INQUIRIES.get(limitKey)) || 0);
  if (used >= 3) {
    return reply({ error: `You have already sent several inquiries today. Please email ${CONTACT} for follow-up.` }, 429);
  }
  await env.INQUIRIES.put(limitKey, String(used + 1), { expirationTtl: 60 * 60 * 26 });

  const id = crypto.randomUUID();
  const source = read("source", 80);
  const record = {
    id,
    createdAt: new Date().toISOString(),
    status: "new",
    name,
    email,
    website: url.href,
    problem,
    outcome,
    timeframe: read("timeframe", 200),
    budget: read("budget", 200),
    source: /^[a-z0-9_-]{1,80}$/i.test(source) ? source : "direct",
    consent: "reply-to-inquiry-only",
  };
  await env.INQUIRIES.put(`inquiry:${record.createdAt}:${id}`, JSON.stringify(record));
  return reply({ received: true, reference: id }, 201);
}

function health(env) {
  const deployedCommit = env.APP_COMMIT_SHA || "UNKNOWN";
  return Response.json(
    {
      status: "ok",
      service: "lultrills.com",
      host: "cloudflare-workers",
      authority: "JohnBrajer/lultrills.com",
      canonicalBranch: "John",
      deployedCommit,
      deployedAt: env.APP_DEPLOYED_AT || "UNKNOWN",
      releaseIdentityKnown: deployedCommit !== "UNKNOWN",
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/health") return health(env);
    if (pathname === "/api/inquiries") {
      if (request.method !== "POST") return reply({ error: "Method not allowed." }, 405);
      try {
        return await inquiry(request, env);
      } catch {
        return reply({ error: `Your inquiry was not saved. Please retry or email ${CONTACT}.` }, 503);
      }
    }
    if (pathname.startsWith("/api/")) return reply({ error: "Not found." }, 404);
    return env.ASSETS.fetch(request);
  },
};
