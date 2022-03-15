import * as Joi from 'joi';

const amountSchema = Joi.object({
  amount: Joi.number().greater(1).less(32),
});

const numbersSchema = Joi.object({
  numbers: Joi.array().items(Joi.number()),
});

export const checkTheAmountSchema = Joi.object({
  body: {},
  query: amountSchema,
  params: {},
});

export const checkTheNumbersSchema = Joi.object({
  body: numbersSchema,
  query: {},
  params: {},
});






