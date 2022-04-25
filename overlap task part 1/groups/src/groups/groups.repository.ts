import { groupIsAlreadyExists, GroupNotFound } from '../utils/errors/group';
import { Group } from './groups.interface';
import { GroupModel } from './groups.model';

export class GroupRepository {
  static create(newGroup: Group): Promise<Group> {
    return GroupModel.create(newGroup);
  }

  static findGroupByID(groupId: string): Promise<Group[]> {
    return GroupModel.find({ groupId }).exec();
  }

  static updateGroupByID(groupId: string, postData: Partial<Group>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(groupId, postData, { upsert: true }).exec();
  }
  
  static async deleteGroupByID(groupId: string): Promise<Group | null> {
    const group = await GroupModel.findById(groupId).exec();
    await GroupRepository.deleteSubgroups(group);
    return GroupModel.findByIdAndDelete(groupId).exec();
  }

  static async deleteSubgroups(group: any): Promise<void> {
    const subgroups = group?.subgroups;
    // subgroups.forEach(async subgroupId => {
    //    await GroupModel.findByIdAndDelete(subgroupId).exec();
    // });
    for (const subgroupId of subgroups) {
      await GroupModel.findByIdAndDelete(subgroupId).exec();
    }
  }

  static addPeron(groupId: string, personId: Partial<string>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(groupId, { $addToSet: { participants: personId } }, { new: true }).exec();
  }

  static async addSubgroup(mainGroupId: string, subgroupId: string): Promise<Group | null> {
    const group : Group | null = await GroupModel.findById(mainGroupId);
    if(!group) throw new GroupNotFound;
    const flag = await GroupRepository.doesTheGroupExist(group, subgroupId);
    if (flag === true || mainGroupId === subgroupId) {
      throw new groupIsAlreadyExists
    }
    return GroupModel.findByIdAndUpdate(mainGroupId, { $addToSet: { subgroups: subgroupId } }, { new: true }).exec();
  }
  
  static async doesTheGroupExist(group: Group, newSubgroupId: string): Promise<boolean> {
    //const task = await GroupModel.find({ $in: group.subgroups }).exec();
    //console.log(task);
    const subgroups = group.subgroups;
    for (const subgroupId of subgroups) {
      if(subgroupId === newSubgroupId) {
        return true;
    }
    const group = await GroupModel.findById(subgroupId);
    if(!group) return false;
    GroupRepository.doesTheGroupExist(group, newSubgroupId);
  }
  return false;
  }
}




