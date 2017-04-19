var request = require('request');
var express = require('express')
var app = express()

app.get('/', function(req,res) {
  //modify the url in any way you want
  var newurl = 'http://192.168.33.50/';
  request(newurl).pipe(res);
});

var server = app.listen(3000, function () {
var host = server.address().address
var port = server.address().port
console.log('Example app listening at http://%s:%s', host, port)
//client.del("servers");
//client.lpush("servers", "http://127.0.0.1"+":"+port);
 })

