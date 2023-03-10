require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')
mongoose.set('strictQuery', false);

const cors = require('cors')
app.use(cors({origin: '*'}))

mongoose.connect(process.env.MONGODB_URI) 
    .then(() => {
        console.log('connected to db')
        app.listen(process.env.PORT, () => {
            console.log('listening to port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log('Error connecting to db:', err)
    })

const todoroutes = require('./routes/todoroutes')
app.use('/', todoroutes)

const userRoutes = require('./routes/userroutes')
app.use('/', userRoutes)  

app.get('/test', (req, res) => {
    res.send('testing')
})

module.exports = app
