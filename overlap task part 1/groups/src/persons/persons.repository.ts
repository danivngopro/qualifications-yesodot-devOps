import { Person } from './persons.interface';
import { PersonModel } from './persons.model';

export class PersonRepository {
  static create(newPerson: Person): Promise<Person> {
    return PersonModel.create(newPerson);
  }

  static getPersonByID(personId: string): Promise<Person[]>{
    return PersonModel.find({personId}).exec();
  }

  static updatePersonByID(personId: string, postData: Partial<Person>): Promise<Person | null> {
    return PersonModel.findByIdAndUpdate(personId, postData, {new: true}).exec();
  } 

  static deletePersonByID(personId: string): Promise<Person | null> {
    return PersonModel.findByIdAndDelete(personId).exec();
  }
}
