var express = require('express');
var app = express();
var hbs = require('express-hbs');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/sobre', function (req, res) {
  res.render('sobre');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
