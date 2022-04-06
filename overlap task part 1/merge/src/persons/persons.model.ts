import * as mongoose from 'mongoose';
import { Person } from './persons.interface';

const personSchema: mongoose.Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
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


personSchema.index({ firstName: 1, lastName: 1 });

export const PersonModel = mongoose.model<Person & mongoose.Document>('Person', personSchema);


