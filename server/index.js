require('dotenv').config()

const express = require('express')
const app = express()
// need for req.body for post request
app.use(express.json())

// npm i mongoose
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI) 
    .then(() => {
        console.log('connected to db')
        app.listen(process.env.PORT, () => {
            console.log('listening to port', process.env.PORT)
        })
    })

const Todo = require('./models/TodoModel')

app.get('/', async (req, res) => {
    const allTodos = await Todo.find({})
    res.json(allTodos)
})
app.post('/', async (req, res) => {
    const {title} = req.body
    const todo = await Todo.create({title})
    res.json(todo)
})
app.delete('/:id', async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id)
    await todo.remove()
    res.json(todo)
})
app.put('/:id', async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id)
    todo.title = req.body.title
    await todo.save()
    res.json(todo)
})