export interface Group {
  [x: string]: any;
  db: any;
  id?: string;
  groupName: string;
  participants: string[];
  subgroups: string[];
}