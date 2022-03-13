export class UserRepository {
  static getNumbers(numbersArray: Array<number>): boolean {
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
}


function checkIfIsPrime(num: number){
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}