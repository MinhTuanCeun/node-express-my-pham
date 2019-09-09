const express = require('express');
const router = express.Router();

const magazine_controller = require('../controller/magazine.controller.js');

router.get('/', magazine_controller.findAll);

module.exports = router;