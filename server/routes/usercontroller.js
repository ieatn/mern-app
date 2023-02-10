// login
const loginUser = async (req, res) => {
    res.json({msg: 'login'})
}
// signup
const registerUser = async (req, res) => {
    res.json({msg: 'register'})
}

module.exports = {registerUser, loginUser}