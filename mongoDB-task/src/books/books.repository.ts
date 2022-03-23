import { Author, Book } from './books.interface';
import { AutorModel, BookModel } from './books.model';

export class BookRepository {
  static create(newBook: Book): Promise<Book> {
    return BookModel.create(newBook); 
  }

  static createAuthor(newAuthor: Author): Promise<Author> {
    return AutorModel.create(newAuthor); 
  }

  static getBooksListByAuthor(author: string): Promise<Book[] | null> {
    return BookModel.find({author}).exec();
  }

  static findBookByName(bookName: string): Promise<Book | null> {
    return BookModel.findOne({bookName}).exec();
  } 

  static findBookByDescription(bookDescription: string): Promise<Book | null> {
    return BookModel.findOne({bookDescription}).exec();
  } 

  static pagesInRange(): Promise<Book[]> {
    return BookModel.find({numOfPages: {$gte: 251}}).exec();
  }       

  static getBooksList(): Promise<Book[]> {
    return BookModel.find().exec();
  }
}
