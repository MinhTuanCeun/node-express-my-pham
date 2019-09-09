const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

var magazineSchema = mongoose.Schema({
    id: {
        type: Object,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    urlImg: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true

    },
}, {
    timestamps: true
});

const magazine = mongoose.model('magazine', magazineSchema, 'magazine');

module.exports = magazine;