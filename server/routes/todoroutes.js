// all routes
const express = require('express')
const { getTodos, createTodo, deleteTodo, updateTodo } = require('./todocontroller')
const router = express.Router()
const isLoggedIn = require('../middleware/isLoggedIn')

// run isloggedin middleware function and verify token before going to get todos endpoint
router.get('/', isLoggedIn, getTodos)
router.post('/', createTodo)
router.delete('/:id', deleteTodo)
router.put('/:id', updateTodo)


module.exports = router
