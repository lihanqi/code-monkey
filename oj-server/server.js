const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);

const restRouter = require('./routes/rest');

io.on('connection', function(socket){
    const userId = socket.id;
    console.log(userId + ' connected.');
    socket.on('register', sessionId => {
        socket.join(sessionId, () => {
            console.log(userId + 'joined room ' + sessionId);
        });
    })

    socket.on('change', msg => {
        const roomNumber = msg.sessionId;
        socket.to(roomNumber).broadcast.emit('change', msg.delta);
    })


    socket.on('disconnect', function(){
      console.log(socket.id + ' disconnected');
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