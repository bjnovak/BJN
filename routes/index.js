var express = require('express');
var index = express.Router();

index.get('/', function (req, res) {
	res.render('index', {title:'Bryan J Novak', message:'B.J. Novak'});
});

module.exports = index;