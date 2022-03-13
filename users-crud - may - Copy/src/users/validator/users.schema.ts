import * as Joi from '@hapi/joi';

const UserSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  username: Joi.string(),
  email: Joi.string().regex(/^\S+@\S+\.\S+$/),
  password: Joi.string(),
});

const IdSchema = Joi.object({
  id: Joi.string().length(24),
});

export const createUserReqSchema = Joi.object({
  body: UserSchema,
  query: {},
  params: {},
});

export const getByIdReqSchema = Joi.object({
  body: {},
  query: {},
  params: IdSchema,
});

export const getAllSchema = Joi.object({
  body: {},
  query: {},
  params: {},
});

export const updatByIdSchema = Joi.object({
  body: UserSchema,
  query: {},
  params: IdSchema,
});
