const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const restRouter = require('./routes/rest');

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('change', msg => {
        console.log(msg);
        io.emit('change', msg);
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



http.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
})