const mongoose = require('mongoose')

// create todo collection in mongodb atlas
const Schema = mongoose.Schema
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean
    },
})

module.exports = mongoose.model('Todo', TodoSchema)