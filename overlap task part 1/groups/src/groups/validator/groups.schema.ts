import * as Joi from 'joi';

const GroupSchema = Joi.object({
  firstName: Joi.string().default(''),
  lastName: Joi.string().default(''),
  groupname: Joi.string().default(''),
  email: Joi.string().regex(/^\S+@\S+\.\S+$/).default(''),
  password: Joi.string().default(''),
});

const IdSchema = Joi.object({
  id: Joi.string().length(24),
});

export const createGroupReqSchema = Joi.object({
  body: GroupSchema,
  query: {},
  params: {},
});

export const getByIdReqSchema = Joi.object({
  body: {},
  query: {},
  params: IdSchema,
});

export const updatByIdSchema = Joi.object({
  body: GroupSchema,
  query: {},
  params: IdSchema,
});

