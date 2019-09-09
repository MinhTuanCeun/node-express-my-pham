const express = require('express');
const router = express.Router();

const saleImg_controller = require('../controller/sale-img.controller.js');

router.get('/', saleImg_controller.findImgSale);
router.get('/full-banner', saleImg_controller.findFullBanner);

module.exports = router;