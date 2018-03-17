const cachingService = require('./cachingService');
const TIMEOUT_IN_SECONDS = 300;

const websocketService = function(io) {
	let buffer = {}; // key: sessionId, value: the changed content buffer
	io.on("connection", function(socket) {
		const userId = socket.handshake.query.username || socket.id;
		const sessionId = socket.handshake.query.session;

		socket.join(sessionId, () => {
			console.log(userId + " joined room " + sessionId);
			socket.to(sessionId).broadcast.emit("userJoin", userId);
			if (!(sessionId in buffer)) {
				buffer[sessionId] = {};
				buffer[sessionId]["participants"] = 0;
				cachingService.get(sessionId, data => {
					if (data) {
						console.log("getting data from redis");
						buffer[sessionId]["content"] = JSON.parse(data);
					} else {
						buffer[sessionId]["content"] = [];
					}
				});
			}
			buffer[sessionId]["participants"]++;
		});

		socket.on("change", delta => {
			buffer[sessionId]["content"].push(delta);
			socket.to(sessionId).broadcast.emit("change", delta);
		});

		socket.on("cursorMove", cursor => {
			cursor = JSON.parse(cursor);
			cursor["ownerId"] = userId;
			socket
				.to(sessionId)
				.broadcast.emit("cursorMove", JSON.stringify(cursor));
		});

		socket.on("restoreBuffer", () => {
			if (sessionId in buffer) {
				socket.emit(
					"restoreBuffer",
					JSON.stringify(buffer[sessionId]["content"])
				);
			}
		});

		socket.on("disconnect", function() {
			console.log(socket.id + " disconnected");
			socket.to(sessionId).broadcast.emit("userLeft", userId);
			buffer[sessionId]["participants"]--;
			if (buffer[sessionId]["participants"] == 0) {
				let key = sessionId;
				let value = JSON.stringify(buffer[sessionId]["content"]);
				console.log("caching data to redis");
				cachingService.set(key, value, cachingService.redisPrint);
				cachingService.expire(key, TIMEOUT_IN_SECONDS);
				delete buffer[sessionId];
			}
		});
	});
};

module.exports = websocketService;
