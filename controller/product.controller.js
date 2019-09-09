const Product = require('../models/product.model');
const ObjectId = require('mongodb').ObjectID;

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

exports.findById = (req, res) => {
    const id = req.params.id;
    Product.findOne({ _id: ObjectId(id) })
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
}