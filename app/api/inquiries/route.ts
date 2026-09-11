import { randomUUID, createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const directory = process.env.INQUIRY_DIR || path.join(process.cwd(), 'data/inquiries');
const origins = new Set(['https://www.lultrills.com', 'https://lultrills.com']);
const reply = (body: object, status: number) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin || (!origins.has(origin) && !(process.env.NODE_ENV !== 'production' && /^http:\/\/localhost:\d+$/.test(origin)))) {
    return reply({ error: 'Please submit from the offer page.' }, 403);
  }
  if (!request.headers.get('content-type')?.startsWith('application/json')) {
    return reply({ error: 'Use the website inquiry form.' }, 415);
  }

  try {
    const reader = request.body?.getReader();
    if (!reader) return reply({ error: 'Please complete the inquiry form.' }, 400);

    const chunks: Uint8Array[] = [];
    let length = 0;
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      length += chunk.value.byteLength;
      if (length > 12000) {
        await reader.cancel();
        return reply({ error: 'Please keep your inquiry under 6,000 characters.' }, 413);
      }
      chunks.push(chunk.value);
    }

    const data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return reply({ error: 'Please complete the inquiry form.' }, 400);
    }
    if (data.companyFax) {
      return reply({ error: 'Please email Contact@Trillsverse.com if you cannot submit.' }, 400);
    }

    const read = (key: string, max: number) => typeof data[key] === 'string' ? data[key].trim().slice(0, max) : '';
    const name = read('name', 120);
    const email = read('email', 254);
    const website = read('website', 1000);
    const problem = read('problem', 3000);
    const outcome = read('outcome', 1000);

    let url: URL;
    try {
      url = new URL(website);
    } catch {
      return reply({ error: 'Enter your full website address, starting with https://.' }, 400);
    }

    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !['https:', 'http:'].includes(url.protocol) || url.username || url.password || problem.length < 10 || outcome.length < 5 || data.consent !== true) {
      return reply({ error: 'Complete all required fields and allow a reply about this inquiry.' }, 400);
    }

    await mkdir(directory, { recursive: true, mode: 0o700 });

    const day = new Date().toISOString().slice(0, 10);
    const bucket = createHash('sha256').update(email.toLowerCase() + day).digest('hex');
    const bucketDir = path.join(directory, '.limits', bucket);
    await mkdir(bucketDir, { recursive: true, mode: 0o700 });

    let reserved = false;
    for (let slot = 0; slot < 3; slot++) {
      try {
        await writeFile(path.join(bucketDir, String(slot)), '', { flag: 'wx', mode: 0o600 });
        reserved = true;
        break;
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error;
      }
    }
    if (!reserved) {
      return reply({ error: 'You have already sent several inquiries today. Please email Contact@Trillsverse.com for follow-up.' }, 429);
    }

    const id = randomUUID();
    const source = read('source', 80);
    const record = {
      id,
      createdAt: new Date().toISOString(),
      status: 'new',
      name,
      email,
      website: url.href,
      problem,
      outcome,
      timeframe: read('timeframe', 200),
      budget: read('budget', 200),
      source: /^[a-z0-9_-]{1,80}$/i.test(source) ? source : 'direct',
      consent: 'reply-to-inquiry-only',
    };

    await writeFile(path.join(directory, `${id}.json`), JSON.stringify(record, null, 2) + '\n', { flag: 'wx', mode: 0o600 });
    return reply({ received: true, reference: id }, 201);
  } catch (error) {
    if (error instanceof SyntaxError) return reply({ error: 'The form could not be read. Please try again.' }, 400);
    console.error('Inquiry storage unavailable');
    return reply({ error: 'Your inquiry was not saved. Please retry or email Contact@Trillsverse.com.' }, 503);
  }
}
