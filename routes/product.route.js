const express = require('express');
const router = express.Router();

const product_controller = require('../controller/product.controller.js');

router.get('/hot-deal', product_controller.findAll);
router.get('/new-products', product_controller.findAll);
router.get('/hot-products', product_controller.findAll);
router.get('/:id', product_controller.findById);

module.exports = router;