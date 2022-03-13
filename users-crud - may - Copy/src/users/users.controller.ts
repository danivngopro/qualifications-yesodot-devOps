import { Request, Response } from 'express';
import { User } from './users.interface';
import { UserManager } from './users.manager';

export class UserController {
  static async create(req: Request, res: Response): Promise<void> {
    const newUser = req.body;
    res.json(await UserManager.create(newUser));
  }

  static async findUserByID(req: Request, res: Response): Promise<void> {
    const userId = req.params.id as string;
    res.json(await UserManager.findUserByID(userId));
  }
  
  static async  updateUserByID(req: Request, res: Response): Promise<void> {
    const userId = req.params.id as string;
    const postData = req.body as User;
    res.json(await UserManager.updateUserByID(userId, postData));
  }

  static async  deleteUserByID(req: Request, res: Response): Promise<void> {
    const userId = req.params.id as string;
    res.json(await UserManager.deleteUserByID(userId));
  }

  static async  getUsersList(_req: Request, res: Response): Promise<void> {
    res.json(await UserManager.getUsersList());
  }
}
