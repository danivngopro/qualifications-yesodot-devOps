import * as Joi from 'joi';

const inputNumberSchema = Joi.object({
  amount: Joi.number().greater(1).less(32),
});

const numbersSchema = Joi.object({
  numbers: Joi.array().items(Joi.number()),
});

export const createInputNumberSchema = Joi.object({
  body: {},
  query: inputNumberSchema,
  params: {},
});

export const NumbersSchema = Joi.object({
  body: numbersSchema,
  query: {},
  params: {},
});






