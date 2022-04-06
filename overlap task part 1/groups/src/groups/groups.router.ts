import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { GroupController } from './groups.controller';
import {
  createGroupReqSchema, getByIdReqSchema, updatByIdSchema,
} from './validator/groups.schema';

const GroupRouter: Router = Router();

GroupRouter.post('/createGroup', ValidateRequest(createGroupReqSchema), wrapAsync(GroupController.create));
GroupRouter.get('/id/:id', ValidateRequest(getByIdReqSchema), wrapAsync(GroupController.findGroupByID));
GroupRouter.put('/id/:id', ValidateRequest(updatByIdSchema),wrapAsync(GroupController.updateGroupByID));
GroupRouter.delete('/id/:id', ValidateRequest(getByIdReqSchema),wrapAsync(GroupController.deleteGroupByID));


export { GroupRouter };
