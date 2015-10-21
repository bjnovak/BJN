var express = require('express');
var path = require('path');
var app = express();
var index = require('./routes/index');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);

app.listen(3000, function () {
	console.log('App listening on port 3000');
});