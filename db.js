const mongoose = require('mongoose')
const url = "mongodb+srv://altamashsayyed023:928404@cluster0.9sjh5.mongodb.net/loanapp?retryWrites=true&w=majority"

const db =()=>{

     mongoose.connect(url)
    //  ,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('.....')
}

module.exports = db