const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(q)}`);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error buscando carta en Scryfall' });
  }
});

module.exports = router;
