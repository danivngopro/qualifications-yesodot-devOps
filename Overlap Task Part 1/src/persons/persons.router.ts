import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { PersonController } from './persons.controller';
import {
  createPersonReqSchema, getByIdReqSchema, updatByIdSchema,
} from './validator/users.schema';

const PersonRouter: Router = Router();

PersonRouter.post('/', ValidateRequest(createPersonReqSchema), wrapAsync(PersonController.create));
PersonRouter.get('/id/:id', ValidateRequest(getByIdReqSchema), wrapAsync(PersonController.getPersonByID));
PersonRouter.put('/id/:id', ValidateRequest(updatByIdSchema),wrapAsync(PersonController.updatePersonByID));
PersonRouter.delete('/id/:id', ValidateRequest(getByIdReqSchema), wrapAsync(PersonController.deletePersonByID));


export { PersonRouter };
