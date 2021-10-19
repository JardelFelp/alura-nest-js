import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: Array<User> = [
    {
      id: 1,
      username: 'JardelFelp',
      email: 'jardelfelipeknirsch@gmail.com',
      password: 'abc123',
      name: 'Jardel Felipe Knirsch',
      entryDate: new Date(),
    },
  ];

  public create(user: User): User {
    this.users.push(user);

    return user;
  }

  public findByName(username: string): User {
    return this.users.find((item) => item.username === username);
  }
}
