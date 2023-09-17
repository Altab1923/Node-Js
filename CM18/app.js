//using external Api full program is not runing

const express = require('express');
const app = express();
const https=require('https');
const port = 3000

app.get('/', (req, res) => {
    
    const URL='https://api.openweathermap.org/geo/1.0/direct?q=jaipur&limit=5&appid=8d141a9f3be4b7baa21391ecde4e682a&units=metric';

    https.get(URL,function(response){
        //console.log(response.statusCode);
        response.on("data",(data)=>{
           
            const weatherData=JSON.parse(data);

            const mainTemp=weatherData.main.temp
            res.write(`<h1>Temp:-${mainTemp} </h1>`);
            res.send();
             //console.log(weatherData);
        })
    });
   
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))