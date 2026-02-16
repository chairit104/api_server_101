const express = require('express')
const router = express.Router();


router.get('/product',(req,res)=>{
    //code
    console.log("hello product")
    res.send("hello product")
})

module.exports = router