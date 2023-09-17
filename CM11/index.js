const express=require('express');

const app=express();

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("Hello From Root side Altab");
})

app.get("/about",(req,res)=>{
    res.send("Hello this from About side");
})

app.get("/contact",(req,res)=>{
    res.send("Hello this from Contact side");
})

app.listen(PORT,(err)=>{
    if(err){
        throw err;
    }else{
        console.log("Server is Runing on Port"+PORT);
    }
})