import { Group } from './groups.interface';
import { GroupModel } from './groups.model';

export class GroupRepository {
  static create(newGroup: Group): Promise<Group> {
    return GroupModel.create(newGroup);
  }

  static findGroupByID(groupId: string): Promise<Group[]>{
    return GroupModel.find({groupId}).exec();
  }

  static updateGroupByID(groupId: string, postData: Partial<Group>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(groupId, postData, {new: true}).exec();
  }
  
  static deleteGroupByID(groupId: string): Promise<Group | null> {
    return GroupModel.findByIdAndDelete(groupId).exec();
  }
}
