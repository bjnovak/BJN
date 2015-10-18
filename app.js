var express = require('express');
var app = express();
var index = require('./routes/index');

app.set('views', __dirname + '/views');
app.set('partials', __dirname + '/partials');
app.set('view engine', 'jade');

app.use('/', index);

app.listen(3000, function () {
	console.log('App listening on port 3000');
});