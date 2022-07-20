const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');
nunjucks.configure('template', {
    express: app
});

//미들웨어 셋팅
app.use( logger('dev') );

app.get('/', (req, res) => {
    res.send('hello express');
});

app.use( '/admin' , admin ); 
function vipMiddleware(req, res, next){
    console.log('최우선 미들웨어');
    next();
}

app.use( '/admin' , vipMiddleware, admin ); 
app.use( '/contacts' , contacts );