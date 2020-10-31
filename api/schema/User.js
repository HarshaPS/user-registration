const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for Registration
let UserSchema = new Schema({
    first_name: {
        type: String,
        required: [true, "First name is required"],

    },
    last_name: {
        type: String,
        required: [true, "Last name is required"]
    },
    user_name: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "User name cannot be blank"],
        index: true,
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: 'User'
});

module.exports = mongoose.model('User', UserSchema);