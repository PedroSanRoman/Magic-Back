const { Schema, model } = require('mongoose');

const CardSchema = new Schema({
  name: String,
  image: String,
  oracle_id: String
});

const DeckSchema = new Schema({
  name: String,
  main: [CardSchema],
  sideboard: [CardSchema]
});

module.exports = model('Deck', DeckSchema);
