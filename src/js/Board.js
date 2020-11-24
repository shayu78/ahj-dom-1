export default class Board {
  constructor() {
    this.cells = [];
    this.boardElement = null;
  }

  init() {
    this.boardElement = document.querySelector('.board');
    if (this.boardElement) {
      for (let i = 0; i < 16; i += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        this.cells.push(cell);
      }
      this.cells.forEach((value) => this.boardElement.append(value));
    }
  }

  randomPersonMove(person) {
    const currPerson = document.querySelector('.person');
    if (currPerson) currPerson.remove();
    const cell = this.cells[Math.floor(Math.random() * this.cells.length)];
    cell.append(person);
  }
}
