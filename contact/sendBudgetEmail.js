import { Resend } from 'resend';

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * @param {{ name: string; email: string; phone?: string; service?: string; message: string }} payload
 * @param {{ RESEND_API_KEY?: string; RESEND_TO_EMAIL?: string; RESEND_FROM_EMAIL?: string }} env
 */
export async function sendBudgetEmail(payload, env) {
  const { RESEND_API_KEY, RESEND_TO_EMAIL, RESEND_FROM_EMAIL } = env;

  if (!RESEND_API_KEY || !RESEND_TO_EMAIL || !RESEND_FROM_EMAIL) {
    const err = new Error('Missing RESEND_API_KEY, RESEND_TO_EMAIL, or RESEND_FROM_EMAIL');
    err.statusCode = 500;
    throw err;
  }

  const { name, email, phone, service, message } = payload;
  if (!name || !email || !message) {
    const err = new Error('Missing required fields');
    err.statusCode = 400;
    throw err;
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: [RESEND_TO_EMAIL],
    replyTo: email,
    subject: `Novo pedido de orçamento — ${name}`,
    html: `
      <h2>Pedido de orçamento</h2>
      <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefone:</strong> ${escapeHtml(phone || '—')}</p>
      <p><strong>Serviço:</strong> ${escapeHtml(service || '—')}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `,
  });

  if (error) {
    const err = new Error(error.message || 'Resend error');
    err.statusCode = 502;
    throw err;
  }
}
