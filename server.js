import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import http from 'http';
const { Pool } = pkg;

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'moodbooks',
  password: '2003',
  port: 5432,
});

process.on('beforeExit', () => pool.end());

app.post('/books/filter', async (req, res) => {
  const { moods } = req.body;
  if (!moods || moods.length === 0) return res.json([]);

  try {
    const query = `
      SELECT * FROM books
      WHERE moods && $1::text[]
      ORDER BY RANDOM()
      LIMIT 1;
    `;
    const { rows } = await pool.query(query, [moods]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

const httpServer = http.createServer(app);

httpServer.listen(PORT, HOST, () =>
  console.log(`Server is listening at http://${HOST}:${PORT}`)
);
