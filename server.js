const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Medicine search endpoint
app.get('/api/medicines', async (req, res) => {
  try {
    const { search } = req.query;
    
    if (!search) {
      return res.status(400).json({ error: 'Search parameter is required' });
    }

    const result = await db.query(
      'SELECT id, name FROM medicines WHERE name ILIKE $1 ORDER BY name LIMIT 10',
      [`${search}%`]
    );

    res.json(result.rows);
  } catch (err) {
    console.error('Error searching medicines:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});