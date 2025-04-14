const express = require('express')
const cors = require('cors')
const ConnectDB = require('./Database/connect')
const SignUp = require('./Routes/signUp')
const LogIn = require('./Routes/logIn')
require('dotenv').config()


const app = express()
app.use(cors())
app.use(express.json())
app.use('/log-in',LogIn)
app.use('/sign-up',SignUp)

ConnectDB()

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('started listening on port '+PORT)
})
