var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var server = require('http').createServer(app)

server.listen(3000, function () {
  console.log('\n\n\nlistening on port 3000 !')
})