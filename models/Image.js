const mongoose = require('mongoose');
const connection = require('../libs/connection');

const imageSchema = new mongoose.Schema({
    img: {
        data: Buffer,
        contentType: String,
    }
})


module.exports = connection.model('Image', imageSchema);
