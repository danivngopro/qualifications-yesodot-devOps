import { Request, Response } from 'express';
import { PrimeManager } from './primes.manager';


export class PrimeController {

    static async areNumbersPrimes(req: Request, res: Response): Promise<void> {
      const inputNumbers = req.body.numbers;
      res.json(await PrimeManager.areNumbersPrimes(inputNumbers));
    } 

    static async returnPrimeInRange(req: Request, res: Response): Promise<void> {
    const inputNumberForRange = req.query.amount as unknown as number;
    res.json(await PrimeManager.returnPrimeInRange(inputNumberForRange));
  } 

  }