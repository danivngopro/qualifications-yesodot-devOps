import { Request, Response } from 'express';
import { PrimeManager } from './primes.manager';


export class PrimeController {

    static async getNumbers(req: Request, res: Response): Promise<void> {
      const numbersArray = req.body.numbers;
      res.json(await PrimeManager.getNumbers(numbersArray));
    } 

    static async getPrimeNumbers(req: Request, res: Response): Promise<void> {
    const amount = req.query.amount as unknown as number;
    res.json(await PrimeManager.getPrimeNumbers(amount));
  } 

  }