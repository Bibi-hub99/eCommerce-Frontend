const mongoose = require('mongoose')

const buyerSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        minLength:1,
        unique:true,
        get:(v)=>v.slice(0,3)+'*********'+'@gmail.com',
    },
    telephone:{
        type:String,
        required:true,
        minLength:10,
        maxLength:10,
        unique:true
    },
    username:{
        type:String,
        required:true,
        minLength:1,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        unique:true,
        //set:(v)=>v.concat('****')
    },
    userType:{
        type:String,
        required:true,
    }
})

buyerSchema.methods.resetPassWord = async function resetPassWord(id,password){

    try{

        return await mongoose.model('buyers').findByIdAndUpdate(id,{
            $set:{
            password:password
            }
        })

    }catch(err){
        console.log(err)
    }

}

buyerSchema.methods.resetUsername = async function resetUsername(id,username){

    try{
        return await mongoose.model('buyers').findByIdAndUpdate(id,{
            $set:{
                username:username
            }
        })
    }catch(err){
        console.log(err)
    }

}

buyerSchema.methods.resetEmail = async function resetEmail(id,email){

    try{
        return await mongoose.model('buyers').findByIdAndUpdate(id,{
            $set:{
                email:email   
            }
        })
    }catch(err){
        console.log(err)
    }

}

buyerSchema.methods.resetTelephone = async function(id,telephone){
    try{
        return await mongoose.model('buyers').findByIdAndUpdate(id,{
            $set:{
                telephone:telephone
            }
        })
    }catch(err){
        console.log(err)
    }
}


buyerSchema.statics.findAccount = async function findAccount(username,password){
    try{
        const saltedPass = password
        return await this.findOne({
            username:{$eq:username},
            password:{$eq:saltedPass}
        })
    }catch(err){
        console.log(err)
    }
}

const BuyerModel = mongoose.model('buyers',buyerSchema,'buyers')
module.exports = BuyerModel