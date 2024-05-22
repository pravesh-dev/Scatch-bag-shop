const mongoose = require('mongoose');

const usersSchema = {
    fullName: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String
}

module.exports = mongoose.model('user', usersSchema);