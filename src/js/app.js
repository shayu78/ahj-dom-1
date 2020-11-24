import Board from './Board';
import Person from './Person';

const board = new Board();
const person = new Person();
board.init();
person.init();
const goblin = person.getPerson();

setInterval(() => board.randomPersonMove(goblin), 1000);
