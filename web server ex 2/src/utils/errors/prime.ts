import { PrimeError } from './errors';

/* istanbul ignore next */
export class emptyArrayError extends PrimeError { 
  constructor(message = 'Array is empty') {
    super(message, 400);
  }
}
