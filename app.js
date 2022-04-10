const express = require('express');
const router = require('./src/routes/api');
const app = new express();

const bodyParser = require('body-parser');
//security middleware import
const rateLimit = require('express-rate-limit')
const helemt = require('helmet');
const xssClean =require('xss-clean');
const  mongoSanitize=require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');
const mongoose = require('mongoose');

//security middleware implementation for
app.use(helemt());
app.use(xssClean());
app.use(mongoSanitize());
app.use(hpp());
app.use(cors());
app.use(bodyParser())

//rate limit settings
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter);

//mongodb configeration and connection
const uri = "mongodb://127.0.0.1:27017/colleges";
const option = {user:"", pass:""}
mongoose.connect(uri, option, (error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("database connection successfully")
    }
})


//all routes
app.use("/api/v1", router)


//undefined routes
app.use("*", (req, res)=>{
    res.status(404).json({status: "fail", data:"not found"});
})

module.exports = app;

// const value ="98748748";
// if(typeof value =="number"){
//     console.log("this is true")
// }
// else{
//     console.log("this is  false")
// }