const map = new Map();
map.set("Name", "Rafi Akbar");
map.set("Age", 22);

console.info(map);
console.info(map.get("Name"));
console.info(map.get("Age"));

for (const element of map) {
  console.info(element);
}

map.forEach((key, value) => {
  console.info(`${value} ${key}`);
});
