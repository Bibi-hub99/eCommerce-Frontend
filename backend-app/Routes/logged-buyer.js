const express = require("express")
const {buyerFetchProducts,findOneProduct} = require("../CRUD/products")

const Router = express()

Router.get('/menu',buyerFetchProducts)
Router.get('/menu/:productID',findOneProduct)

module.exports = Router