/**
 * Express server for portfolio website
 */
const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Health check
  server.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
  });

  // API routes
  server.get('/api/status', (req, res) => {
    res.json({ status: 'operational', service: 'portfolio-website' });
  });

  // Next.js handler
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
