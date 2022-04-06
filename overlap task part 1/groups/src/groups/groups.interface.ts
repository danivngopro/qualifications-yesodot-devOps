export interface Group {
  id?: string;
  groupName: string;
  participantsId: number[];
  subgroupsId: number[];
}