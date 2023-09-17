//importing file from Node Packages
const fs=require('fs');

//create a new file

// fs.writeFile("demo.txt","Hello Newton School",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("file create");
// })

// Reading the file in js
// fs.readFile("demo.txt",(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data.toString());
// })


// Adding content in file

// fs.appendFile("demo.txt"," Doing good",(err)=>{
   
//     if(err){
//         throw err;
//     }
//     console.log("update file");

// })

//Renaming File
// fs.rename("demo.txt","newFile.txt",(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("Rename file");
// })


//deleting file 

fs.unlink("newFile.txt",(err)=>{
    if(err){
        throw err;
    }
    console.log("delete file");
})
