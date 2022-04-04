import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { PersonController } from './persons.controller';
import {
  createPersonReqSchema,
} from './validator/persons.schema';

const PersonRouter: Router = Router();

PersonRouter.post('/', ValidateRequest(createPersonReqSchema), wrapAsync(PersonController.create));



export { PersonRouter };
