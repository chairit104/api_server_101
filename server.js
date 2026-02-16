const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const {readdirSync} = require(('fs'))

// routers
// const authRouter = require('./Routes/auth')
// const productRouter = require('./Routes/product')

//app
const app = express();

//middleware
app.use(morgan("dev"))

// Route 1 ไม่นิยมเท่าไหร่
app.get('/register',(req,res)=>{
    // code 
    console.log("hello register")
    res.send("Hello Goodmornimg")
})

// Route 2
// app.use('/api', authRouter)
// app.use('/api', productRouter)

// Route 3
readdirSync('./Routes').map((r)=>app.use('/api',require(`./Routes/${r}`)))

// ('./Routes/'+r)



app.listen(5000,()=>console.log('Server is Runing on port 5000'))