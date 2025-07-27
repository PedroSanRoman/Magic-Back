const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');

router.get('/', async (req, res) => {
  const favs = await Favorite.find();
  res.json(favs);
});

router.post('/', async (req, res) => {
  const fav = new Favorite(req.body);
  await fav.save();
  res.json(fav);
});

router.delete('/:id', async (req, res) => {
  await Favorite.findByIdAndDelete(req.params.id);
  res.json({ message: 'Eliminado' });
});

module.exports = router;
