const express = require('express');
const router = express.Router();
const { getHome, getRay } = require('../controllers/homeControllers')
router.get('/', getHome)

router.get('/ray', getRay)

module.exports = router;