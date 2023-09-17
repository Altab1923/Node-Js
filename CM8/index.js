const http=require("http");

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end(" ngaecjh Hello Altab");
}).listen(3000,()=>{
    console.log("how are you");
});