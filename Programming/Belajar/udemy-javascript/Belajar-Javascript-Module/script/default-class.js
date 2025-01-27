export default class {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.info(`Hello ${name}, nama saya ${this.name}!`);
  }
}
