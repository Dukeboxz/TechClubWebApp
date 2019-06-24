const express = require('express')
const router = new express.Router()
const User = require('../models/user')



router.post('/users', async (req, res)=>{
    const user = new User(req.body)

    try{
        await user.save()

        res.status(201).send({user})
    } catch(e){

        res.send(400).send(e)
    }

})



router.post('/users/login/', async (req, res)=>{
    try{

        
        
    }catch(error){
        res.status(400).send()
    }
})