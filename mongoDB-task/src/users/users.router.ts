import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { UserController } from './users.controller';
import {
  createUserReqSchema, getByIdReqSchema, getAllSchema, updatByIdSchema,
} from './validator/users.schema';

const UserRouter: Router = Router();

UserRouter.post('/', ValidateRequest(createUserReqSchema), wrapAsync(UserController.create));
UserRouter.get('/find', ValidateRequest(getAllSchema), wrapAsync(UserController.getUsersList));
UserRouter.get('/id/:id', ValidateRequest(getByIdReqSchema), wrapAsync(UserController.findUserByID));
UserRouter.put('/id/:id', ValidateRequest(updatByIdSchema),wrapAsync(UserController.updateUserByID));
UserRouter.delete('/id/:id', ValidateRequest(getByIdReqSchema), wrapAsync(UserController.deleteUserByID));

export { UserRouter };