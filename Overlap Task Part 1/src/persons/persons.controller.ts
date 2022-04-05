import { Request, Response } from 'express';
import { Person } from './persons.interface';
import { PersonManager } from './persons.manager';


export class PersonController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await PersonManager.create(req.body));
  } 

  static async getPersonByID(req: Request, res: Response): Promise<void> {
    const personId = req.params.id as string;
    res.json(await PersonManager.getPersonByID(personId));
  } 

  static async updatePersonByID(req: Request, res: Response): Promise<void> {
    const personId = req.params.id as string;
    const postData = req.body as Person;
    res.json(await PersonManager.updatePersonByID(personId, postData));
  }

  static async  deletePersonByID(req: Request, res: Response): Promise<void> {
    const personId = req.params.id as string;
    res.json(await PersonManager.deletePersonByID(personId));
  }
}
