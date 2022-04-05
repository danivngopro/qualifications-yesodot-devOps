import { Request, Response } from 'express';
import { UserManager } from './groups.manager';

export class UserController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await UserManager.create(req.body));
  }
}
