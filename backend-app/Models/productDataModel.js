const mongoose = require("mongoose")

const productDataSchema = new mongoose.Schema({
    productDataID:{type:String},
    productComments:{type:[{userID:String,productComment:String}]},
    ratings:{type:Number,default:0},
    purchases:{type:Number,default:0}
})

const ProductDataModel = mongoose.model("product_data",productDataSchema,"product_data")

module.exports = ProductDataModel