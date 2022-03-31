export interface Book {
  bookName: string;
  bookDescription: string;
  dateOfBublication: Date;
  author: string;  
  numOfPages: number;
}

export interface Author {
  firstName: string;
  lastName: string;
  bornYear: number;
}
