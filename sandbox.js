const { Pool } = require('pg');

const connectionOptions = {
  user: 'postgres',
  host: 'localhost',
  database: 'moodbooks',
  password: '2003',
  port: 5432,
};

const pool = new Pool(connectionOptions);

process.on('beforeExit', () => pool.end());

app.post('/books/filter', async (req, res) => {
    const { moods } = req.body;
    if (!moods || moods.length === 0) return res.json([]);
  
    try {
      const query = `
        SELECT * FROM books
        WHERE moods && $1::text[]
        LIMIT 1;
      `;
      const { rows } = await pool.query(query, [moods]);
      res.json(rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  });