const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecentsSchema = new Schema({
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

const Recents = mongoose.model('Recents', RecentsSchema);
module.exports = Recents;
