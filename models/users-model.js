const mongoose = require('mongoose');

const usersSchema = {
    fullName: {
        type:String,
        minLength: 3,
        trim: true,
    },
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String
}

module.exports = mongoose.model('user', usersSchema);