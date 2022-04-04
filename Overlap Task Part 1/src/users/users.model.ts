/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import * as mongoose from 'mongoose';
import { User } from './users.interface';

const userSchema: mongoose.Schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
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

userSchema.index({ firstName: 1, lastName: 1 });

export const UserModel = mongoose.model<User & mongoose.Document>('User', userSchema);
