const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    content: String,
    creatorToken: String
})

module.exports = mongoose.model('todo', TodoSchema)