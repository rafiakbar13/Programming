const person = {};

Reflect.set(person, "firstName", "Rafi");
Reflect.set(person, "lastName", "Akbar");

console.info(person);

console.info(Reflect.get(person, "firstName"));
console.info(Reflect.get(person, "firstName"));
console.info(Reflect.get(person, "lastName"));

console.info(Reflect.has(person, "firstName"));
console.info(Reflect.has(person, "lastName"));
console.info(Reflect.has(person, "Hobies"));
