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

const router = require('./routes/todoroutes')
app.use('/', router)
    