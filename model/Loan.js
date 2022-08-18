const mongoose = require('mongoose')


const loanSchema = mongoose.Schema({
    
    firstName:{
        type:String,required:true
    }, 
      lastName:{
        type:String,required:true
    },
    phone:{
        type:Number,required:true
    },
    email:{
        type:String,required:true
    }, birth:{
        type:String,required:true
    },
    adress:{
        type:String,required:true
    },
    city:{
        type:String,required:true
    },
     pinCode:{
        type:Number,required:true
    },
    state:{
        type:String,required:true
    },
    bName:{
        type:String,required:true

    },
    gst:{
        type:String,required:true

    },bCity:{
        type:String,required:true

    },bCategory:{
        type:String,required:true

    },id:{
        type:String,required:true

    },idNo:{
        type:String,required:true

    },amount:{
        type:String,required:true

    },period:{
        type:Number,required:true

    },intrest:{
        type:String,required:true

    },comment:{
        type:String,required:true

    },
    date:{
type:Date ,default:Date.now
    }
})

const Loan = mongoose.model('loan',loanSchema)

module.exports = Loan