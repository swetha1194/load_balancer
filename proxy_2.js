var request=require('request');
var redis = require('redis')

var client = redis.createClient(6379, '127.0.0.1', {})
request.get('http://192.168.33.10:4000/api/design/survey/vote/cast',function(err,res,body){
  //if(err) //TODO: handle err
  console.log(res.statusCode) //etc
  if(res.statusCode==500)
  {
    client.lpop("servers", function(err,server){
      if (err) throw err;
      console.log(server)
      })
  }
  //TODO Do something with response
});
