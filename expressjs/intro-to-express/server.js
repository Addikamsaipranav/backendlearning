const express = require("express");
const { copyFileSync } = require("fs");

const app = express();

app.get("/",(req,res)=>{
    console.log("hello");
    res.send("helo")
})
app.get("/contact",(req,res)=>{
    res.send("contact me at pranav@gmail.com")
})
// we can also send html 
app.get("/about",(req,res)=>{
    res.send("<h1>I am pranav , I am a web developer and i love to write code . </h1><br><h1>Thank you</h1>")
})
app.get("/projects",(req,res)=>{
    console.log("heloo");
    res.send("these are my grp of projectsss")
})

app.listen(3000,()=>{
    console.log("Server is started at 3000 port")
});


