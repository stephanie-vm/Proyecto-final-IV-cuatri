const express = require('express');

const router = express.Router();
const playlistConstroller = require('../controllers/playlist.controller');

router.post('/playlist', playlistConstroller.create);
router.get('/playlist', playlistConstroller.getPlaylist);

module.exports = router;
