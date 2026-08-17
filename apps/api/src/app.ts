import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Praxys server is running...');
});

/**
 * GET /api/health
 */
app.get('/api/health', (req, res) => {
  res.json({
    service: 'praxys-api',
    status: 'ok',
    timestamp: new Date().toLocaleString(),
  });
});

export default app;
