// ran into jwt is not defined error
const jwt = require('jsonwebtoken')


// create 'authorization' in headers for postman get todos route and pass in bearer <token>
// i passed in a token from a user i created already 
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        res.status(401).send('error: you must be logged in')
    } else {
        // get the token string from header
        const token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(403).send('invalid credentials')
            } else {
                next()
            }
        })
    }
}