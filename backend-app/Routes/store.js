const express = require('express')
const {addProduct,sellerFetchProducts} = require("../CRUD/products")

const Router = express()

Router.get('/:sellerID',sellerFetchProducts)
Router.post('/add-items',addProduct)

module.exports = Router