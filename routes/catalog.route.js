const express = require('express');
const router = express.Router();

const catalog_controller = require('../controller/catalog.controller.js');

router.get('/', catalog_controller.findAll);

module.exports = router;