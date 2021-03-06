const Catalog = require('../models/catalog.model');
const ObjectId = require('mongodb').ObjectID;

exports.findAll = (req, res) => {
    Catalog.find({})
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
    Catalog.findOne({ _id: ObjectId(id) })
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
}