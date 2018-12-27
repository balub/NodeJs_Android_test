const express = require('express');
const app = express();

app.use('/messages',(req,res,next)=>{
    res.send('<h1>message page</h1>');
});
app.use('/chat',(req,res,next)=>{
    res.send('<h1>chat page</h1>');
});
app.use('/',(req,res,next)=>{
    res.send('<h1>Hello From Express</h1>');
});

app.listen(3000);