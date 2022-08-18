const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const cookiparser = require("cookie-parser");
require('dotenv').config()
const app = express()
const db = require ('./db.js')


db()
app.use(express.json())
app.use(cookiparser());

app.use(cors())


   app.get('/',(req,res)=>{
res.send("success")
   })

const port = process.env.PORT || 5000
app.use('/api/loan', require('./routes/routes.js'))
  app.listen(port, () => console.log('app is listen on port 5000'))