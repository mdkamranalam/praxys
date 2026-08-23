import express from 'express';

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

// Routes
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

/**
 * POST /api/auth/register
 */
app.use("/api/auth", authRoutes);

export default app;
