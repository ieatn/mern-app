const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// register a new user by creating a static function using mongoose model 
userSchema.statics.register = async function(username, password) {
    // this keyword only works in regular function 
    const exists = await this.findOne({username})
    if (exists) {
        throw Error('username already in use')
    } 
    const user = await this.create({username, password})
    
    return user
}

userSchema.statics.login = async function(username, password) {
    const user = await this.findOne({username})
    if (!user) {
        throw Error('Incorrect username')
    }
    const match = await user.password === password
    if (!match) {
        throw Error('Incorrect password')
    }
    return user
}

module.exports = mongoose.model('User', userSchema)