import { Request, Response } from 'express';
import { PersonManager } from './persons.manager';

export class PersonController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await PersonManager.create(req.body));
  } 

  static async getPersonByName(req: Request, res: Response): Promise<void> {
    const firstName = req.query.firstName as string;
    res.json(await PersonManager.getPersonByName(firstName));
  } 
}
