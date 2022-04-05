/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepository } from './groups.repository';
import { User } from './groups.interface';

export class UserManager {
  static async create(newUser: User): Promise<User> {
    return UserRepository.create(newUser);
  }
}
