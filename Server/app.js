
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.set("port", (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, './public')));

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/public", "/views/index.html"));
});

app.get("/first", function(req,res){
    io.emit('CMS');
    res.send("Got it!");
});

app.get("/second", function(req,res){
    io.emit('hi', 'all sockets');
    res.send("Got it!");
});

app.get("/third", function(req,res){
    io.emit('hi', 'all sockets');
    res.send("Got it!");
});

http.listen(app.get("port"), function(){
  console.log("Listening on port: ", app.get("port"));
});

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
