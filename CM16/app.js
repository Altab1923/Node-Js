const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}))

const port = 3000;

//app.get('/', (req, res) => res.send('Hello World!'))

app.get('/bmi', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

app.post('/bmi',(req,res)=>{

h=parseFloat(req.body.Height);
w=parseFloat(req.body.weight);

bmi=w/(h*h);

bmi=bmi.toFixed();

req_name=req.body.Name;

res.send(`<h1> hey ! ${req_name} Your BMI Around: ${bmi}</h1>`)


})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))