// how to triggre an event

// const EventEmitter=require('events');

// const event=new EventEmitter();
//Handel the event

// event.on("sayName",()=>{
//     console.log("Hello Altab");
// })

// event.emit("sayName");---> generate 

// Creating E-pay

const express = require('express')
const EventEmitter=require('events');
const event=new EventEmitter();
const app = express()
const port = 3000;

let count=0;

event.on("apiCount",()=>{

    count++;
    console.log("Apicount"+count);

     
})

app.get('/', (req, res) => {
    res.send("<h1> Hello Altab </h1>");
    event.emit("apiCount");//generate
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

