const Product = require('../models/product.model');

exports.findAll = (req, res) => {
    Product.find({})
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
}