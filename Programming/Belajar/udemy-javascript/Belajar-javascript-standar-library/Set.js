const set = new Set();
// dijamin tidak ada redundan
set.add("Muhammad");
set.add("Muhammad");
set.add("Rafi");
set.add("Akbar");

console.info(set);

set.forEach((value, key) => console.info(value));
