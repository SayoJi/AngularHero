import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  creatDb() {
    const heros = [
      {id : 1, name : 'hero1'},
      {id : 2, name : 'hero2'},
      {id : 3, name : 'hero3'},
      {id : 4, name : 'hero4'},
      {id : 5, name : 'hero5'},
      {id : 6, name : 'hero6'},
      {id : 7, name : 'hero7'},
      {id : 8, name : 'hero8'},
      {id : 9, name : 'hero9'},
      {id : 10, name : 'hero1'}
    ];
    return {heros};
  }
}
