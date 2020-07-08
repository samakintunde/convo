import { User } from "./user";

interface IChatRoom {
  id: string;
  name: string;
  admin: User;
  users: { [key: string]: User };
}

class ChatRoom {
  id: string;
  name: string;
  admin: User;
  users: { [key: string]: User };
  createdAt: string;

  constructor({ id, name, admin }: IChatRoom) {
    this.id = id;
    this.name = name;
    this.admin = admin;
    this.users = {};
    this.createdAt = new Date().toISOString();

    // Add the creator(admin) to room
    this.addUser(admin);
  }

  addUser(user: User) {
    this.users[user.id] = user;
  }

  removeUser(user: User) {
    delete this.users[user.id];
  }
}

export { ChatRoom };
