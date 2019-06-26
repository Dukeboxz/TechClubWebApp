const bcrypt = require('bcryptjs')

const passwordEncrypt = async(password)=>{

    try{

        return await bcrypt.hash(password, 8)

    }catch(error){

        return error
    }

}

module.exports = passwordEncrypt