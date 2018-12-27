const express = require('express');
const app = express();
const request = require('request');

var BASE_URL = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=5305e66d631b9da248c2112c5f48c600';
var API_KEY='5305e66d631b9da248c2112c5f48c600';
var url = BASE_URL+API_KEY;
var data;
request(BASE_URL,(err,res,body)=>{
    //console.log(body);
    data = JSON.parse(body);
    console.log(data.weather[0].main);
    console.log(data.main.temp);

});
