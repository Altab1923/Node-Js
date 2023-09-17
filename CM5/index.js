//creating server

const http=require('http');

const server=http.createServer((req,res)=>{

      res.writeHead(200,{"Content-Type":"text/plain; "});
      res.write("Hello guys ....");
      console.log("server running");

      res.end("server closed");
})
//server port creating
server.listen(3000,(err)=>{
    if(err){
        throw err;
    }

    console.log("server working");
})

