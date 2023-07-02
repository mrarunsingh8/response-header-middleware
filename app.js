const express = require("express");
const bodyParser = require("body-parser");

const responseheaderMiddleware = require("./responseheaderMiddleware");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", responseheaderMiddleware, (req, res)=>{
    res.json({status: 200, message: "Hello World"});
});


app.listen(3000, (err)=>{
    if(err) console.error("Error", err);
    console.log("Server started on Port: 3000");
});