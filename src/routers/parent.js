const express = require('express')
const router = new express.router
const Parent = require('../models/parent')

router.post('/parent', async (req, res)=> {
    
    const parent = new Parent(req.body)
    try{
        await parent.save(); 
        res.status(201).send()
    }catch(error){
        res.status(400).send(e)
    }
})

router.get('/parent/:id', async (req, res)=>{
    try{

        const parent = await Parent.findById(req.parms.id)

        if(!parent){
            throw new Error
        }

        res.send(parent)

    } catch(error){
        res.status(404).send()
    }
})

router.get('/parent/children/:id', async (req, res)=>{

    try{

        //TODO: Complete so that kids ids are returned and kids are returned to fron end


    }catch(e){
        res.status(404).send(e)
    }
})

module.exports = router
