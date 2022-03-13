import { Request, Response } from 'express';
import { UserManager } from './users.manager';


export class UserController {

    static async getNumbers(req: Request, res: Response): Promise<void> {
        const numbersArray = req.body.numbers;
      res.json(await UserManager.getNumbers(numbersArray));
    }

  }