const mongoose = require('mongoose')

const sellerSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        minLength:1,
        unique:true,
        get:(v)=>v.slice(0,3)+'*********'+'@gmail.com'
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
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        unique:true,
    },
    userType:{
        type:String,
        required:true
    }

})

sellerSchema.methods.resetEmail = async function resetEmail(id,email){
    try{
        return await mongoose.model('sellers').findByIdAndUpdate(id,{
            $set:{
                email:email      
            }
        })
    }catch(err){
        console.log(err)
    }
}

sellerSchema.methods.resetTelephone = async function resetTelephone(id,telephone){

    try{
        return await mongoose.model("sellers").findByIdAndUpdate(id,{
            $set:{
                telephone:telephone
            }
        })
    }catch(err){
        console.log(err)
    }

}

sellerSchema.methods.resetUsername = async function resetUsername(id,username){

    try{
        return await mongoose.model("sellers").findByIdAndUpdate(id,{
            $set:{
                username:username
            }
        })
    }catch(err){
        console.log(err)
    }

}

sellerSchema.methods.resetPassword = async function reserPassword(id,password){

    try{
        return await mongoose.model("sellers").findByIdAndUpdate(id,{
            $set:{
                password:password
            }
        })
    }catch(err){
        console.log(err)
    }

}

sellerSchema.statics.findAccount = async function findAccount(username,password){

    try{
        return await this.findOne({
            username:{$eq:username},
            password:{$eq:password}
        })
    }catch(err){
        console.log(err)
    }

}

const SellerModel = mongoose.model("sellers",sellerSchema,"sellers")

module.exports = SellerModel