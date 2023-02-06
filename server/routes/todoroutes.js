// all routes
const express = require('express')
const { getTodos, createTodo, deleteTodo, updateTodo } = require('./todocontroller')
const router = express.Router()


router.get('/', getTodos)
router.post('/', createTodo)
router.delete('/:id', deleteTodo)
router.put('/:id', updateTodo)


module.exports = router
