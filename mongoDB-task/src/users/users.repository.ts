import { User } from './users.interface';
import { UserModel } from './users.model';

export class UserRepository {
  static create(newUser: User): Promise<User> {
    return UserModel.create(newUser);
  }

  static findUserByID(userId: string): Promise<User | null> {
    return UserModel.findById(userId).exec();
  }

  static updateUserByID(userId: string, postData: Partial<User>): Promise<User | null> {
    return UserModel.findByIdAndUpdate(userId, postData, {new: true}).exec();
  } 

  static deleteUserByID(userId: string): Promise<User | null> {
    return UserModel.findByIdAndDelete(userId).exec();
  } 

  static getUsersList(): Promise<User[]> {
    return UserModel.find().exec();
  }
}
