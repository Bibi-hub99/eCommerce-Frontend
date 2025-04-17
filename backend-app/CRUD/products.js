const ProductModel = require("../Models/productModel")
const ProductDataModel = require("../Models/productDataModel")

const addProduct = async(req,res)=>{

    try{
        const {
            sellerID,
            product_name,product_price,product_category,
            product_description,product_tags,product_in_stock,
            product_available,product_on_sale,product_prev_price,
            product_main_image,product_imageURL2,product_imageURL3,
            product_imageURL4,product_date_relevance,product_delivery,product_pickUp
        } = req.body

        const newProduct = new ProductModel({
            sellerID,
            product_name,product_price,product_category,
            product_description,product_tags,product_in_stock,
            product_available,product_on_sale,product_prev_price,
            product_main_image,product_imageURL2,product_imageURL3,
            product_imageURL4,product_date_relevance,product_delivery,product_pickUp
        })
        const createdProduct = await newProduct.save()
        console.log("new product added successfully")
        console.log(createdProduct)
        const newProductData = new ProductDataModel({
            productDataID:createdProduct._id,
            productComments:[],
        })
        console.log("created a product data collection")
        console.log(newProductData)

        res.json(true)
    }catch(err){
        console.log(err)
        return res.json(false)
    }
}

const buyerFetchProducts = async(req,res)=>{
    try{
        const response = await ProductModel.findAllProducts()
        return res.json(response)
    }catch(err){
        console.log(err)
    }
}

const findOneProduct = async(req,res)=>{

    try{
        const {productID} = req.params
        const singleProduct = await ProductModel.findOneProduct(productID)
        console.log(productID)
        return res.json(singleProduct)
    }catch(err){
        console.log(err)
    }
}

const sellerFetchProducts = async(req,res)=>{
    const {sellerID} = req.params
    try{
        const sellerProducts = await ProductModel.findSellerProducts(sellerID)
        return res.json(sellerProducts)
    }catch(err){
        console.log(err)
    }
}

module.exports = {addProduct,buyerFetchProducts,sellerFetchProducts,findOneProduct}