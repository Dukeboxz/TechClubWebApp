const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({

    isOrganiser: {
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
    age: {
        type: Number, 

    }, 
    nickName :{
        type: String, 
        trim: true,

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
    },
    parentName: {
        type: String, 
        required: true
    },
    avatarPicture: {
        type: Buffer
    }


})

const User = mongoose.model('User', userSchema)

module.exports = User; 