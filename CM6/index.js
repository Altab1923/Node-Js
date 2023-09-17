//how to give html file

const http = require("http");
const fs = require("fs");

// http.createServer((req, res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"});

//     fs.readFile('index.html',(err,data)=>{
//         if(err){
//             throw err;
//         }
//         res.end(data);
//     })

// }).listen(3000);

// json file send

http.createServer((req, res) => {

    res.writeHead(200, { "Content-Type": "application/json" });

    const jsonData = [
        {
            color: "red",
            value: "#f00"
        },
        {
            color: "green",
            value: "#0f0"
        },
        {
            color: "blue",
            value: "#00f"
        },
        {
            color: "cyan",
            value: "#0ff"
        },
        {
            color: "magenta",
            value: "#f0f"
        },
        {
            color: "yellow",
            value: "#ff0"
        },
        {
            color: "black",
            value: "#000"
        }
    ]

    console.log("server running");
    res.end(JSON.stringify(jsonData));

}).listen(3000);

