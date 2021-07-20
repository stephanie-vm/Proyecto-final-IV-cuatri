const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FavoritesSchema = new Schema({
  nameList: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    required: true,
  },
  songsList: {
    type: Array,
    required: true,
  },

}, { versionKey: false });

const Favorites = mongoose.model('Favorites', FavoritesSchema);
module.exports = Favorites;
