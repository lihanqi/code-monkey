const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const restRouter = require('./routes/rest');

io.on('connection', function(socket){
    // collaboration = {}
    // participants = {}
    console.log('a user connected');
    socket.on('change', msg => {
        console.log(msg);
        socket.broadcast.emit('change', msg);
    })
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
  });

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/api/v1', restRouter);
app.use(function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
});

server.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
})