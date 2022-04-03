import { Author, Book } from './books.interface';
import { AutorModel, BookModel } from './books.model';


export class BookRepository {
  static create(newBook: Book): Promise<Book> {
    return BookModel.create(newBook); 
  }

  static createAuthor(newAuthor: Author): Promise<Author> {
    return AutorModel.create(newAuthor); 
  }

  static searchAuthor(firstName: string, lastName:string): Promise<Author[]>{
    return AutorModel.find({firstName, lastName}).exec();
  }

  static getBooksListByAuthor(author: string): Promise<Book[] | null> {
    return BookModel.find({author}).exec();
  }

  static findBook(bookFilter: string): Promise<Book | null> {
    return BookModel.findOne({bookFilter}).exec();
  } 

  static pagesInRange(): Promise<Book[]> {
    return BookModel.find({numOfPages: {$gte: 251}}).exec();
  }       

  static getBooksList(): Promise<Book[]> {
    return BookModel.find().exec();
  }

   static filteredBooks(): Promise<any[]>{
     return BookModel.aggregate( [
      {
        $match:{ numOfPages: { $gte: 200 },
        dateOfBublication: { $gt:  new Date("2015-01-01"), $lt: new Date("2020-01-01")}, 
        author: {$regex: /^p/, $options: "i"} } 
      },
      
      {
        $sort: { author: 1, numberOfPages: 1}
      },

      {
         $project: { bookName: 1, author: 1 }
      },
      ]).exec()
  }
}




