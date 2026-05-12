import { sendBudgetEmail } from '../contact/sendBudgetEmail.js';

async function readJson(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = await readJson(req);
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  try {
    await sendBudgetEmail(body, process.env);
    return res.status(200).json({ ok: true });
  } catch (e) {
    const status = e.statusCode && Number.isInteger(e.statusCode) ? e.statusCode : 500;
    if (status >= 500) {
      console.error(e);
    }
    return res.status(status).json({ error: e.message || 'Server error' });
  }
}
