/* eslint-disable @typescript-eslint/no-unused-vars */
import { GroupRepository } from './groups.repository';
import { Group } from './groups.interface';
import { GroupNotFound } from '../utils/errors/group';

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

}
