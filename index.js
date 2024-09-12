const express = require("express");
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Listening on ${PORT}`));

app.use(express.static('public'));
app.use(express.json());


 const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API}=maitland&days=1&aqi=no&alerts=yes`;

app.get('/callapi', async (request, response) => {
    const api_fetch = await fetch(url);
    let api_json = await api_fetch.json();
    console.log(api_json);
    response.send(api_json);
})