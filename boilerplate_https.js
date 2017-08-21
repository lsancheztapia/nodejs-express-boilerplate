var fs = require('fs')

var options = {
   key  : fs.readFileSync('/etc/logicaldesign_ssl_certs/logicaldesign.pe/logicaldesign.pe.key'),
   cert : fs.readFileSync('/etc/logicaldesign_ssl_certs/logicaldesign.pe/logicaldesign_pe.crt'),
   ca   : fs.readFileSync('/etc/logicaldesign_ssl_certs/logicaldesign.pe/logicaldesign_pe.ca-bundle')
};
/*
var options = {
   key  : fs.readFileSync('server.key'),
   cert : fs.readFileSync('server.crt')
};
*/

var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.json())

var server = require('https').createServer( options, app)

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

server.listen(3300, function () {
  console.log('\n\n\nlistening on port 3300 !')
})