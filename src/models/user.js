const mongoose = require('mongoose')
const utils = require('./modelsUtils')


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

userSchema.pre('save' , async function(next){
    const user = this
    if(user.isModified('password')){

        user.password = await utils.passwordEncrypt(user.password)
    }
}

const User = mongoose.model('User', userSchema)

module.exports = User; 