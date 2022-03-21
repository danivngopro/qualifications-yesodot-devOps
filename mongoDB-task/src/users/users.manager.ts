/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepository } from './users.repository';
import { User } from './users.interface';
import { UserNotFound } from '../utils/errors/user';

export class UserManager {
  static async create(newUser: User): Promise<User> {
    return UserRepository.create(newUser);
  }

  static async findUserByID(userId: string): Promise<User> {
    const a: any = UserRepository.findUserByID(userId);
    if(a != null){
      return a;
    } else{
      throw new UserNotFound;
    }
  }

  static async updateUserByID(userId: string, postData: Partial<User>): Promise<User> {
    const a = await UserRepository.updateUserByID(userId, postData);
    if(a){
      return a;
    } else{
      throw new UserNotFound;
    }
  }

  static async deleteUserByID(userId: string): Promise<User> {
    const a: any =  UserRepository.deleteUserByID(userId);
    if(a != null){
      return a;
    } else{
      throw new UserNotFound;
    }
    
  }
 
  static async  getUsersList(): Promise<User[]> {
    return UserRepository.getUsersList();
  }
}
