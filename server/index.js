require('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose')

const cors = require('cors')
app.use(cors({origin: '*'}))

mongoose.connect(process.env.MONGODB_URI) 
    .then(() => {
        console.log('connected to db')
        app.listen(process.env.PORT, () => {
            console.log('listening to port', process.env.PORT)
        })
    })

const todoroutes = require('./routes/todoroutes')
app.use('/', todoroutes)

const userRoutes = require('./routes/userroutes')
app.use('/', userRoutes)    

module.exports = app
