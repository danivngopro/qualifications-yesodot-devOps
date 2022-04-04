/* eslint-disable @typescript-eslint/no-unused-vars */
import { PersonRepository } from './persons.repository';
import { Person } from './persons.interface';

export class PersonManager {
  static async create(newPerson: Person): Promise<Person> {
    return PersonRepository.create(newPerson);
  }
}
