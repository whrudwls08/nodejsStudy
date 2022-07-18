const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/fastcampus', (req, res) => {
    res.send('패캠222222');
});

app.listen( port , () => {
    console.log('express listening on port' , port);
});