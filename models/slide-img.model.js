const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var slideImgSchema = mongoose.Schema({
    id: {
        type: Object,
        required: true,
        unique: true
    },
    urlImg: {
        type: String,
        required: true
    },
    title: {
        type: String,
    }
}, {
    timestamps: true
});

const slideImg = mongoose.model('slideImg', slideImgSchema, 'slide_img');

module.exports = slideImg;