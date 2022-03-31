import { BookRepository } from './books.repository';
import { Author, Book } from './books.interface';
import { AuthorNotFound, BookNotFound } from '../utils/errors/book';

export class BookManager {
  static async create(newBook: Book): Promise<Book> {
    const author = newBook.author;
    newBook.dateOfBublication = new Date(newBook.dateOfBublication);  
    console.log('line 9', await BookManager.getBooksListByAuthor(author));
    if((await BookManager.getBooksListByAuthor(author)) === ([])){   //debug - check what getBooksList.. returns
      console.log('line 555559')
      throw new AuthorNotFound;
    } else{
      return BookRepository.create(newBook);
    }
  }
  
  static async createAuthor(newAuthor: Author): Promise<Author> {
    return BookRepository.createAuthor(newAuthor);
  }

  static async getBooksListByAuthor(author: string) {
    const booksList: any = BookRepository.getBooksListByAuthor(author);
    if(booksList && booksList.length===0 ){
      throw new AuthorNotFound;
    }
    return booksList;
  }

  static async findBook(bookFilter: string): Promise<Book> {
    const book: any = await BookRepository.findBook(bookFilter);
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

  static async  filteredBooks(): Promise<Book[]> {
    return BookRepository.filteredBooks();
  }
}






