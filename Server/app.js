var io = require('socket.io')(process.env.PORT || 5000);

io.on('connection', function(socket){
    console.log('client connected', socket);
});
