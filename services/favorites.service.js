const Favorites = require('../models/favorites.model');

const favoritesService = {};

favoritesService.createFavorites = async function ({ nameList, userId, songsList }) {
  try {
    const favorites = new Favorites({ nameList, userId, songsList });
    const newFavorites = await favorites.save();
    return newFavorites;
  } catch (e) {
    throw new Error('Error while save favorites');
  }
};

favoritesService.getFavorites = async function () {
  try {
    const listFavorites = await Favorites.find({});
    return listFavorites;
  } catch (e) {
    throw new Error('Error while Paginating favorites list');
  }
};
module.exports = favoritesService;
