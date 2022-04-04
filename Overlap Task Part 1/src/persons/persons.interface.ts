export interface Person {
  length: number;
  id?: string;
  firstName: string;
  lastName: string;
}

export interface Group {
  id?: string;
  participantsId: String[];
  subgroupsId: String[];
}