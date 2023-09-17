const express = require('express');
const bodyParser=require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {

    res.sendFile(__dirname+'/index.html')
})

app.post('/', (req, res) => {

    // res.sendFile(__dirname+'/index.html')
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);

    var result=num1+num2;
    res.send("sum:-"+result);
    console.log("The Addition of two number is:"+result);
}).listen(3000);
//app.listen(port, () => console.log(`Example app listening on port ${port}!`))