import { GroupError } from './errors';

export class IdInvalidError extends GroupError {
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}

export class GroupnameInvalidError extends GroupError {
  constructor(message = 'groupname is invalid') {
    super(message, 400);
  }
}

export class GroupNotFound extends GroupError {
  constructor() {
    super('Group not found', 404);
  }
}

export class groupIsAlreadyExists extends GroupError {
  constructor() {
    super('Group is already exists', 404);
  }
}

export class PersonNotFound extends GroupError {
  constructor() {
    super('Person not found', 404);
  }
}