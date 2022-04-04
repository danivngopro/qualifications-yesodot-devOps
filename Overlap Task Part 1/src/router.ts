import { Router } from 'express';
import { PersonRouter } from './persons/persons.router';

const AppRouter: Router = Router();

AppRouter.use('/api/persons', PersonRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
