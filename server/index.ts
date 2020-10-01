import { config as env } from "dotenv";
import http from "http";
import socketio from "socket.io";
import { ChatRoom, User } from "./models";
import { IUser } from "./models/user";
import { IChatRoom } from "./models/room";
import { Settings } from "http2";

// Load environment variables
env();

// Create HTTP server
const server = http.createServer();
const socketOptions: socketio.ServerOptions = {
  // origins: [process.env.CLIENT_URL || "http://localhost:3000"],
  perMessageDeflate: false,
};

// Instantiate Websocket connection
const ws = socketio(server, socketOptions);

// EVENTS
const CREATE_ROOM = "create-room";
const DELETE_ROOM = "delete-room";
const USER_JOINED = "user-joined";
const USER_LEFT = "user-left";
const USER_TYPING = "user-typing";
const SEND_MESSAGE = "send-message";
const SYNC_MESSAGES = "sync-messages";

// ROOMS (Rough Implementation: We should use a DB or maybe Redis?)
const rooms: ChatRoom[] = [];

type CreateRoomPayload = {
  username: string;
  roomName: string;
};

ws.on("connection", (socket) => {
  console.log(rooms);
  socket.on(CREATE_ROOM, (payload: CreateRoomPayload) => {
    const admin = new User({
      name: payload.username,
    });

    const chatRoom = new ChatRoom({
      name: payload.roomName,
      admin,
      users: { [admin.id]: admin },
    });
    rooms.push(chatRoom);

    socket.emit(
      CREATE_ROOM,
      chatRoom
        ? {
            room: chatRoom,
            user: admin,
            success: true,
          }
        : null
    );
  });
  // Generate usernames
  socket.on(USER_JOINED, (payload: any) => {
    const chatRoomIndex = rooms.findIndex((room) => room.id === payload.roomId);

    if(chatRoomIndex === -1) {
      return socket.emit(USER_JOINED, {
        success: false
      });
    }

    const chatRoom = rooms[chatRoomIndex];

    const newUser = new User({
      name: payload.username,
    });

    chatRoom.addUser(newUser);

    socket.emit(USER_JOINED, {
      room: chatRoom,
      user: newUser,
      success: true,
    });
  });

  socket.on(SEND_MESSAGE, (payload: any) => {
    const message = {
      sender: payload.sender.name,
      text: payload.text,
      time: new Date(),
    };

    socket.emit(SEND_MESSAGE, message);
  });

  socket.on(USER_LEFT, () => {
    console.log("user disconnected");
  });

  socket.on("disconnected", () => {});
});

const PORT = process.env.PORT || 5000;
server.listen(PORT);
