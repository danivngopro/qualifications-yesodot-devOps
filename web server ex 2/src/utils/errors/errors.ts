import * as jayson from 'jayson/promise';

export class ApplicationError extends Error implements jayson.JSONRPCError {
  public code: number;

  constructor(
    public message: string,
    public status: number,
  ) {
    super();
    this.code = this.status;
    this.name = this.constructor.name;
  }
}

export class PrimeError extends ApplicationError {
  constructor(message = 'Prime Error', status = 400) {
    super(message, status);
  }
}
