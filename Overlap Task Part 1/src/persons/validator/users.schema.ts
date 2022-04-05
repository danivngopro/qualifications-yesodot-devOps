import * as Joi from 'joi';

const PersonSchema = Joi.object({
  firstName: Joi.string().default(''),
  lastName: Joi.string().default(''),
});

const IdSchema = Joi.object({
  id: Joi.string().length(24),
});

export const createPersonReqSchema = Joi.object({
  body: PersonSchema,
  query: {},
  params: {},
});

export const getByIdReqSchema = Joi.object({
  body: {},
  query: {},
  params: IdSchema,
});

export const updatByIdSchema = Joi.object({
  body: PersonSchema,
  query: {},
  params: IdSchema,
});

