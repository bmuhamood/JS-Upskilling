const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngDevelopers = developers.filter((dev) => dev.age < 30);
console.log(youngDevelopers); // [{ name: "Alice", age: 25 }, { name: "David", age: 25 }]