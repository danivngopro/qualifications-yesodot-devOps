import { Request, Response } from 'express';
//import { Book } from './books.interface';
//import { Author } from './books.interface';
import { BookManager } from './books.manager';

export class BookController {
  static async create(req: Request, res: Response): Promise<void> { 
    const newBook = req.body;
    res.json(await BookManager.create(newBook));
  }

  static async createAuthor(req: Request, res: Response): Promise<void> { 
    const newAuthor = req.body;
    res.json(await BookManager.createAuthor(newAuthor));
  }

  static async getBooksListByAuthor(req: Request, res: Response): Promise<void> { 
    const author = req.query.author as string;
    res.json(await BookManager.getBooksListByAuthor(author));
  }
  
  static async findBook(req: Request, res: Response): Promise<void> { 
   
    const bookName = req.query.bookName as string;
    const bookDescription = req.query.bookDescription as string;
   
    if(!bookDescription){
      res.json(await BookManager.findBook(bookName));
    }
    res.json(await BookManager.findBook( bookDescription));
  }
 
  static async  pagesInRange(_req: Request, res: Response): Promise<void> {
    res.json(await BookManager.pagesInRange());
  }
  
  static async sortedBooks(_req: Request, res: Response): Promise<void> {
    res.json(await BookManager.sortedBooks());
  }

  static async filteredBooks(_req: Request, res: Response): Promise<void> {
    res.json(await BookManager.filteredBooks());
  }
}
