import { BookRepository } from './books.repository';
import { Author, Book } from './books.interface';
import { AuthorNotFound, BookNotFound } from '../utils/errors/book';



export class BookManager {
  static async create(newBook: Book): Promise<Book> {
    const authorName = newBook.author.split(' ',2);
    const firstName = authorName[0];
    const lastName = authorName[1];
    console.log(firstName, lastName);
    const authorList = await BookRepository.searchAuthor(firstName, lastName);
    console.log("line 11", authorList);
    newBook.dateOfBublication = new Date(newBook.dateOfBublication);  
    if(authorList && authorList.length === 0){   //debug - check what getBooksList.. returns
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






