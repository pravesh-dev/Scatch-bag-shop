const mongoose = require('mongoose');

const ownerSchema = {
    fullName: String,
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    picture: String,
    gstNo: String
}

module.exports = mongoose.model('owner', ownerSchema);