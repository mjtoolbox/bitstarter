var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(readFile("index.html"));
});


var readFile = function(fileName){
  var buf = fs.readFileSync(fileName);
  return buf.toString();
  //console.log("File read" + buf.toString());
};



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

