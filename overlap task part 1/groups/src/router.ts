import { Router } from 'express';
import { GroupRouter } from './groups/groups.router';

const AppRouter: Router = Router();

AppRouter.use('/api/groups', GroupRouter);

AppRouter.use('/isalive', (_req, res) => {
  res.status(200).send('alive');
});

AppRouter.use('*', (_req, res) => {
  res.status(404).send('Invalid Route');
});

export { AppRouter };

