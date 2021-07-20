const express = require('express');

const router = express.Router();
const userConstroller = require('../controllers/user.controllers');

router.post('/user', userConstroller.create);
router.get('/user', userConstroller.getUsers);

module.exports = router;
