import * as mongoose from 'mongoose';
import { Group, Person } from './persons.interface';

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


const groupSchema: mongoose.Schema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
  },
  participantsNumber: {
    type: Number,
    required: true,
  },
  subgroupsNumber: {
    type: Number,
    required: true,
  },
  participantsId: {
    type: Array,
    required: true,
  },
  subgroupsId: {
    type: Array,
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
groupSchema.index({ groupName: 1, lastName: 1 });

export const PersonModel = mongoose.model<Person & mongoose.Document>('Person', personSchema);
export const GroupModel = mongoose.model<Group & mongoose.Document>('Group', groupSchema);

