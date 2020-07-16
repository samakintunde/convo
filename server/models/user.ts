import { v4 as uuid } from "uuid";

interface IUser {
  id?: string;
  name: string;
}

class User {
  id: string;
  name: string;

  constructor({ id, name }: IUser) {
    this.id = id || uuid();
    this.name = name;
  }
}

export { IUser, User };
