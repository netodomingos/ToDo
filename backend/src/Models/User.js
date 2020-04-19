const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    token: String,
    name: String,
    email: { 
        type: String, 
        required: true,
        unique: true,
        lowercase: true
    },
    password: { 
        type: String, 
        required: true,
    },
    todo: [{
        type: Schema.Types.String,
        ref: 'todo'
    }]
})

module.exports = mongoose.model('User', UserSchema)