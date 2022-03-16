import { Router } from 'express';
import { PrimeRouter } from './primes/primes.router';

const AppRouter: Router = Router();

AppRouter.use('/api/numbers', PrimeRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };
