/* eslint-disable @typescript-eslint/no-unused-vars */
import { PersonRepository } from './persons.repository';
import { Person } from './persons.interface';
import { PersonNotFound } from '../utils/errors/person';

export class PersonManager {
  static async create(newPerson: Person): Promise<Person> {
    return PersonRepository.create(newPerson);
  }

  static async getPersonByName(firstName: string) {
    const person: Person = PersonRepository.getPersonByName(firstName);
    if(person.length===0 ){
      throw new PersonNotFound;
    }
    return person;
  }
}
