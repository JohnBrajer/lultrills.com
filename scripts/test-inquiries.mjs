import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { mkdtemp, readdir, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const directory = await mkdtemp(path.join(os.tmpdir(), 'website-inquiry-test-'));
const base = 'http://127.0.0.1:3118';
let server;
let output = '';

async function start() {
  server = spawn(process.execPath, ['.next/standalone/server.js'], {
    env: { ...process.env, INQUIRY_DIR: directory, PORT: '3118', HOSTNAME: '127.0.0.1' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  server.stdout.on('data', (chunk) => { output += chunk; });
  server.stderr.on('data', (chunk) => { output += chunk; });
  for (let i = 0; i < 60; i++) {
    if (server.exitCode !== null) throw new Error(output);
    try {
      if ((await fetch(base + '/work-with-john')).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error('Server did not start: ' + output);
}

async function stop() {
  if (server && server.exitCode === null) {
    const exited = new Promise((resolve) => server.once('exit', resolve));
    server.kill();
    await exited;
  }
}

const payload = {
  name: 'Synthetic release check',
  email: 'release-check@example.invalid',
  website: 'https://example.com',
  problem: 'Synthetic inquiry to verify private durable storage.',
  outcome: 'Confirm the inquiry is persisted.',
  consent: true,
  source: 'release-test',
};
const post = (data, origin = 'https://www.lultrills.com') => fetch(base + '/api/inquiries', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Origin: origin },
  body: JSON.stringify(data),
});

try {
  await start();
  assert.equal((await post(payload, 'https://other.example')).status, 403);
  assert.equal((await post({ ...payload, consent: false })).status, 400);
  assert.equal((await post({ ...payload, email: 'invalid' })).status, 400);
  assert.equal((await post({ ...payload, problem: 'x'.repeat(13000) })).status, 413);
  assert.equal((await post({ ...payload, companyFax: 'bot' })).status, 400);

  const response = await post(payload);
  assert.equal(response.status, 201);
  const receipt = await response.json();
  assert.equal(receipt.received, true);
  const record = JSON.parse(await readFile(path.join(directory, receipt.reference + '.json'), 'utf8'));
  assert.equal(record.email, payload.email);
  assert.equal(record.source, 'release-test');
  assert.equal(record.consent, 'reply-to-inquiry-only');

  await stop();
  await start();
  assert.equal(JSON.parse(await readFile(path.join(directory, receipt.reference + '.json'), 'utf8')).id, receipt.reference);
  assert.equal((await post(payload)).status, 201);
  assert.equal((await post(payload)).status, 201);
  assert.equal((await post(payload)).status, 429);
  assert.equal((await readdir(directory)).filter((name) => name.endsWith('.json')).length, 3);
  assert.equal((await fetch(base + '/api/inquiries')).status, 405);

  const page = await (await fetch(base + '/work-with-john')).text();
  assert.ok(page.includes('Custom quote only'));
  assert.ok(page.includes('https://www.lultrills.com/work-with-john'));
  assert.ok(page.includes('application/ld+json'));
  console.log('PASS: origin, consent, input, size, honeypot, durable receipt, restart persistence, daily limit, private queue, and offer metadata.');
} finally {
  await stop();
  await rm(directory, { recursive: true, force: true });
}
