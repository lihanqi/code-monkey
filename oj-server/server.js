const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://user:password@ds044689.mlab.com:44689/coj');


const server = require('http').Server(app);
const io = require('socket.io')(server);
const restRouter = require('./routes/rest');
const webSocketService = require('./services/webSocketService')(io);

app.use('/', express.static(path.join(__dirname, './public')));
app.use('/api/v1', restRouter);
app.use(function(req, res, next) {
    res.sendFile('./public/index.html' , { root : __dirname});
});

server.listen(80, ()=> {
    console.log('Codecola lanuched at port 80');
})