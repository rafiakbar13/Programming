// Array Loop
{
  const array = ["Muhammad", "Rafi", "Akbar"];

  array.forEach(function (value, index) {
    console.info(`${value} : ${index}`);
  });

  array.forEach((value, index) => console.info(`${value} : ${index}`));

  array.forEach((value) => console.info(value));
}

// Array Queue
{
  const Queue = [];

  Queue.push("Rafi");
  Queue.push("Akbar");
  Queue.push("Hokuya");

  console.info("Queue :", Queue.shift());
  console.info("Queue :", Queue.shift());
  console.info("Queue :", Queue.shift());
  console.info("Queue :", Queue.shift());
}

// Array Stack (LIFO)
{
  const stack = [];

  stack.push("Rafi");
  stack.push("Akbar");
  stack.push("Hokuya");

  console.info("Stack :", stack.pop());
  console.info("Stack :", stack.pop());
  console.info("Stack :", stack.pop());
}

// Array Search
{
  const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

  console.info(
    "find :",
    source.find((value) => value > 3)
  );
  console.info(
    "findIndex :",
    source.findIndex((value) => value > 3)
  );
  console.info("includes :", source.includes(7));
  console.info("indexOf :", source.indexOf(5));
  console.info("lastIndex :", source.lastIndexOf(5));
}

// Array filter
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const ganjil = numbers.filter((value) => value % 2 === 1);
  const genap = numbers.filter((value) => value % 2 === 0);

  console.info("Ganjil : ", ganjil);
  console.info("Genap : ", genap);
}

// Array Transform digunakan untuk transform
{
  const names = ["Muhammad", "Rafi", "Akbar"];
  const number = [1, 2, 3, 4, 5];
  const namesUpper = names.map((value) => value.toUpperCase());
  console.info("namesUpper", namesUpper);

  const namesReduce = names.reduce((acc, value) => `${acc} ${value}`);
  const numberReduce = number.reduce((acc, value) => acc + value);
  console.info("namesReduce : ", namesReduce);
  console.info("numberReduce : ", numberReduce);

  const reduceRight = names.reduceRight((acc, value) => `${acc} ${value}`);
  console.info("reduceRight : ", reduceRight);
  const numberReduceRight = number.reduceRight((acc, value) => acc + value);
  console.info("Number Reduce Right : ", numberReduceRight);
}
