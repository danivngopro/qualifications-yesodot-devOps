import { Group } from './groups.interface';
import { GroupModel } from './groups.model';

export class GroupRepository {
  static findById(mainGroupId: string): Group | PromiseLike<Group> {
    const a = GroupModel.findById(mainGroupId) as unknown as Group;
    return a;
  }

  static gelAllGroups(): Promise<Group[]> {
    return GroupModel.find().exec();
  }

  static create(newGroup: Group): Promise<Group> {
    return GroupModel.create(newGroup);
  }

  static findGroupByID(groupId: string): Promise<Group | null> {
    return GroupModel.findOne({ groupId }).exec();
  }

  static async updateGroupByID(groupId: string, postData: Partial<Group>): Promise<Group | null> {
    const token = await GroupModel.findByIdAndUpdate(groupId, postData, { upsert: true, new: true }).exec();
    return token;
  }

  static async deleteGroupByID(groupId: string): Promise<Group | null> {
    const group = await GroupModel.findById(groupId).exec();  
    if(group?.subgroups){
      await GroupRepository.deleteSubgroups(group);
    }
    return GroupModel.findByIdAndDelete(groupId).exec();
  }

  static async deleteSubgroups(group: any): Promise<void> {
    const subgroups = group.subgroups;
    for (const subgroupId of subgroups) {
      await GroupModel.findByIdAndDelete(subgroupId).exec();
    }
  }

  static addPeron(groupId: string, personId: Partial<string>): Promise<Group | null> { 
    console.log('groupId at repository:', groupId);
    return GroupModel.findByIdAndUpdate(groupId, { $addToSet: { participants: personId } }, { new: true }).exec();
  }

  static async addSubgroup(mainGroupId: string, subgroupId: string): Promise<Group | null> {
    return GroupModel.findByIdAndUpdate(mainGroupId, { $addToSet: { subgroups: subgroupId } }, { new: true }).exec();
  }

  static showGroupHierarchy(id: string, groups: Group[]): Promise<Group[]> {
    return GroupModel.find({ id }, groups).exec();
  }

  static findPerson(personName: string): Promise<Group[]> {
    return GroupModel.find({ personName }).exec();
  }

}




