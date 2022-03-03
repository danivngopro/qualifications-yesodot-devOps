import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { UserController } from './users.controller';
import {
  createUserReqSchema,
} from './validator/users.schema';

const UserRouter: Router = Router();

UserRouter.post('/', ValidateRequest(createUserReqSchema), wrapAsync(UserController.create));
export { UserRouter };
