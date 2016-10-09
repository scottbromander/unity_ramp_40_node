var io = require('socket.io')(process.env.PORT || 5000);

var playerCount = 0;

io.on('connection', function(socket){
    console.log('client connected, broadcasting spawn');

    socket.broadcast.emit('spawn');
    playerCount++;

    for(var i = 0; i < playerCount; i++){
      socket.emit('spawn');
      console.log('sending spawn to new player');
    }

    socket.on('move', function(data){
      console.log("Client Moved!");
    });

    socket.on('disconnect', function(){
      console.log("Client Disconnect");
      playerCount--;
    });
});
