/* eslint-disable @typescript-eslint/no-unused-vars */

import { emptyArrayError } from "../utils/errors/prime";

export class PrimeManager {
  static async areNumbersPrimes(inputNumbers: Array<number>): Promise<boolean> {
    let amountOfPrimeNumbers = 0;
    const amountOfAllNumbers = inputNumbers.length;
    inputNumbers.forEach((num: number) => {
      if (isPrime(num)) {
        amountOfPrimeNumbers++;
      }
    });

    if(inputNumbers.length === 0){
       throw new emptyArrayError;
    } else if(amountOfPrimeNumbers === amountOfAllNumbers){
      return true;
    } else{
      return false;
    }
  }

  static async returnPrimeInRange(inputNumberForRange: number): Promise<number[]> {
    const primeNumbers: number[] = [];
    let ArrayLocation = 0;
    for (let firstNumberInRange = 1; firstNumberInRange <= inputNumberForRange; firstNumberInRange++) {
      if (isPrime(firstNumberInRange)) {
        primeNumbers[ArrayLocation] = firstNumberInRange;
        ArrayLocation++;
      }
    }
      return primeNumbers;
  }
}

function isPrime(num: number) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}