const websocketService = function(io) {
    let buffer = {};
    io.on('connection', function(socket){
        const userId = socket.id;
        const sessionId = socket.handshake.query.session;

        socket.join(sessionId, () => {
            console.log(userId + 'joined room ' + sessionId);
            // console.log(userId + ' connected.');
            console.log('---------------------------');
            socket.to(sessionId).broadcast.emit('userJoin', userId);
        });

        
        socket.on('change', delta => {
            if (!(sessionId in buffer)) {
                buffer[sessionId] = [];
            }
            buffer[sessionId].push(JSON.parse(delta));
            // console.log(buffer);
            socket.to(sessionId).broadcast.emit('change', delta);
        })

        socket.on('cursorMove', cursor => {
            cursor = JSON.parse(cursor);
            cursor['ownerId'] = userId;
            socket.to(sessionId).broadcast.emit('cursorMove', JSON.stringify(cursor));
        })

        socket.on('restoreBuffer', () => {
            console.log('server received restoreBuffer request from ' + userId);
            // console.log(userId);
            // socket.to(userId).emit('restoreBuffer', "hi!");
            // socket.to(userId).emit('restoreBuffer', "this is not wrong");
            // console.log(buffer);
            if (sessionId in buffer) {
                console.log('pulling' + JSON.stringify(buffer[sessionId]));
                // console.log(buffer[sessionId]);
                // socket.to(userId).emit('restoreBuffer', "hi!");
                socket.emit('restoreBuffer', JSON.stringify(buffer[sessionId]));
                
            }
        })
    
        socket.on('disconnect', function(){
          console.log(socket.id + ' disconnected');
          socket.to(sessionId).broadcast.emit('userLeft', userId);
        });
      });
}

module.exports = websocketService;