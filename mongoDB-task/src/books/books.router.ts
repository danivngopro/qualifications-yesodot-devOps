import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { BookController } from './books.controller';
import {
  createAuthorReqSchema,
  createBookReqSchema,
  getAllInRangeSchema,
  getAuthorListSchema,
  getBookSchema,      
} from './validator/books.schema';

const BookRouter: Router = Router();

BookRouter.post('/', ValidateRequest(createBookReqSchema), wrapAsync(BookController.create)); 
BookRouter.post('/author', ValidateRequest(createAuthorReqSchema), wrapAsync(BookController.createAuthor)); 
BookRouter.get('/view', ValidateRequest(getAuthorListSchema), wrapAsync(BookController.getBooksListByAuthor)); 
BookRouter.get('/search', ValidateRequest(getBookSchema), wrapAsync(BookController.findBook));
BookRouter.get('/pages', ValidateRequest(getAllInRangeSchema),wrapAsync(BookController.pagesInRange));
BookRouter.get('/sortedBooks', ValidateRequest(getAllInRangeSchema),wrapAsync(BookController.sortedBooks));


export { BookRouter };