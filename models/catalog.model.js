const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var catalogSchema = mongoose.Schema({
    id: {
        type: Object,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
    }
}, {
    timestamps: true
});

const catalog = mongoose.model('catalog', catalogSchema, 'catalog');

module.exports = catalog;