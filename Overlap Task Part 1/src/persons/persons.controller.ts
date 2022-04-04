import { Request, Response } from 'express';
import { PersonManager } from './persons.manager';

export class PersonController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await PersonManager.create(req.body));
  } 
}
