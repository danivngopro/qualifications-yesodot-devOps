export interface Person {
  id?: string;
  firstName: string;
  lastName: string;
}

export interface Group {
  id?: string;
  participantsId: String[];
  subgroupsId: String[];
}