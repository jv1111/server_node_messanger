const mongoose = require("mongoose");
require("mongoose-type-email");//type: mongoose.SchemaTypes.Email

const UserSchema = mongoose.Schema({
    profileImg: {
        type: Object,
        default: {
            url: null,
            filePath: null
        }
    },
    username: {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        require: true
    },
    password: {
        type: String,
    },
    authType: {
        type: String,
        enum: ['local', 'google'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;