const express = require("express");

const bodyParser=require("body-parser");

const app = express();

// write every single time when u use body parser
//n order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
app.use(bodyParser.urlencoded({extended:true}));

app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/bmicalculator",(req,res)=>{
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    console.log(weight);
    console.log(height);
    var bmi = weight /(height * height);
    res.send(`<h1>Your bmi is ${bmi}</h1>`)
})


// server is listening at 8000 port
app.listen(8000,()=>{
    console.log("server running at 8000 port please head over into it .. thank you")
})