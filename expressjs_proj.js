const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send('Hello Pavan!')
})


app.get('/world', function(req,res){
    res.send('Hello World!')
})


app.get('/world/:id', function(req,res){
    const id = req.params.id
    res.send('Hello Raj!' + id )
})

// For Query String
app.get('/worldq', function(req,res){
    const id = req.query.id
    res.send('Hello Raj!' + id )
})

app.listen(9000, function(req,res){
    console.log('Running...')
})