import { Group } from '../../groups/groups.interface';

export const validGroup: Group = {
    //id: '123456d234561g345612h456',
    groupName: '123',
    participants: [],
    subgroups: []
};

export const invalidGroup: Partial<Group> = {
    groupName: 'string',
    participants: [],
    subgroups: []
};

export const invalidId: string = '1111';
export const validId: string = '123456123456123456123456';