import { User } from "./user";

interface IMessage {
  id: string;
  sender: User;
  text: string;
  createdAt: string;
}

export { IMessage };
