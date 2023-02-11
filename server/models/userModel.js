const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
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
userSchema.statics.register = async function(email, password) {
    // this keyword only works in regular function 
    const exists = await this.findOne({email})
    if (exists) {
        throw Error('Email already in use')
    } 
    const user = await this.create({email, password})
    
    return user
}

module.exports = mongoose.model('User', userSchema)