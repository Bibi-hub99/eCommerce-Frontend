
const createUser = async(req,res)=>{
    try{
        const {email,telephone,username,password,userType} = req.body
        console.log(email,telephone,username,password,userType)
        return res.json(true)
    }catch(err){
        console.log(err)
        return res.json(false)
    }
}

const logIn = async(req,res)=>{
    try{
        const {username,password,userType} = req.body;
        return res.json({username,password,userType})
    }catch(err){
        console.log(err)
        return res.json(false)
    }
}

module.exports = {createUser,logIn}