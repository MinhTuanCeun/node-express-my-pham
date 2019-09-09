const express = require('express');
const router = express.Router();

const slideImg_controller = require('../controller/slide-img.controller.js');

router.get('/', slideImg_controller.findAll);

module.exports = router;