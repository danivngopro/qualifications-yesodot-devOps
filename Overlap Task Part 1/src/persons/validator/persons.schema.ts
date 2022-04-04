import * as Joi from 'joi';

const PersonSchema = Joi.object({
  firstName: Joi.string().default(''),
  lastName: Joi.string().default(''),
  personname: Joi.string().default(''),
  email: Joi.string().regex(/^\S+@\S+\.\S+$/).default(''),
  password: Joi.string().default(''),
});

export const createPersonReqSchema = Joi.object({
  body: PersonSchema,
  query: {},
  params: {},
});

