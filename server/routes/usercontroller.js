const User = require('../models/userModel')

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
        res.status(200).json({email, user})
    } catch (error) {
        // throw error email already in use
        res.status(400).json({error: error.message})
    }
    
}

module.exports = {registerUser, loginUser}