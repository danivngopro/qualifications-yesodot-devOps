/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserRepository } from './users.repository';

export class UserManager {
    static async getNumbers(numbersArray: Array<number>): Promise<boolean> {
      return UserRepository.getNumbers(numbersArray);
    }
}