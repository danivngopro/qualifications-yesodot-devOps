import { groupIsAlreadyExists, GroupNotFound } from '../utils/errors/group';
import { Group } from './groups.interface';
import { GroupModel } from './groups.model';

export class GroupRepository {
  static findById(mainGroupId: string): Group | PromiseLike<Group> {
    const a = GroupModel.findById(mainGroupId) as unknown as Group;
    return a;
  }
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
    for (const subgroupId of subgroups) {
      await GroupModel.findByIdAndDelete(subgroupId).exec();
    }
  }

  static addPeron(groupId: string, personId: Partial<string>): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(groupId, { $addToSet: { participants: personId } }, { new: true }).exec();
  }

  static async addSubgroup(mainGroupId: string, subgroupId: string): Promise<Group | null> {
    const group: Group | null = await GroupModel.findById(mainGroupId);
    if (!group) throw new GroupNotFound;
    const flag = await GroupRepository.doesTheGroupExist(group, subgroupId);
    if (flag === true) {
      throw new groupIsAlreadyExists
    }
    return GroupModel.findByIdAndUpdate(mainGroupId, { $addToSet: { subgroups: subgroupId } }, { new: true }).exec();
  }

  static async doesTheGroupExist(group: Group, newSubgroupId: string): Promise<boolean> {
    const mainGroupId = group.id;
    if (mainGroupId === newSubgroupId) {
      return true;
    }
    const subgroups = group.subgroups;
    if (!subgroups) return false;
    for (const subgroupId of subgroups) {
      const group = await GroupModel.findById(subgroupId).exec();
      const doseGroupExists = await GroupRepository.doesTheGroupExist(group as Group, newSubgroupId);
      if (doseGroupExists === true) {
        return true;
      }
    };
    return false;
  }
}




