const express=require("express");

const app=express();

const PORT=8000;

app.listen(PORT,(err)=>{
    if(!err){
        console.log("Server Working on"+PORT);
    }else{
        console.log("error");
    }
});