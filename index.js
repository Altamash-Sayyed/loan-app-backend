const express = require('express')
const mongoose = require('mongoose')
const cors =require('cors')
const cookiparser = require("cookie-parser");

const app = express()
const db = require ('./db.js')


db()
app.use(express.json())
app.use(cookiparser());

app.use(cors())


   


app.use('/api/loan', require('./routes/routes.js'))
  app.listen(5000, () => console.log('app is listen on port 5000'))