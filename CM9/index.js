//using process argv how to take input
// console.log(process.argv[2]);

//creating a function and taking input from terminal

// function add(a,b){

//     return parseInt(a)+parseInt(b);
// }

// const sum=add(process.argv[2],process.argv[3]);
// console.log(sum);

//How to create a file using terminal

const fs=require("fs");
fs.writeFile(process.argv[2],process.argv[3],(err)=>{
    if(err){
        throw err;
    }

    console.log("file created");
});