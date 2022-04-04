import { Person } from './persons.interface';
import { PersonModel } from './persons.model';

export class PersonRepository {
  static create(newPerson: Person): Promise<Person> {
    return PersonModel.create(newPerson);
  }
}
