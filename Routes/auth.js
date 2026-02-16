const express = require('express')
const router = express.Router();


router.get('/auth',(req,res)=>{
    //code
    console.log("hello auth")
    res.send("hello auth")
})

module.exports = router