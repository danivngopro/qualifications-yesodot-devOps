import { User } from './users.interface';
import { UserModel } from './users.model';

export class UserRepository {
  static create(newUser: User): Promise<User> {
    return UserModel.create(newUser);
  }
}
