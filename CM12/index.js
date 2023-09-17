const express=require("express");

const app=express();

//Middle ware
app.use(express.static('public'));


app.get('/',(req,res)=>{
   // console.log(__dirname );--> From the dirname you can get the path of router

res.send("<h1> Hello From Root Side</h1>");
})

app.get('/page',(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
    })

app.listen(3000,()=>{
    console.log("Server start at port 3000");
})