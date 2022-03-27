/* eslint-disable @typescript-eslint/no-unused-vars */
import { BookRepository } from './books.repository';
import { Author, Book } from './books.interface';
import { AuthorNotFound, BookNotFound } from '../utils/errors/book';


export class BookManager {
  static async create(newBook: Book): Promise<Book> {
    const author = newBook.author;
    if(await BookManager.getBooksListByAuthor(author) === null){   
      throw new AuthorNotFound;
    } else{
      return BookRepository.create(newBook);
    }
  }
  
  static async createAuthor(newAuthor: Author): Promise<Author> {
    return BookRepository.createAuthor(newAuthor);
  }

  static async getBooksListByAuthor(author: string): Promise<Book> {
    const booksList: any = BookRepository.getBooksListByAuthor(author);
    if(booksList != null){
      return booksList;
    } else{
      throw new AuthorNotFound;
    }
  }

  static async findBookByName(bookName: string): Promise<Book> {
    const book: any = await BookRepository.findBookByName(bookName);
    if(book){
      return book;
    } else{
      throw new BookNotFound;
    }
  }

  static async findBookByDescription(bookDescription: string): Promise<Book> {
    const book: any = await BookRepository.findBookByDescription(bookDescription);
    if(book){
      return book;
    } else{
      throw new BookNotFound;
    }
  }

  static async pagesInRange(): Promise<Book[]> {
    const pagesArray = await BookRepository.pagesInRange();
    return pagesArray.sort((a, b) => (a.numOfPages > b.numOfPages) ? 1 : -1);
  }
 
  static async  sortedBooks(): Promise<Book[]> {
    return BookRepository.getBooksList();
  }
}
