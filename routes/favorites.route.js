const express = require('express');

const router = express.Router();
const favoritesConstroller = require('../controllers/favorites.controllers');

router.post('/favorites', favoritesConstroller.create);
router.get('/favorites', favoritesConstroller.getFavorites);

module.exports = router;
