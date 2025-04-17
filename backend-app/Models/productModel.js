const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    sellerID:{type:String,required:true},
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true,
    },
    product_category:{
        type:String,
        required:true
    },
    product_description:{
        type:String,
        required:true
    },
    product_tags:{type:[],required:true},
    product_in_stock:{type:Number,required:true},
    product_available:{type:Boolean,required:true},
    product_on_sale:{type:Boolean,required:true},
    product_prev_price:{type:Number,default:0},
    product_main_image:{type:String,required:true,unique:true},
    product_imageURL2:{type:String,required:true,unique:true},
    product_imageURL3:{type:String,required:true,unique:true},
    product_imageURL4:{type:String,required:true,unique:true},
    product_date_relevance:{type:Date,required:true,default:new Date()},
    product_delivery:{type:Boolean,required:true},
    product_pickUp:{type:Boolean,required:true},
})

productSchema.methods.findSimilarCategory = async function findSimilarCategory(){

    try{
        return await mongoose.model("products").find({
            product_category:{$eq:this.product_category}
        })
    }catch(err){
        console.log(err)
    }

}

productSchema.statics.updateProduct = async function updateProduct(id,product){

    try{
        const productModify = {...product}
        await this.findByIdAndUpdate(id,productModify)
        return await this.find({})
    }catch(err){
        console.log(err)
    }

}

productSchema.statics.findAllProducts = async function findAllProducts(){

    try{
        return await this.find({})
    }catch(err){
        console.log(err)
    }

}

productSchema.statics.findOneProduct = async function findOneProduct(id){
    try{
        return await this.findById(id)
    }catch(err){
        console.log(err)
    }
}

productSchema.statics.findSellerProducts = async function findSellerProducts(id){
    try{
        return await this.find({
            sellerID:{$eq:id}
        })
    }catch(err){
        console.log(err)
    }
}

const ProductModel = mongoose.model("products",productSchema,"products")

module.exports = ProductModel