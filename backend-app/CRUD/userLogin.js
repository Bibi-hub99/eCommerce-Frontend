const BuyerSchema = require("../Models/buyer")
const SellerModel = require("../Models/seller")

const createUser = async(req,res)=>{
    try{
        const {email,telephone,username,password,userType} = req.body
        if(userType === 'buyer'){
            const newBuyer = new BuyerSchema({
                email,
                telephone,
                username,
                password,
                userType
            })
            await newBuyer.save()
            console.log('buyer account created successfully')
            return res.json(true)
        }else if(userType === 'seller'){
            const newSeller = new SellerModel({
                email,
                telephone,
                username,
                password,
                userType
            })
            await newSeller.save()
            console.log('seller account created successfully')
            return res.json(true)
        }
    }catch(err){
        console.log(err)
        return res.json(false)
    }
}

const logIn = async(req,res)=>{
    try{
        const {username,password,userType} = req.body;
        if(userType === 'buyer'){
            const findUser = await BuyerSchema.findAccount(username,password)
            if(findUser){
                return res.json({...findUser,pathTo:'logged-buyer',access:true})
            }else{
                return res.json({access:false})
            }
        }else if(userType === 'seller'){
            const findUser = await SellerModel.findAccount(username,password)
            if(findUser){
                return res.json({...findUser,pathTo:'store',access:true})
            }else{
                return res.json({access:false})
            }
        }
    }catch(err){
        console.log(err)
        return res.json(false)
    }
}

module.exports = {createUser,logIn}