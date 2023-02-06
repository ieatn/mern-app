require('dotenv').config()

const express = require('express')
const app = express()
app.listen(process.env.PORT, () => {
    console.log('listening to port', process.env.PORT)
})
// routes
app.get('/', (req, res) => {
    res.json({msg: 'get all'})
})
app.post('/', (req, res) => {
    res.json({msg: 'create'})
})
app.delete('/:id', (req, res) => {
    res.json({msg: 'delete'})
})
app.put('/:id', (req, res) => {
    res.json({msg: 'update'})
})