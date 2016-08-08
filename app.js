var express = require('express'),
	http = require('http')
	bodyParser   = require('body-parser'),
	path = require('path');


var app = express();


var port     = process.env.PORT || 3000;
app.set('view', __dirname + '/');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port);
console.log("Its alive! On " + port);