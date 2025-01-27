export class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.info(`Hello ${name}, nama saya ${this.name}!`);
  }
  sayGoodbye() {
    console.info(`Goodbye ${this.name}!`);
  }
}
