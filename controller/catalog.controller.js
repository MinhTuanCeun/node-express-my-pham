const Catalog = require('../models/catalog.model');

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