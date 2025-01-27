// dijamin selalu unik
{
  const firstName = Symbol();
  const lastName = Symbol();

  const person = {};
  person[firstName] = "Rafi";
  person[lastName] = "Akbar";

  console.info(person);
}

{
  // symbol for
  const firstName = Symbol();
  const lastName = Symbol();

  const person = {};
  person[Symbol.for("firstName")] = "Rafi";
  person[Symbol.for("lastName")] = "Akbar";

  console.info(person[Symbol.for("firstName")]);
  console.info(person[Symbol.for("lastName")]);
}
