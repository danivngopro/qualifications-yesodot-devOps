import { Router } from 'express';
import { wrapAsync } from '../utils/wrapper';
import { ValidateRequest } from '../utils/joi';
import { GroupController } from './groups.controller';
import {
  createGroupReqSchema, getByIdReqSchema,addPersonToGroupSchema, updatByIdSchema, addsubgroupToGroupSchema, 
} from './validator/groups.schema';

const GroupRouter: Router = Router();

GroupRouter.post('/', ValidateRequest(createGroupReqSchema), wrapAsync(GroupController.create));
GroupRouter.get('/id/:id', ValidateRequest(getByIdReqSchema), wrapAsync(GroupController.findGroupByID));
GroupRouter.put('/id/:id', ValidateRequest(updatByIdSchema),wrapAsync(GroupController.updateGroupByID));
GroupRouter.delete('/id/:id', ValidateRequest(getByIdReqSchema),wrapAsync(GroupController.deleteGroupByID));
GroupRouter.put('/addPerson/id/:id', ValidateRequest(addPersonToGroupSchema), wrapAsync(GroupController.addPerson));
GroupRouter.post('/addSubgroup/id/:id', ValidateRequest(addsubgroupToGroupSchema), wrapAsync(GroupController.addSubgroup));
GroupRouter.get('/hierarchy/id/:id', ValidateRequest(getByIdReqSchema), wrapAsync(GroupController.showGroupHierarchy));
GroupRouter.get('/personGroups/id/:id', ValidateRequest(getByIdReqSchema), wrapAsync(GroupController.getPersonGroups));

export { GroupRouter };


