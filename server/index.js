require('dotenv').config()

const express = require('express')
const app = express()
// need for req.body for post request
app.use(express.json())

// npm i mongoose
const mongoose = require('mongoose')

// npm i cors to fix cors error when front end fetching from a different localhost
const cors = require('cors')
app.use(cors({origin: '*'}))

mongoose.connect(process.env.MONGODB_URI) 
    .then(() => {
        console.log('connected to db')
        app.listen(process.env.PORT, () => {
            console.log('listening to port', process.env.PORT)
        })
    })

const router = require('./routes/todoroutes')
app.use('/', router)
    