const express = require('express')
const Loan = require('../model/Loan.js')
 const router = express.Router()

router.post('/loan',async (req,res)=>{

    try {
        
    
const {  firstName,lastName,phone,email, birth,adress,city,pinCode,state, bName,gst,badress,bCity,bCategory,id,idNo,amount,period,intrest,comment} =req.body

const phn = await Loan.findOne({phone:req.body.phone})

if(phn) return res.status(403).send('phone no is exist')

const loan = new Loan({  firstName,lastName,phone,email, birth,adress,city,pinCode,state, bName,gst,badress,bCity,bCategory,id,idNo,amount,period,intrest,comment})
 await loan.save()
res.status(202).send(loan)

} catch (error) {
        res.send(error.message)
}
})

router.get('/all',async (req,res)=>{
    try {
        
    const loan = await Loan.find()

    res.send(loan)
} catch (error) {
        
}
})


module.exports = router