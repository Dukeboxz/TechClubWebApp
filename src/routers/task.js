const express = require('express')
const router = new express.Router()
const Task = require('../models/tasks')

router.post('/tasks', async (req, res)=>{

    const Task = new Task({
        ...req.body
    })

    try{
        await Task.save()
        res.status(201).send(task)
    }catch(error){
        res.status(500).send(error)
    }
} )

module.exports = router