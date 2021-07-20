const express = require('express');

const router = express.Router();
const recentsConstroller = require('../controllers/recents.controllers');

router.post('/recents', recentsConstroller.create);
router.get('/recents', recentsConstroller.getRecents);

module.exports = router;
