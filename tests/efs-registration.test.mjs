import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { Readable } from 'node:stream';
import endpoint from '../api/efs-register.js';

const originalFetch = globalThis.fetch;
const originalToken = process.env.AIRTABLE_EFS_TOKEN;
const origin = 'https://hustle-fund.webflow.io';
let server, url, upstream, calls;
before(async () => {
  process.env.AIRTABLE_EFS_TOKEN = 'test-only-credential';
  globalThis.fetch = async (...args) => { calls.push(args); return upstream(...args); };
  server = createServer(async (req, res) => {
    const request = new Request(`http://localhost${req.url}`, {
      method: req.method, headers: req.headers,
      ...(req.method === 'POST' ? { body: Readable.toWeb(req), duplex: 'half' } : {}),
    });
    const response = await endpoint.fetch(request);
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  url = `http://127.0.0.1:${server.address().port}/api/efs-register`;
});
after(async () => {
  globalThis.fetch = originalFetch;
  if (originalToken === undefined) delete process.env.AIRTABLE_EFS_TOKEN;
  else process.env.AIRTABLE_EFS_TOKEN = originalToken;
  await new Promise(resolve => server.close(resolve));
});
function send(body, { method = 'POST', headers = {}, raw = false } = {}) {
  return originalFetch(url, {
    method, headers: { Origin: origin, 'Content-Type': 'application/json', ...headers },
    ...(method === 'POST' ? { body: raw ? body : JSON.stringify(body) } : {}),
  });
}
test('public endpoint writes trimmed name, email and Founder classification to the fixed EFS table, then confirms success', async () => {
  calls = [];
  upstream = async (destination, init) => {
    assert.equal(destination, 'https://api.airtable.com/v0/apppffVkNiSJ1sSVL/tbleiKXEucEbE2E6c');
    assert.equal(init.method, 'POST');
    assert.equal(init.headers.Authorization, 'Bearer test-only-credential');
    assert.deepEqual(JSON.parse(init.body), { fields: { Track: 'Founder', Name: 'Test Founder', 'Email Address:': 'test@example.com' } });
    return Response.json({ id: 'recTest', fields: { Track: 'Founder', Name: 'Test Founder', 'Email Address:': 'test@example.com' } });
  };
  const response = await send({ name: '  Test Founder  ', email: 'TEST@example.com ', track: 'Injected', Track: 'Injected', table: 'Payments', fields: { Score: 10, Track: 'Injected' } });
  assert.equal(response.status, 201);
  assert.deepEqual(await response.json(), { saved: true });
  assert.equal(response.headers.get('access-control-allow-origin'), origin);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(calls.length, 1);
});
test('missing fields, malformed email, bot field and invalid bodies never reach Airtable', async () => {
  calls = [];
  for (const body of [{}, { name: ' ', email: 'a@b.com' }, { name: 'Test', email: 'broken' }, { name: 'Test', email: 'a@b.com', website: 'spam' }, null, { name: 'x'.repeat(121), email: 'a@b.com' }]) {
    assert.equal((await send(body)).status, 400);
  }
  assert.equal((await send('{', { raw: true })).status, 400);
  assert.equal((await send('x'.repeat(4100), { raw: true })).status, 413);
  assert.equal(calls.length, 0);
});
test('unapproved origins, unsupported methods and content types cannot write', async () => {
  calls = [];
  assert.equal((await send({}, { headers: { Origin: 'https://unrelated.example' } })).status, 403);
  assert.equal((await send({}, { headers: { Origin: '' } })).status, 403);
  assert.equal((await send({}, { method: 'GET' })).status, 405);
  assert.equal((await send({}, { headers: { 'Content-Type': 'text/plain' } })).status, 415);
  const preflight = await send(null, { method: 'OPTIONS' });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('access-control-allow-origin'), origin);
  assert.equal(calls.length, 0);
});
test('missing secret fails closed', async () => {
  calls = [];
  delete process.env.AIRTABLE_EFS_TOKEN;
  assert.equal((await send({ name: 'Test', email: 'a@b.com' })).status, 503);
  process.env.AIRTABLE_EFS_TOKEN = 'test-only-credential';
  assert.equal(calls.length, 0);
});
test('upstream errors, incomplete saves and network failures never unlock the course', async () => {
  calls = [];
  for (const status of [401, 403, 422, 429, 500]) {
    upstream = async () => Response.json({ secret: 'must-not-leak' }, { status });
    const response = await send({ name: 'Test', email: 'a@b.com' });
    assert.equal(response.status, 502);
    assert.equal((await response.text()).includes('must-not-leak'), false);
  }
  for (const record of [{}, { id: 'recTest', fields: {} }, { id: 'recTest', fields: { Track: 'Founder', Name: 'Test', 'Email Address:': 'a@b.com' }, details: { message: 'partialSuccess' } }]) {
    upstream = async () => Response.json(record);
    assert.equal((await send({ name: 'Test', email: 'a@b.com' })).status, 502);
  }
  upstream = async () => { throw new Error('timeout'); };
  assert.equal((await send({ name: 'Test', email: 'a@b.com' })).status, 502);
});
test('rapid repeated submissions are limited within the instance', async () => {
  calls = [];
  upstream = async () => Response.json({ id: 'recTest', fields: { Track: 'Founder', Name: 'Test', 'Email Address:': 'a@b.com' } });
  for (let i = 0; i < 10; i++) assert.equal((await send({ name: 'Test', email: 'a@b.com' }, { headers: { 'x-vercel-forwarded-for': '192.0.2.9' } })).status, 201);
  const response = await send({ name: 'Test', email: 'a@b.com' }, { headers: { 'x-vercel-forwarded-for': '192.0.2.9' } });
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('retry-after'), '60');
  assert.equal(calls.length, 10);
});
