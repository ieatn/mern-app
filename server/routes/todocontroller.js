// get the todo db
const Todo = require('../models/TodoModel')


// CRUD functions
const getTodos = async (req, res) => {
    const allTodos = await Todo.find({})
    res.json(allTodos)
}
const createTodo = async (req, res) => {
    const {title} = req.body
    const todo = await Todo.create({title})
    res.json(todo)
}
const deleteTodo = async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id)
    await todo.remove()
    res.json(todo)
}
const updateTodo = async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findById(id)
    todo.title = req.body.title
    await todo.save()
    res.json(todo)
}


module.exports = {
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo
}
