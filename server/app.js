const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const ws = socketio(server);

// Serve website
const publicDirectoryPath = path.join(__dirname, "../dist");
app.use(express.static(publicDirectoryPath));

// Generate usernames

ws.on("connection", socket => {
  socket.on("userJoined", payload => {
    // Notify chat of new member(s)
    socket.broadcast.emit("userJoined", {
      message: `${payload.name} has joined the chat`
    });
  });

  socket.on("userTyping", payload => {
    const { name, isTyping } = payload;

    socket.broadcast.emit("userTyping", {
      name,
      isTyping
    });
  });

  socket.on("sendMessage", payload => {
    ws.emit("syncMessages", {
      name: payload.name,
      message: payload.message
    });
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
