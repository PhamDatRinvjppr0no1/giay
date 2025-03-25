const mongoose = require('mongoose');

const GiaySchema = new mongoose.Schema({
    Ten: {
        type: String,
        required: true
    },
    
    Gia: {
        type: Number
    }
});

const giayModel = new mongoose.model('product', GiaySchema);

module.exports = giayModel;