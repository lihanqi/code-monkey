const express = require('express');
const app = express();
const path = require('path');
const server = require('http').Server(app);
const io = require('socket.io')(server);
const restRouter = require('./routes/rest');
const webSocketService = require('./services/webSocketService')(io);

app.use('/', express.static(path.join(__dirname, '../public')));
app.use('/api/v1', restRouter);
app.use(function(req, res, next) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public')});
});

server.listen(3000, ()=> {
    console.log('Example app listening on port 3000!');
})