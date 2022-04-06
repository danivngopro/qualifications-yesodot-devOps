import { PersonError } from './errors';

export class ValidationError extends PersonError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends PersonError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}
/* istanbul ignore next */
export class PersonnameInvalidError extends PersonError {
  constructor(message = 'personname is invalid') {
    super(message, 400);
  }
}
export class PersonNotFound extends PersonError {
  constructor() {
    super('Person not found', 404);
  }
}