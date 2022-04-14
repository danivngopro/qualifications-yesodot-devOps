import { Group } from './groups.interface';
import { GroupModel } from './groups.model';

export class GroupRepository {
  static create(newGroup: Group): Promise<Group> {
    console.log(1);
    return GroupModel.create(newGroup);
  }

  static findGroupByID(groupId: string): Promise<Group[]>{
    return GroupModel.find({groupId}).exec();
  }

  static updateGroupByID(groupId: string, postData: Partial<Group>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(groupId, postData, {upsert: true}).exec();
  }
  
  static deleteGroupByID(groupId: string): Promise<Group | null> {
    return GroupModel.findByIdAndDelete(groupId).exec();
  }

  static addPeron(groupId: string, personId: Partial<string>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(groupId, {$addToSet: { participants: personId } }, {new: true}).exec();
  }

  static addSubgroup(mainGroupId: string, subgroupId: Partial<string>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(mainGroupId, {$addToSet: { subgroups: subgroupId } }, {new: true}).exec();
  }
}
