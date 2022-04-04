import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { PersonController } from './persons.controller';
import {
  createPersonReqSchema,
} from './validator/users.schema';

const PersonRouter: Router = Router();

PersonRouter.post('/', ValidateRequest(createPersonReqSchema), wrapAsync(PersonController.create));
PersonRouter.get('/viewPerson', ValidateRequest(getPersonSchema), wrapAsync(PersonController.getPersonByName)); 


export { PersonRouter };
