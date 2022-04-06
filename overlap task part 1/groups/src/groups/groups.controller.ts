import { Request, Response } from 'express';
import { Group } from '../groups/groups.interface';
import { GroupManager } from './groups.manager';

export class GroupController {
  static async create(req: Request, res: Response): Promise<void> {
    res.json(await GroupManager.create(req.body));
  }

  static async findGroupByID(req: Request, res: Response): Promise<void> {
    const groupId = req.params.id as string;
    res.json(await GroupManager.findGroupByID(groupId));
  }
  
  static async updateGroupByID(req: Request, res: Response): Promise<void> {
    const groupId = req.params.id as string;
    const postData = req.body as Group;
    res.json(await GroupManager.updateGroupByID(groupId, postData));
  }

  static async deleteGroupByID(req: Request, res: Response): Promise<void> {
    const groupId = req.params.id as string;
    res.json(await GroupManager.deleteGroupByID(groupId));
  }
}
