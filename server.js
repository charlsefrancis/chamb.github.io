var express = require('express');

var server = express();
server.use(express.static(__dirname + '/public'));

server.get('*', function(req, res){
  res.sendFile('index.html',{ root: "C:\\Users\\webdev.int\\chamb"});
});

var port = 10001;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});

