/* eslint-disable @typescript-eslint/no-unused-vars */
import { PersonRepository } from './persons.repository';
import { Person } from './persons.interface';
import { PersonNotFound } from '../utils/errors/person';

export class PersonManager {
  static async create(newPerson: Person): Promise<Person> {
    return PersonRepository.create(newPerson);
  }

  static async getPersonByID(personId: string) {
    const person = PersonRepository.getPersonByID(personId);
    if((await person).length === 0 ){
      throw new PersonNotFound;
    }
    return person;
  }

  static async updatePersonByID(personId: string, postData: Partial<Person>): Promise<Person> {
    const updatePerson = await PersonRepository.updatePersonByID(personId, postData);
    if(updatePerson){
      return updatePerson;
    } else{
      throw new PersonNotFound;
    }
  }

  static async deletePersonByID(personId: string): Promise<Person> {
    const a: any =  PersonRepository.deletePersonByID(personId);
    if(a != null){
      return a;
    } else{
      throw new PersonNotFound;
    }
    
  }
}
