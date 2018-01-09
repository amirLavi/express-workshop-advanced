var express = require('express');
var app = express();
var chalk = require('chalk');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');
var routes = require('./routes'); //uncomment this when you are ready to connect your router

app.use(volleyball);

app.use(bodyParser());

app.get('/', function (req, res, next) {
  res.send('Root Route');
  // next();
});

app.use('/api', routes);

// app.post('/', function (req, res){
//     console.log('post');
//     res.send('POST request');
// });
//
// app.get('/', function (req, res){
//     console.log('get');
//     // res.send('get request');
// });

var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
