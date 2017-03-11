var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var opn = require('opn');

var app = express();

var http = require('http').Server(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/'));

http.listen('3000', function(err){
	if (err){
		console.log(err);
	} else{
		opn('http://localhost:3000/');
		console.log("3000 port is fucking ready");
	}
});
