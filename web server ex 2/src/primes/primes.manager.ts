/* eslint-disable @typescript-eslint/no-unused-vars */

import { emptyArrayError } from "../utils/errors/prime";

export class PrimeManager {
  static async areNumbersPrimes(inputNumbers: Array<number>): Promise<boolean> {
    let amountOfPrimeNumbers = 0;
    const length = inputNumbers.length;
    inputNumbers.forEach((num: number) => {
      if (isPrime(num)) {
        amountOfPrimeNumbers++;
      }
    });

    if(length === 0){
       throw new emptyArrayError;
    } else if(amountOfPrimeNumbers === length){
      return true;
    } else{
      return false;
    }
  }

  static async primesInRange(inputNumberForRange: number): Promise<number[]> {
    const primeNumbers: number[] = [];
    let arrayIndex = 0;
    for (let currentNumber = 1; currentNumber <= inputNumberForRange; currentNumber++) {
      if (isPrime(currentNumber)) {
        primeNumbers[arrayIndex] = currentNumber;
        arrayIndex++;
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