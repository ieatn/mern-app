const User = require('../models/userModel')
// npm i jsonwebtoken
const jwt = require('jsonwebtoken')

// create a token for login and register
// this is username, password, and secret encoded and combined and mixed together
const createToken = (id) => {
    const token = jwt.sign({id}, process.env.SECRET)
    return token
}


// login
const loginUser = async (req, res) => {
    res.json({msg: 'login'})
}
// signup
const registerUser = async (req, res) => {
    const {email, password} = req.body
    try {
        // call the register method in user model that creates user in db and returns it
        const user = await User.register(email, password)

        // create user token using mongoose user default id
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        // throw error email already in use
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {registerUser, loginUser}