const { Schema, model } = require('mongoose');

const FavoriteSchema = new Schema({
  name: String,
  image: String,
  oracle_id: String
});

module.exports = model('Favorite', FavoriteSchema);
