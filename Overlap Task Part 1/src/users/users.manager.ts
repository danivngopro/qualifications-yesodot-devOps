/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepository } from './users.repository';
import { User } from './users.interface';

export class UserManager {
  static async create(newUser: User): Promise<User> {
    return UserRepository.create(newUser);
  }
}
