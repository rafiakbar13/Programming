const input = "12345";

const number = Number(input);

console.info("Number : ", typeof number);
console.info("Input : ", typeof input);
console.info("Number : ", number);

// Static Prpopertis
console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_SAFE_INTEGER);
console.info(Number.NaN);

// Static Method

const data = Number("rafi");

console.info(Number.isNaN(data));
console.info(Number.isInteger(data));

// Number instance Method

const value = Number(12345);
console.info(value.toString(3));
console.info(value.toLocaleString("id-ID"));
