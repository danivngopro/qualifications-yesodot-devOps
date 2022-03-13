import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { UserController } from './users.controller';


const UserRouter: Router = Router();

UserRouter.get('/prime/validate', wrapAsync(UserController.getNumbers));

export { UserRouter };