var http = require('http').Server();
var io = require('socket.io')(http);


io.on('connection', function(socket){
    console.log("new connection");
  socket.on('message', function(msg){
    io.emit('message', msg);
  });
});

http.listen(3000);
