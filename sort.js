const numbers = [414, 200, 5, 10, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [3, 5, 10, 200, 414]

const num = [2, 4, 6, 8, 10];
const hasEven = num.every((n) => n%2 ===0);
console.log(hasEven); // Output: true

const nums = [1, 3, 5, 7, 8, 9];
const hasSomeEvenNumbers = nums.some((num) => num % 2 === 0);

console.log(hasSomeEvenNumbers); // true