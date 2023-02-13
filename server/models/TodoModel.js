const mongoose = require('mongoose')

// create todo collection in mongodb atlas
const Schema = mongoose.Schema
const TodoSchema = new Schema({
    title: {
        type: String,
        // server crashing every time checkbox is checked and put request is called because of this
        // because title isn't being included in the put request?
        // required: true,
    },
    completed: {
        type: Boolean
    },
})

module.exports = mongoose.model('Todo', TodoSchema)