const mongoose = require('mongoose')
const validator = require('validator')
const utils = require('./modelsUtils')

const kidSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age:{
        type: Number, 
        default: 0,
        validate(value){
            if(value < 0 ){
                throw new Error("Age Must be positive number")
            }
            if(value > 13){
                throw new Error("Too old to be a tech club")
            }
        }

    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email not valid')
            }
        }
    },
    password:{
        type: String, 
        required: true, 
        trim: true, 
        minlength: 7,
        validate(value){
            if(value.toLowerCase() == '123456'){
                throw new Error('Password not valid')
            }
            if(value.toLowerCase().includes('password')){
                throw new Error('Password Not Valid')
            }
        }, 
    },
    parentName: {
        type: String, 
        required: true
    }, 
    avatar: {
        type: Buffer
    },
    points: {
        type: Number,
        default: 0, 
        validate(value){
            if(value < 0){
                value = 0
            }
        }
    },
    badges:[{
        badge:{
            type: Number
        }
    }] ,
    tasksCompleted: [{
        task:{
            type: Number
        }
    }]
    

})

kidSchema.pre('save', async function(next){
    const user = this
    if(user.isModified('password')){
        user.password = await utils.passwordEncrypt(user.password)
    }
    next()
})

const Kid = mongoose.model('Kid', kidSchema)

module.exports = Kid