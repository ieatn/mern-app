// login
const loginUser = async (req, res) => {
    res.json({msg: 'login'})
}
// signup
const signupUser = async (req, res) => {
    res.json({msg: 'signup'})
}

module.exports = {signupUser, loginUser}