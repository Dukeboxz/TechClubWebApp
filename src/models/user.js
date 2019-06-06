const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    isAdmin: {
        type: Boolean, 
        required: true
    },
    FirstName: {
        type: String, 
        required: true, 
        trim: true
    }, 
    lastName:{
        type: String, 
        required: true, 
        trim: true
    }, 
        email: {
        type: String, 
        required: true, 
        unique:true,
        trim: true, 
        lowercase: true
    },
    password:{
      
        type: String, 
        required: true, 
        trim: true
    }


})

const User = mongoose.model('User', userSchema)

module.exports = User; 