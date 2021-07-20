const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playlistSchema = new Schema({
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

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
