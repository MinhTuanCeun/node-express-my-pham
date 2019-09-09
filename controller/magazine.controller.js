const Magazine = require('../models/magazine.model');

exports.findAll = (req, res) => {
    Magazine.find({})
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
}