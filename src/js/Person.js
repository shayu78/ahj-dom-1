import goblin from '../img/goblin.png';

export default class Person {
  constructor() {
    this.personElement = null;
  }

  init() {
    this.personElement = document.createElement('img');
    this.personElement.src = goblin;
    this.personElement.classList.add('person');
  }

  getPerson() {
    return this.personElement;
  }
}
