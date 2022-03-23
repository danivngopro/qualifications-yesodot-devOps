import { BookError } from './errors';

export class AuthorNotFound extends BookError {
  constructor() {
    super('Author not found, you should first create the author', 404);
  }
}
export class BookNotFound extends BookError {
  constructor() {
    super('Book not found', 404);
  }
}