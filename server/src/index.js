import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import coursesRouter from './routes/courses.js';
import assistantRouter from './routes/assistant.js';
import leadsRouter from './routes/leads.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173,http://localhost:5174';

app.use(cors({ origin: CLIENT_URL.split(',').map((item) => item.trim()) }));
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'Odisha Institute of Artificial Intelligence (OIAI) API', database: mongoose.connection.readyState === 1 ? 'connected' : 'demo-mode' });
});
app.use('/api/courses', coursesRouter);
app.use('/api/assistant', assistantRouter);
app.use('/api/leads', leadsRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong on the server.' });
});

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.warn('MongoDB unavailable; continuing with demo data:', error.message));
} else {
  console.log('MONGODB_URI not set; using demo data.');
}

app.listen(PORT, () => console.log(`Odisha AI Shuru API listening on http://localhost:${PORT}`));
