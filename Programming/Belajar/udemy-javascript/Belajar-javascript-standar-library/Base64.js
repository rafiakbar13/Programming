const original = "Muhammad&Rafi=Akbar";
console.info(original);

const encoded = btoa(original);
console.info(encoded);

const decoded = atob(encoded);
console.info(decoded);
