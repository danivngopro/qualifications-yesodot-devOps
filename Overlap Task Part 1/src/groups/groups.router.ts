import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { UserController } from './groups.controller';
import {
  createUserReqSchema,
} from './validator/groups.schema';

const UserRouter: Router = Router();

UserRouter.post('/', ValidateRequest(createUserReqSchema), wrapAsync(UserController.create));

export { UserRouter };
