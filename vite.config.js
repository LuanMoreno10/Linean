import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { sendBudgetEmail } from './contact/sendBudgetEmail.js';

function contactApiPlugin() {
  return {
    name: 'contact-api-send-budget',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url !== '/api/send-budget' || req.method !== 'POST') {
          return next();
        }

        const env = loadEnv(server.config.mode, process.cwd(), '');
        const chunks = [];
        for await (const chunk of req) {
          chunks.push(chunk);
        }
        const raw = Buffer.concat(chunks).toString('utf8');
        let body;
        try {
          body = raw ? JSON.parse(raw) : {};
        } catch {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Invalid JSON' }));
          return;
        }

        try {
          await sendBudgetEmail(body, env);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true }));
        } catch (e) {
          const status =
            e.statusCode && Number.isInteger(e.statusCode) ? e.statusCode : 500;
          res.statusCode = status;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: e.message }));
          if (status >= 500) {
            console.error(e);
          }
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
});
