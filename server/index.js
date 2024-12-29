require("dotenv").config();//dotenv config
const express = require("express");//server config
const app = express();//express in app 

const connect = require('./db/config')
const cors = require("cors");
const router = require('./Routes/router')
const port = 5000;


app.use(express.json())
app.use(cors());
app.use(router);
connect()


app.listen(port,()=>{
    try{
        console.log(`server start at port no ${port}`)
    }catch(error){
        console.log(error)
    }
})

