'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

// Set server port
app.listen(4000, function() {
  console.log('App listening on port 4000!')
});
