import { GroupRepository } from './groups.repository';
import { Group } from './groups.interface';
import { groupIsAlreadyExists, GroupNotFound } from '../utils/errors/group';


export class GroupManager {
  static async create(newGroup: Group): Promise<Group> {
    return GroupRepository.create(newGroup);
  }

  static async findGroupByID(groupId: string) {
    const group = GroupRepository.findGroupByID(groupId);
    if((await group).length === 0 ){
      throw new GroupNotFound;
    }
    return group;
  }

  static async updateGroupByID(groupId: string, postData: Partial<Group>): Promise<Group> {
    const updateGroup = await GroupRepository.updateGroupByID(groupId, postData);
    if(updateGroup){
      return updateGroup;
    } else{
      throw new GroupNotFound;
    }
  }

  static async deleteGroupByID(groupId: string): Promise<Group> {
    const deletedGroup: any =  GroupRepository.deleteGroupByID(groupId);
    if(deletedGroup != null){
      return deletedGroup;
    } else{
      throw new GroupNotFound;
    }
  }

  static async addPerson(groupId: string, personId: string): Promise<Group> {
    const updateGroup: any = await GroupRepository.addPeron(groupId, personId);
    if(updateGroup){
      return updateGroup;
    } else{
      throw new GroupNotFound;
    }
  }

  static async addSubgroup(mainGroupId: string, subgroupId: string): Promise<Group> {
    const group = await GroupRepository.findById(mainGroupId) as Group;
    if (!group) throw new GroupNotFound;
    const flag = await GroupManager.doesTheGroupExist(group, subgroupId);
    if (flag === true) {
      throw new groupIsAlreadyExists
    }
    const updateGroup: any = await GroupRepository.addSubgroup(mainGroupId, subgroupId);
    if(updateGroup){
      return updateGroup;
    } else{
      throw new GroupNotFound;
    }
  }

  static async doesTheGroupExist(group: Group, newSubgroupId: string): Promise<boolean> {
    const mainGroupId = group.id;
    if (mainGroupId === newSubgroupId) {
      return true;
    }
    const subgroups = group.subgroups;
    if (!subgroups) return false;
    for (const subgroupId of subgroups) {
      const group = await GroupRepository.findById(subgroupId);
      const doseGroupExists = await GroupManager.doesTheGroupExist(group as Group, newSubgroupId);
      if (doseGroupExists === true) {
        return true;
      }
    };
    return false;
  }

}
