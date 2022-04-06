import * as mongoose from 'mongoose';
import { Group } from './groups.interface';

const groupSchema: mongoose.Schema = new mongoose.Schema({
  groupName: {
    type: String,
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

groupSchema.index({ groupName: 1 });

export const GroupModel = mongoose.model<Group & mongoose.Document>('Group', groupSchema);
