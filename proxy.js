var http      = require('http');
var httpProxy = require('http-proxy');
var redis = require('redis')
var express = require('express')
var app = express()
// REDIS
var client = redis.createClient(6379, '127.0.0.1', {})
client.del("servers")
client.lpush("servers", "http://192.168.33.50")
client.lpush("servers", "http://192.168.33.100")

//client.del("redirects");

var ports = {};
var proxy   = httpProxy.createProxyServer(ports);
var server  = http.createServer(function(req, res)
{	client.rpoplpush('servers','servers',function(err, prt) {
		if (err) throw err;
		proxy.web( req, res, {target: prt } );
		console.log("Redirecting to :"+prt)
	})
});

app.get('/*', function(req, res) {
   res.send('Proxy')
   //console.log("statusCode", res.statusCode)
 })
console.log("Proxy server on port: 4000");
server.listen(4000)
