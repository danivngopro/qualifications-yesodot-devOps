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
    return GroupModel.findByIdAndUpdate(mainGroupId, { $addToSet: { subgroups: subgroupId } }, { new: true }).exec();
  }

  static showGroupHierarchy(id: string, groups: Group[]): Promise<Group[]> {
    return GroupModel.find({ id }, groups).exec();
  }
}




