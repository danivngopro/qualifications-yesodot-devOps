import { GroupRepository } from './groups.repository';
import { Group } from './groups.interface';
import { groupIsAlreadyExists, GroupNotFound } from '../utils/errors/group';


export class GroupManager {
  static async create(newGroup: Group): Promise<Group> {
    return GroupRepository.create(newGroup);
  }

  static async findGroupByID(groupId: string) {
    const group = await GroupRepository.findGroupByID(groupId);
    if (!group) {
      throw new GroupNotFound;
    }
    return group;
  }

  static async updateGroupByID(groupId: string, postData: Partial<Group>): Promise<Group> {
    const updateGroup = await GroupRepository.updateGroupByID(groupId, postData);
    console.log('updateGroup:', updateGroup);
    if (!updateGroup) {
      throw new GroupNotFound;
    } else {
      return updateGroup;
    }
  }

  static async deleteGroupByID(groupId: string): Promise<Group> {
    const deletedGroup = await GroupRepository.deleteGroupByID(groupId);
    if (!deletedGroup) throw new GroupNotFound;
    return deletedGroup;
  }

  static async addPerson(groupId: string, personId: string): Promise<Group> {
    const updateGroup = await GroupRepository.addPeron(groupId, personId);
    console.log('updateGroup at Manager:', updateGroup);
    if (!updateGroup) throw new GroupNotFound;
    else return updateGroup;
  }

  static async addSubgroup(mainGroupId: string, subgroupId: string): Promise<Group> {
    const group = await GroupRepository.findById(mainGroupId) as Group;
    if (!group) throw new GroupNotFound;
    const flag = await GroupManager.doesTheGroupExist(group, subgroupId);
    if (flag === true) {
      throw new groupIsAlreadyExists
    }
    const updateGroup = await GroupRepository.addSubgroup(mainGroupId, subgroupId);
    if (updateGroup) {
      return updateGroup;
    } else {
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
      const group = await GroupRepository.findGroupByID(subgroupId);
      const doseGroupExists = await GroupManager.doesTheGroupExist(group as unknown as Group, newSubgroupId);
      if (doseGroupExists === true) {
        return true;
      }
    };
    return false;
  }

  static async showGroupHierarchy(groupId: string, groups: Group[]) {
    const group = await GroupRepository.findById(groupId) as Group;
    const subgroups = group.subgroups;
    if (subgroups) {
      for (const groupId of subgroups) {
        const group = await GroupRepository.findById(groupId)
        groups.push(group);
        GroupManager.showGroupHierarchy(groupId, groups);
      }
    }
    return groups;
  }

  static async getPersonGroups(personId: string) {
    const groups = await GroupRepository.gelAllGroups();
    const participantGroups: string[] = [];
    if (groups) {
      for (const group of groups) {
        const groupName = group.groupName;
        for (const participantId of group.participants) {
          if (participantId === personId) {
            participantGroups.push(groupName);
          }
        }
      }

    }
    return participantGroups;
  }
}
