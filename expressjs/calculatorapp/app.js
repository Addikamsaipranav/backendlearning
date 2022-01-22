const express = require("express");

const bodyParser=require("body-parser");

const app = express();

// write every single time when u use body parser
//n order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
app.use(bodyParser.urlencoded({extended:true}));

app.get("/contact",(req,res)=>{
    res.sendFile(__dirname +"/index.html")

})
app.get("/bmicalculator",(req,res)=>{
    res.sendFile(__dirname +"/bmi.html")
    
})

// here it will post the data calculate form data in contact route
app.post("/contact",(req,res)=>{
    console.log(req.body);
    var x= req.body.num1;
    var y=req.body.num2;
    var sum = x+y ;
    res.send("sum is "+sum);
    res.send("thanks for posting")
})
app.post("/bmicalculator",(req,res)=>{
    console.log(req.body);
})

// server is listening at 8000 port
app.listen(8000,()=>{
    console.log("server running at 8000 port please head over into it .. thank you")
})