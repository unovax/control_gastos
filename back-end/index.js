//archivo index.js
var express = require('express');
var app = express();

const PUERTO = 8001;

app.listen(PUERTO, function(){
	console.log('Servidor http correindo en el puerto ' + PUERTO);
});

app.get('/', function(req, res){
    res.send('Hola mundo');
});