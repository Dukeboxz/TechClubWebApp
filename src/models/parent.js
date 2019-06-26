const mongoose = require('mongoose')
const validator = require('validator')

const parentSchema =new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true, 
        lowercase:true, 
        validate(value){

            if(!validator.isEmail(value)){
                throw new Error('Email not valid')
            }
        }
    },
    contactNo: {
        type: String, 
        
    }, 
    kids:[{
        kid:{
            type: Number
        }
    }]

})

const Parent = mongoose.model('Parent', parentSchema)

module.exports = Parent