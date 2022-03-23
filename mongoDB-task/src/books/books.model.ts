/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { Author, Book } from './books.interface';

const bookSchema: mongoose.Schema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  bookDescription: {
    type: String,
    required: true,
  },
  dateOfBublication: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  numOfPages: {
    type: Number,
    required: true,
  },
}, {
  toJSON: {
    virtuals: true,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    transform(_doc, ret) {
      delete ret._id;
    },
  },
  versionKey: false,
  id: true,
  timestamps: { createdAt: true, updatedAt: false },
});

const authorSchema: mongoose.Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bornYear: {
    type: Number,
    required: true,
    unique: true,
  },
},{
  toJSON: {
    virtuals: true,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    transform(_doc, ret) {
      delete ret._id;
    },
  },
  versionKey: false,
  id: true,
  timestamps: { createdAt: true, updatedAt: false },
});


bookSchema.index({ bookName: 1, bookDescription: 1 });
authorSchema.index({ firstName: 1, lastName: 1 });

export const BookModel = mongoose.model<Book & mongoose.Document>('Book', bookSchema);
export const AutorModel = mongoose.model<Author & mongoose.Document>('Author', authorSchema);
