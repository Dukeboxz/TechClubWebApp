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

router.get('/badge/:id', async (req, res)=>{

    try{
        const badge = await Badge.findById(req.parms.id)
        if(!badge){

            throw new Error()
        }

        res.send(badge)
        

    }catch(e){

        res.status(404).send()
    }
} )

router.patch('/badge/', async (req, res)=>{

    const updates = Object.keys(req.body)
    const allowedUpdates = ['number', 'name', 'pointsNeeded', 'image']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid Updates'})
        
    }

    try{
        const badge = req.badge

        updates.forEach((update)=> badge[update] = req.body[update])
        await badge.save()

    }catch(error){
        res.status(400).send(error)
    }
})

router.delete('/badge/:id', async (req, res)=> {
    try{

        const badge = await Badge.findOneAndDelete({_id: req.params.id})

        if(!badge){
            return res.status(404).send()
        }
        res.send(badge)
    }catch(error){
        res.status(500).send(error)
    }
})


module.exports = router