const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Kid = require('../models/kid')

const authUser = async (req, res, next)=>{

    try{
    const token = req.header('Authorization').replace('Bearer ', '')
       const decoded = jwt.verify(token, process.env.JWT_SECRET)
       const user = await User.findOne({_id: decoded._id, 'tokens.token':token})

       if(!user){
           throw new Error()
       }

       req.token = token
       req.user = user
       next()

    } catch(e){
    res.status(401).send({error: 'Please authenticate'});
    
    }

    const authKid = async (req, res, next)=>{

        try{
            const token = req.header('Authorization').replace('Bearer ', '')
               const decoded = jwt.verify(token, process.env.JWT_SECRET)
               const kid = await Kid.findOne({_id: decoded._id, 'tokens.token':token})
        
               if(!kid){
                   throw new Error()
               }
        
               req.token = token
               req.kid=kid
               next()
        
            } catch(e){
            res.status(401).send({error: 'Please authenticate'});
            
            }
    }

    module.exports = authUser
}

