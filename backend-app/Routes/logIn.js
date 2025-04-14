const {logIn} = require('../CRUD/userLogin')
const express = require('express')

const Router = express()

Router.post('/',logIn)

module.exports = Router