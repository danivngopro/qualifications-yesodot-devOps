import { Router } from 'express';
import { ValidateRequest } from '../utils/joi';
import { wrapAsync } from '../utils/wrapper';
import { UserController } from './users.controller';
import {
    checkTheAmountSchema
  } from './validator/users.schema';


const UserRouter: Router = Router();

UserRouter.post('/prime/validate', wrapAsync(UserController.getNumbers));
UserRouter.get('/prime', ValidateRequest(checkTheAmountSchema) , wrapAsync(UserController.getPrimeNumbers));

export { UserRouter };