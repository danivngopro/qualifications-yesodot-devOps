import * as Joi from '@hapi/joi';

const BookSchema = Joi.object({
  bookName: Joi.string(),
  bookDescription: Joi.string(),
  dateOfBublication: Joi.string(),
  author: Joi.string(),
  numOfPages: Joi.number(),
});

const AuthorSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  bornYear: Joi.number(),
});

const findBookSchema = Joi.object({
  bookName: Joi.string(),
  bookDescription: Joi.string()
});

const IdSchema = Joi.object({
  id: Joi.string().length(24),
});

const AuthorListSchema = Joi.object({
  author: Joi.string(),
});

export const createBookReqSchema = Joi.object({
  body: BookSchema,
  query: {},
  params: {},
});

export const createAuthorReqSchema = Joi.object({
  body: AuthorSchema,
  query: {},
  params: {},
});

export const getAuthorListSchema = Joi.object({
  body: {},
  query: AuthorListSchema,
  params: {},
});

export const getBookSchema = Joi.object({
  body: {},
  query: findBookSchema,
  params: {},
});

export const getAllInRangeSchema = Joi.object({
  body: {},
  query: {},
  params: {},
});

export const updatByIdSchema = Joi.object({
  body: BookSchema,
  query: {},
  params: IdSchema,
});
