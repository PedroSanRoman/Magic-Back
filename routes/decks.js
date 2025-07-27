const express = require('express');
const router = express.Router();
const Deck = require('../models/Deck');

router.get('/', async (req, res) => {
  const decks = await Deck.find();
  res.json(decks);
});

router.post('/', async (req, res) => {
  const deck = new Deck(req.body);
  await deck.save();
  res.json(deck);
});

router.put('/:id', async (req, res) => {
  const deck = await Deck.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(deck);
});

module.exports = router;
