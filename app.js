var express = require('express'),

	http = require('http')
	bodyParser   = require('body-parser'),
	path = require('path');


var app = express();


var port     = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

var sessionInfo = {
	name: 'Guest'
};

var session = function(req, res, next) {
	req.sessionInfo = sessionInfo;
	next();

};

app.get('/', session, function(req, res){
	res.render('index.ejs', req.sessionInfo);
});

app.listen(port);
console.log("Its alive! On " + port);