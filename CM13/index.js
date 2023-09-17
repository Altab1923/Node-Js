const express=require("express");

const app=express();

app.get('/',(req,res)=>{
    res.send("Hello form root side");
})

app.get('/page',(req,res)=>{
    res.send("Hello form page side");
})

app.listen(3000,()=>{
    console.log("Server start at port no 3000");
})