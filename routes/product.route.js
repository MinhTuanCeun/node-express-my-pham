const express = require('express');
const router = express.Router();

const product_controller = require('../controller/product.controller.js');

router.get('/', product_controller.findAll);

module.exports = router;