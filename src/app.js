const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));


app.get("" , (req,res) => {
    res.send('Welcome to my web App')
})

app.get("/about" , (req,res) => {
    res.send('Welcome to my about web App')
})

app.get("/weather" , (req,res) => {
    res.send('Welcome to my weather web App')
})

app.get("*" , (req,res) => {
    res.send('404 error page')
})

app.listen( port , () => {
    console.log('Listening to port ${port}')
})