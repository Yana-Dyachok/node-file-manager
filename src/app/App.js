import { getUsernameFromArgs } from "../components/get-user-name.js";

export class App {
  name;

  constructor() {
    this.name = getUsernameFromArgs();
    this.greet(); 
  }

  greet() {
    console.log(`Welcome to the File Manager, ${this.name}!`);
  }
}
