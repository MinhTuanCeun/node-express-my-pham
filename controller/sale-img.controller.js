const SaleImg = require('../models/sale-img.model');

exports.findImgSale = (req, res) => {
    SaleImg.find({}).limit(2)
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
}


exports.findFullBanner = (req, res) => {
    SaleImg.findOne({ banner: true })
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
}