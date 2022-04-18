import { GroupNotFound } from '../utils/errors/group';
import { Group } from './groups.interface';
import { GroupModel } from './groups.model';

export class GroupRepository {
  static create(newGroup: Group): Promise<Group> {
    console.log(1);
    return GroupModel.create(newGroup);
  }

  static findGroupByID(groupId: string): Promise<Group[]> {
    return GroupModel.find({ groupId }).exec();
  }

  static updateGroupByID(groupId: string, postData: Partial<Group>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(groupId, postData, { upsert: true }).exec();
  }

  static deleteGroupByID(groupId: string): Promise<Group | null> {
    return GroupModel.findByIdAndDelete(groupId).exec();
  }

  static addPeron(groupId: string, personId: Partial<string>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(groupId, { $addToSet: { participants: personId } }, { new: true }).exec();
  }

  static async addSubgroup(mainGroupId: string, subgroupId: string): Promise<Group | null> {
    const group = await GroupModel.findById(mainGroupId);
    const flag = await GroupRepository.findPrimaryFunction(group, subgroupId);
    if (flag) throw new GroupNotFound;
    return GroupModel.findByIdAndUpdate(mainGroupId, { $addToSet: { subgroups: subgroupId } }, { new: true }).exec();
  }

  static async findPrimaryFunction(group: any, newSubgroupId: string): Promise<boolean> {
    const subgroups = await GroupModel.find({ $in: group.subgroups }).exec();
    let flag = false; 
    for (const subgroup of subgroups) {
      if(subgroup.id === newSubgroupId) {
        flag = true;
    }
    GroupRepository.findPrimaryFunction(subgroup, newSubgroupId);
  }
  return flag;
 }
}
