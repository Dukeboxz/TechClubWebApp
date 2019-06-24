const express =require('express')
const router = new express.Router()
const Badge = require('../models/badges')

router.post('/badge', async (req,res)=>{

    const badge = new Badge(req.body)
    try{
        await badge.save(); 
        res.status(201).send()
    } catch(e){
        res.status(400).send(e)
    }
})