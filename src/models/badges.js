const mongoose = require('mongoose')
const validator = require('validator')

const badgesSchema = new mongoose.Schema({

    number: {
        type: Number,
        unique: true
    }, 

    name:{
        type: String, 
        required: true,
        unique: true
    }, 
    pointNeeded: {
        type: Number, 
        required: true
    },
    image: {
        type: Buffer, 
        required: true
    }
})

const Badge = mongoose.model('Badge', badgesSchema)

module.exports = Badge; 