// Object freeze & Seal
{
  const person = {
    firstName: "Rafi",
    lastName: "Akbar",
  };

  // Object.freeze(person);
  Object.seal(person);
  person.firstName = "diubah";
  person.middleName = "Hokuya";
  delete person.lastName; //tidak berubah
  console.info(person);
}

// Object Assign
// Menggabungkan semua attribute dari sebuah object ke object lain

{
  const target = { firstName: "Rafi" };
  const source = { lastName: "Akbar" };

  Object.assign(target, source);

  console.info("Target", target);
  console.info(source);
}

// Object property name and value
{
  const person = {
    firstName: "Eko",
    lastName: "Khannedy",
  };

  console.info(Object.values(person));
  console.info(Object.getOwnPropertyNames(person));
}
