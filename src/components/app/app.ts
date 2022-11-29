import { Header } from '../header/header.js';
import { Main } from '../main/main.js';

export class App {
  constructor() {
    new Header('.container');
    new Main('.container');
  }
}
