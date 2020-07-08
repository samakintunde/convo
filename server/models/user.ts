interface IUser {
  id: string;
  name: string;
}

class User {
  id: string;
  name: string;

  constructor({ id, name }: IUser) {
    this.id = id;
    this.name = name;
  }
}

export { IUser, User };
