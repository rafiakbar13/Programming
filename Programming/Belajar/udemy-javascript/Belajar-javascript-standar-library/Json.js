const person = {
  firstName: "Muhammad",
  middleName: "Rafi",
  lastName: "Akbar",
  addres: {
    country: "Indonesia",
    city: "Bekasi",
  },
  hobbies: ["Coding", "Game", "Travelling"],
};

const json = JSON.stringify(person);
console.info(json);

const jsonObject = JSON.parse(json);
console.info(jsonObject);
