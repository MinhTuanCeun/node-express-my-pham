const SlideImg = require('../models/slide-img.model');

exports.findAll = (req, res) => {
    SlideImg.find({})
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
}