import * as Joi from 'joi';

const PrimeSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  primename: Joi.string(),
  email: Joi.string().regex(/^\S+@\S+\.\S+$/),
  password: Joi.string(),
});

const IdSchema = Joi.object({
  id: Joi.string().length(24),
});

const amountSchema = Joi.object({
  amount: Joi.number().greater(1).less(32),
});

export const createPrimeReqSchema = Joi.object({
  body: PrimeSchema,
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
  body: PrimeSchema,
  query: {},
  params: IdSchema,
});

export const checkTheAmountSchema = Joi.object({
  body: {},
  query: amountSchema,
  params: {},
});


