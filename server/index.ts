import { config as env } from "dotenv";
import http from "http";
import socketio from "socket.io";
import { ChatRoom } from "./models";

// Load environment variables
env();

// Create HTTP server
const server = http.createServer();

// Instantiate Websocket connection
const ws = socketio(server, {
  origins: [process.env.CLIENT_URL],
  perMessageDeflate: false,
});

// EVENTS
const ROOM_CREATED = "ROOM_CREATED";
const ROOM_DELETED = "ROOM_DELETED";
const USER_JOINED = "user-joined";
const USER_LEFT = "user-left";
const USER_TYPING = "user-typing";
const SEND_MESSAGE = "send-message";
const SYNC_MESSAGES = "sync-messages";

// ROOMS (Rough Implementation: We should use a DB or maybe Redis?)
const rooms: ChatRoom[] = null;

ws.on("connection", (socket) => {
  socket.on(ROOM_CREATED, (payload) => {
    console.log("room created");
  });
  // Generate usernames
  socket.on(USER_JOINED, (payload) => {
    // console.log(payload);
    console.log("User joined");
  });

  socket.on(USER_LEFT, () => {
    console.log("user disconnected");
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () =>
  console.log(`Websocket server running on Port ${PORT}`)
);
