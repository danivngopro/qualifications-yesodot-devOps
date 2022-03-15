/* eslint-disable @typescript-eslint/no-unused-vars */

export class PrimeManager {
    static async getNumbers(numbersArray: Array<number>): Promise<boolean> {
      let count = 0;
      let amountOfPrimeNumbers = numbersArray.length;
      console.log(numbersArray)
    numbersArray.forEach((num: number) => {
        console.log(num);
  
        if(checkIfIsPrime(num)){
            count++;
        }
    }); 
  
    if(count === amountOfPrimeNumbers){
        return true;
    }else{
        return false;
    }
    }

    static async getPrimeNumbers(amount: number): Promise<number[]> {
      let primeNumbersArray :  number[] = [];
      let ArrayLocation = 0;
      for(let index = 1; index <= amount; index++){
          if(checkIfIsPrime(index)){
            primeNumbersArray[ArrayLocation] = index;
            ArrayLocation++;
          }
      }
      return primeNumbersArray;
    }
}

function checkIfIsPrime(num: number){
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}