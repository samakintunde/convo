const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const ws = socketio(server);

// Serve website
const publicDirectoryPath = path.join(__dirname, "../client");
app.use(express.static(publicDirectoryPath));

// Generate usernames

ws.on("connection", socket => {
  console.log("A socket connected");
  console.log(socket);

  socket.broadcast.emit("userJoined", {
    message: "A new user has joined"
  });

  // socket.emit("userName", userName);

  socket.on("sendMessage", payload => {
    ws.emit("syncMessages", {
      name: payload.name,
      message: payload.message
    });
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
