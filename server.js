/**
 * Importing packages
 */
const express= require('express');
const mongoose = require('mongoose');

//Importing routes from routes/index.js
const router = require('./routes')

//initilize express
const app=express();

// Parses the json data from request body
app.use(express.json());

// Parses the query params from request url
app.use(express.urlencoded({ extended: true }));

app.use('/',router);

mongoose.connect("mongodb+srv://abiralblon:abiralblon@cluster0.qit9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(()=>{
        console.log("Datebase connected")
    })
    .catch((err)=>{
        console.log(err)
    })

const port = process.env.PORT ||3000;
app.listen(port, ()=>{
    console.log("App listening on port 3000: ");
})