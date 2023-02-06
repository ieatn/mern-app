const express = require('express')
const router = express.Router()
const Todo = require('../models/TodoModel')

router.get('/', async (req, res) => {
    const allTodos = await Todo.find({})
    res.json(allTodos)
})
router.post('/', async (req, res) => {
    const {title} = req.body
    const todo = await Todo.create({title})
    res.json(todo)
})
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id)
    await todo.remove()
    res.json(todo)
})
router.put('/:id', async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id)
    todo.title = req.body.title
    await todo.save()
    res.json(todo)
})

module.exports = router