const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({

    number: {
        type: Number, 
        required: true, 
        unique: true
    }, 
    name: {
        type: String, 
        unique: true, 
        required: true, 
    },
     description: {
        type: String
    }, 
    level: {
        type: Number, 
        required: true
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task