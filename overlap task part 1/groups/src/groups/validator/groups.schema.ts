import * as Joi from 'joi';

const GroupSchema = Joi.object({
  groupName: Joi.string().default(''),
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

