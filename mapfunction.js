const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(numbers); // [2, 4, 6, 8, 10]
console.log(doubledNumbers);
const numbersWithIndex = numbers.map(function(number, index) {
    return `Number: ${number}, Index: ${index}`;
});
console.log(numbersWithIndex); // ["Number: 1, Index: 0", "Number: 2, Index: 1", "Number: 3, Index: 2", "Number: 4, Index: 3", "Number: 5, Index: 4"]
const numbersWithArray = numbers.map(function(number, index, array) {
    return number * 2;
});
console.log(numbersWithArray); // ["Number: 1, Index: 0, Array: 1,2,3,4,5", "Number: 2, Index: 1, Array: 1,2,3,4,5", "Number: 3, Index: 2, Array: 1,2,3,4,5", "Number: 4, Index: 3, Array: 1,2,3,4,5", "Number: 5, Index: 4, Array: 1,2,3,4,5"]
const numbersWithThis = numbers.map(function(number) {
      return number * 2;
}, { prefix: 'Number: ' });
console.log(numbersWithThis); // ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]
