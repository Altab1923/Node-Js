const express = require('express')
const bodyParser=require('body-parser')
const axios=require('axios');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

app.post('/', async(req, res) => {
    let cityName=req.body.city;

    let URL=`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=8d141a9f3be4b7baa21391ecde4e682a&units=metric`;
    let weatherData=await axios.get(URL);
    console.log(weatherData.data);
   // console.log(cityName);
    res.send("Thanks");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))