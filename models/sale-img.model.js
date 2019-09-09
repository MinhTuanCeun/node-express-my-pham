const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var saleImgSchema = mongoose.Schema({
    id: {
        type: Object,
        required: true,
        unique: true
    },
    urlImg: {
        type: String,
        required: true
    },
    link: {
        type: String,
    }
}, {
    timestamps: true
});

const saleImg = mongoose.model('saleImg', saleImgSchema, 'sale_img');

module.exports = saleImg;