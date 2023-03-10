const mongoose = require('mongoose');
const connection = require('../libs/connection');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    src: {
       type: String,
       required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    description: [{
        type: [String],
    }],
})

module.exports = connection.model('Product', productSchema)
