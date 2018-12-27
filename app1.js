const express = require('express');
const app = express();
const request = require('request');

var BASE_URL = "https://api.openweathermap.org/data/2.5/weather?q="
var API_TOKEN="&appid=5305e66d631b9da248c2112c5f48c600";
var info;

app.use('/location',(req,res,next)=>{
    var loc = req.param('loc');
    var FINAL_URL = BASE_URL+loc+API_TOKEN;
    request(FINAL_URL,(err,res,body)=>{
        info = JSON.parse(body);
      });     
      res.send('The Temp at '+loc+' is '+info.main.temp);  
      loc= ' ';
});



app.listen(3000,()=>{
    console.log('Server running');
});