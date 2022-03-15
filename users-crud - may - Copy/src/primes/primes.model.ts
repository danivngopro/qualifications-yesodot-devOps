/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { Prime } from './primes.interface';

const primeSchema: mongoose.Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  primename: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  connectedAt: {
    type: Date,
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

primeSchema.index({ firstName: 1, lastName: 1 });

export const PrimeModel = mongoose.model<Prime & mongoose.Document>('Prime', primeSchema);
