import { User } from './groups.interface';
import { UserModel } from './groups.model';

export class UserRepository {
  static create(newUser: User): Promise<User> {
    return UserModel.create(newUser);
  }
}
