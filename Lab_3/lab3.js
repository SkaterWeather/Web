var express = require('express');
var calc = express();	

calc.set('view engine', 'ejs');

calc.get('/', function(req, res) {
	res.sendFile(__dirname + "/calc.html");
});

calc.get('/file', function(req, res) {
	res.render('file');
});

calc.listen(3000, '127.0.0.1');
console.log("Your server is workin on port: 3000");