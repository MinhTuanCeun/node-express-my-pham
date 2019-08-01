const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var productSchema = mongoose.Schema({
    id: {
        type: Object,
        required: true,
        unique: true
    },
    catalogId: {
        type: Object,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    urlImg: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
    },
    created: {
        type: Date,
        required: true

    },
    qty: {
        type: Number,
        required: true

    },
    inventory: {
        type: Number,
        required: true

    },
    size: {
        type: String,
    }
}, {
    timestamps: true
});

const product = mongoose.model('product', productSchema, 'product');

module.exports = product;