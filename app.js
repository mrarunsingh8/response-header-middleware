const express = require("express");
const bodyParser = require("body-parser");

const addResponseHeader = require("add-response-header");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", addResponseHeader, (req, res)=>{
    res.json({status: 200, message: "Hello World"});
});


app.listen(3000, (err)=>{
    if(err) console.error("Error", err);
    console.log("Server started on Port: 3000");
});