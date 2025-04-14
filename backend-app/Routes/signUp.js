const express = require('express')
const {createUser} = require('../CRUD/userLogin')
const Router = express()

Router.post('/',createUser)

module.exports = Router