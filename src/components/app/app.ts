import { Header } from "../header/header.js";
import { List } from "../lists/lists.js";
import { Main } from "../main/main.js";

export class App {
  constructor() {
     new Header('.container');
     new Main('slot');
  }
}
