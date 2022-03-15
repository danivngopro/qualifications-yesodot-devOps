import { PrimeError } from './errors';

export class ValidationError extends PrimeError {
  constructor() {
    /* istanbul ignore next */
    super('Validation error', 400);
  }
}

export class IdInvalidError extends PrimeError {
  /* istanbul ignore next */
  constructor(message = 'Id is invalid') {
    super(message, 400);
  }
}
/* istanbul ignore next */
export class PrimenameInvalidError extends PrimeError {
  constructor(message = 'primename is invalid') {
    super(message, 400);
  }
}
export class PrimeNotFound extends PrimeError {
  constructor() {
    super('Prime not found', 404);
  }
}