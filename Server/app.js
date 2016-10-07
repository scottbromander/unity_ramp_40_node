var io = require('socket.io')(process.env.PORT || 5000);

io.on('connection', function(socket){
    console.log('client connected, broadcasting spawn');

    socket.broadcast.emit('spawn');

    socket.on('move', function(data){
      console.log("Client Moved!");
    });
});
