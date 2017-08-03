var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

var server = require('http').createServer(app)

/** for CORS */
app.all('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

var index = require('./routes/index')
var login = require('./routes/login')

app.use('/', index)
app.use('/login', login)

server.listen(3000, function () {
  console.log('\n\n\nlistening on port 3000 !')
})