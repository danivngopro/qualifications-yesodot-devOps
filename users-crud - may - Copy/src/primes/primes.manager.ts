/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrimeRepository } from './primes.repository';

export class PrimeManager {
    static async getNumbers(numbersArray: Array<number>): Promise<boolean> {
      return PrimeRepository.getNumbers(numbersArray);
    }

    static async getPrimeNumbers(amount: number): Promise<number[]> {
      return PrimeRepository.getPrimeNumbers(amount);
    }
}