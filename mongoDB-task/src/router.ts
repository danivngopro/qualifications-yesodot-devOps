import { Router } from 'express';
import { BookRouter } from './books/books.router';

const AppRouter: Router = Router();

AppRouter.use('/api/books', BookRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
