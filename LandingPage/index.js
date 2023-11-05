<<<<<<< HEAD
const http= require('http');
const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

app.get('/',(req,res) => {
    res.sendFile("/home/ubuntu/LandinPage/index.html")
});

app.use('/LandingPage', express.status(path.join(_dirname, 'LandingPage')))

app.listen(3001);
console.log('Server on port 3001');
