var express = require('express');
var index = express.Router();

index.get('/', function (req, res) {
	res.render('index', {theme:'flatly', title:'Bryan J Novak', h1:'B.J. Novak ', h1Small:'software developer'});
});

module.exports = index;