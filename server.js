const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const cardsRoutes = require('./routes/cards');
const favoritesRoutes = require('./routes/favorites');
const decksRoutes = require('./routes/decks');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/cards', cardsRoutes);
app.use('/api/favorites', favoritesRoutes);
app.use('/api/decks', decksRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(()=>console.log('✅ Mongo conectado'))
  .catch(err=>console.error('❌ Error Mongo', err));

app.listen(process.env.PORT, ()=>console.log(`✅ Backend en puerto ${process.env.PORT}`));
