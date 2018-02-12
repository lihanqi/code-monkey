const websocketService = function(io) {
    io.on('connection', function(socket){
        const userId = socket.id;
        const sessionId = socket.handshake.query.session;
        socket.join(sessionId, () => {
            console.log(userId + 'joined room ' + sessionId);
            // console.log(userId + ' connected.');
            console.log('---------------------------');
        });

        
        socket.on('change', msg => {
            const roomNumber = msg.sessionId;
            socket.to(roomNumber).broadcast.emit('change', msg.delta);
        })
    
        socket.on('disconnect', function(){
          console.log(socket.id + ' disconnected');
        });
      });
}

module.exports = websocketService;