const AIRTABLE_URL = 'https://api.airtable.com/v0/apppffVkNiSJ1sSVL/tbleiKXEucEbE2E6c';
const ALLOWED_ORIGINS = new Set(['https://hustle-fund.webflow.io', 'https://www.hustlefund.vc']);
const MAX_BODY_BYTES = 4096;

// A bounded, per-instance abuse guard. This is not a distributed rate limiter.
const attempts = new Map();
function limited(request) {
  const ip = request.headers.get('x-vercel-forwarded-for') || request.headers.get('x-forwarded-for');
  if (!ip) return false;
  const now = Date.now();
  for (const [key, value] of attempts) if (value.expires <= now) attempts.delete(key);
  if (attempts.size >= 10000 && !attempts.has(ip)) return true;
  const value = attempts.get(ip) || { count: 0, expires: now + 60000 };
  value.count += 1;
  attempts.set(ip, value);
  return value.count > 10;
}

async function readBody(request) {
  if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES) throw new Error('TOO_LARGE');
  const reader = request.body?.getReader();
  if (!reader) throw new Error('INVALID_JSON');
  const chunks = [];
  let length = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new Error('TOO_LARGE');
    }
    chunks.push(value);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export default {
  async fetch(request) {
    const origin = request.headers.get('origin');
    const headers = { 'Cache-Control': 'no-store', Vary: 'Origin' };
    const reply = (status, body) => Response.json(body, { status, headers });
    if (!ALLOWED_ORIGINS.has(origin)) return reply(403, { error: 'This form must be submitted from the EFS website.' });
    headers['Access-Control-Allow-Origin'] = origin;
    headers['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (request.method !== 'POST') {
      headers.Allow = 'POST, OPTIONS';
      return reply(405, { error: 'Method not allowed.' });
    }
    if (!/^application\/json(?:\s*;|$)/i.test(request.headers.get('content-type') || '')) {
      return reply(415, { error: 'Please submit the registration form.' });
    }
    if (limited(request)) {
      headers['Retry-After'] = '60';
      return reply(429, { error: 'Too many attempts. Please wait one minute and try again.' });
    }
    let body;
    try { body = await readBody(request); }
    catch (error) {
      return reply(error.message === 'TOO_LARGE' ? 413 : 400, { error: 'Please enter a valid name and email address.' });
    }
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    if (!name || name.length > 120 || /[\u0000-\u001f\u007f]/.test(name) ||
        email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || body.website) {
      return reply(400, { error: 'Please enter your name and a valid email address.' });
    }
    const token = process.env.AIRTABLE_EFS_TOKEN;
    if (!token) {
      console.error('EFS registration unavailable: missing server configuration');
      return reply(503, { error: 'Registration is temporarily unavailable. Please try again later.' });
    }
    try {
      const result = await fetch(AIRTABLE_URL, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: { Name: name, 'Email Address:': email, Track: 'Founder' } }),
        signal: AbortSignal.timeout(15000),
      });
      if (!result.ok) {
        console.error('EFS Airtable registration failed', { status: result.status });
        return reply(502, { error: 'We could not save your details. Please try again shortly.' });
      }
      const record = await result.json();
      if (!record.id || record.fields?.Track !== 'Founder' || record.fields?.Name !== name || record.fields?.['Email Address:'] !== email || record.details) {
        console.error('EFS Airtable registration returned an incomplete confirmation');
        return reply(502, { error: 'We could not confirm your registration. Please try again shortly.' });
      }
      // No contact details, credentials, or Airtable record data are returned to the browser.
      return reply(201, { saved: true });
    } catch {
      console.error('EFS Airtable registration request failed or timed out');
      return reply(502, { error: 'We could not confirm your registration. Please try again shortly.' });
    }
  },
};
